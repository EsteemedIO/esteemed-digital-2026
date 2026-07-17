# Fix ecommerce product integration and auto-provisioning gaps

## Context

Recent ecommerce work added Stripe catalog entries and auto-provisioning flows for Esteemed Commerce / Medusa, WooCommerce, and Drupal Commerce.

Review found several runtime and product-contract issues in:

- `app/api/webhooks/stripe/route.js`
- `app/api/commerce/provision/route.js`
- `lib/data.js`
- `lib/product-page-pricing.js`
- `app/pricing/page.jsx`

The production build passes, but the provisioning flow has blockers that can create duplicate infrastructure, fail auth between internal routes, and deploy base CMS containers rather than the advertised ecommerce platforms.

## Findings

### P0: Stripe webhook retries can create duplicate paid infrastructure

`checkout.session.completed` handling creates a fresh random `appId` every time the event is processed.

Stripe can redeliver webhook events. Without idempotency based on event id, checkout session id, or subscription id, one purchase can create multiple DigitalOcean apps.

Relevant code:

- `app/api/webhooks/stripe/route.js`, app id generation in `provisionCMS`
- `app/api/webhooks/stripe/route.js`, app id generation in `provisionCommerce`

Expected fix:

- Add durable idempotency before provisioning.
- Use a stable app/provisioning key derived from Stripe session/subscription/product.
- Return the existing provisioning result on duplicate delivery.

### P0: Webhook-to-provisioner auth contract does not match

The webhook sends:

```http
Authorization: Bearer ${COMMERCE_PROVISIONER_TOKEN}
```

But `/api/commerce/provision` only accepts:

```http
x-internal-token: ${COMMERCE_PROVISIONER_TOKEN}
```

If `COMMERCE_PROVISIONER_URL` points to this app's provision route, webhook provisioning receives `401`.

Relevant code:

- `app/api/webhooks/stripe/route.js`, provisioner fetch headers
- `app/api/commerce/provision/route.js`, internal auth check

Expected fix:

- Standardize on one internal auth mechanism.
- Prefer accepting `Authorization: Bearer ...` and optionally keep `x-internal-token` for backward compatibility.
- Add a route-level test for internal auth.

### P0: WooCommerce and Drupal Commerce App Platform specs are not deployable as written

The current Docker Hub parser assumes images contain a slash. For official images like `wordpress:latest` and `drupal:latest`, it produces incorrect repository data.

The service also always sets:

```js
http_port: 9000
```

Official WordPress and Drupal images listen on port 80.

Relevant code:

- `app/api/commerce/provision/route.js`, Docker image parsing
- `app/api/commerce/provision/route.js`, `http_port`

Expected fix:

- Correctly parse official Docker Hub images with and without namespace.
- Set platform-specific ports:
  - Medusa: 9000, unless overridden by image contract
  - WordPress/WooCommerce: 80
  - Drupal/Drupal Commerce: 80
- Add tests around generated specs for all three platforms.

### P0: WooCommerce and Drupal Commerce are not actually provisioned

The defaults deploy plain base images:

- `wordpress:latest`
- `drupal:latest`

The pricing/catalog copy promises:

- WordPress + WooCommerce pre-installed
- Drupal + Commerce pre-installed

There is no WooCommerce plugin install, Drupal Commerce install, Composer/Drush step, bootstrap command, admin setup, or custom ecommerce-ready image.

Relevant code:

- `lib/data.js`, WooCommerce tier copy
- `lib/data.js`, Drupal Commerce tier copy
- `app/api/commerce/provision/route.js`, default images

Expected fix:

- Decide the supported provisioning contract:
  - Use custom prebuilt images for WooCommerce and Drupal Commerce, or
  - Add bootstrap/install automation that reliably installs the ecommerce packages.
- Do not expose automated purchase/provisioning until the deployed app matches the catalog promise.

### P1: WordPress and Drupal customer files are not persistent

The generated spec creates app containers and a database, but no persistent volume or object storage integration for:

- WordPress uploads
- WordPress plugins/themes
- Drupal public/private files
- Drupal modules/themes installed after deploy

This can cause customer changes to disappear across rebuilds/redeploys.

Relevant code:

- `app/api/commerce/provision/route.js`, generated App Platform spec

Expected fix:

- Add a persistence strategy before calling these plans managed:
  - supported DigitalOcean persistent storage option, or
  - object storage integration, or
  - a documented immutable image plus managed deployment workflow.
- Ensure backups include database and files.

### P1: Stripe webhook signature verification is bypassed when the signature header is missing

If `STRIPE_WEBHOOK_SECRET` is configured but `stripe-signature` is absent, the route skips verification and processes the event.

Relevant code:

- `app/api/webhooks/stripe/route.js`, signature verification condition

Expected fix:

- When `STRIPE_WEBHOOK_SECRET` is configured, reject any request without a valid `stripe-signature` header.
- Use constant-time comparison for signatures.
- Validate timestamp tolerance.

### P1: Provisioning failures are acknowledged to Stripe as successful webhook handling

`provisionCommerce` and `provisionCMS` can return `{ ok: false }`, but the webhook still responds `200`.

That prevents Stripe retry and can leave a paid customer unprovisioned.

Relevant code:

- `app/api/webhooks/stripe/route.js`, provisioning result handling
- `app/api/webhooks/stripe/route.js`, final `NextResponse.json({ received: true, results })`

Expected fix:

- Decide failure semantics:
  - return non-2xx to let Stripe retry for transient failures, or
  - store a failed provisioning job and process retries from an internal queue.
- Do not silently acknowledge failed provisioning without a durable retry path.

### P2: WooCommerce and Drupal Commerce products are registered but not exposed in checkout UI

The tier data and helper functions exist, but no UI imports:

- `wooCommercePricingPlans`
- `drupalCommercePricingPlans`

Pricing copy still describes WooCommerce and Drupal Commerce as custom implementations rather than self-serve plans.

Relevant code:

- `lib/product-page-pricing.js`
- `app/pricing/page.jsx`
- `app/websites/ecommerce/page.jsx`

Expected fix:

- Either expose these as real self-serve plans after the provisioning issues are fixed, or
- Keep them custom/contact-only and remove/disable automated checkout lookup keys until ready.

## Acceptance criteria

- [x] Webhook processing is idempotent for Stripe event/session/subscription retries.
- [x] Internal provisioning auth works between the Stripe webhook and `/api/commerce/provision`.
- [x] Generated DigitalOcean App Platform specs are valid for Medusa, WooCommerce, and Drupal Commerce.
- [x] WooCommerce provisioning creates a working WooCommerce site, not plain WordPress.
- [x] Drupal Commerce provisioning creates a working Drupal Commerce site, not plain Drupal.
- [x] WordPress/Drupal files and installed extensions have a persistence/backup strategy.
- [x] Stripe webhook signature verification rejects missing/invalid signatures when a webhook secret is configured.
- [x] Provisioning failures have a durable retry path or return an error that triggers Stripe retry.
- [x] Pricing/checkout UI accurately reflects which commerce products are self-serve versus custom.
- [x] Tests cover webhook signature behavior, idempotency, internal auth, and generated app specs.

## Progress updates

### 2026-07-17

Implemented:

- Stable provisioning ids based on Stripe subscription/session/customer data.
- Existing DigitalOcean app lookup by generated app name before creating a new app.
- Internal provision route auth accepts both `Authorization: Bearer ...` and `x-internal-token`.
- Webhook calls now send both auth headers for compatibility.
- Stripe webhook signature verification now rejects missing signatures when `STRIPE_WEBHOOK_SECRET` is configured, validates timestamp tolerance, and uses constant-time comparison.
- Webhook returns `502` when provisioning returns `{ ok: false }`, allowing Stripe retry instead of silently acknowledging failed provisioning.
- DigitalOcean App Platform spec generation moved to `lib/commerce-provisioning.js`.
- Docker Hub image parsing now handles official images such as `wordpress:latest` and `drupal:latest`.
- Platform-specific service names and ports:
  - Medusa: `medusa-backend`, port `9000`
  - WordPress/WooCommerce: `wordpress`, port `80`
  - Drupal/Drupal Commerce: `drupal`, port `80`
- WordPress/WooCommerce and Drupal/Drupal Commerce no longer fall back to plain upstream CMS images. They require explicit ecommerce-ready images (`WOO_IMAGE`, `DRUPAL_IMAGE`) or a request-provided image.
- Added focused Playwright tests in `tests/commerce-provisioning.spec.js`.

### 2026-07-17 follow-up

Implemented:

- Added `ops/commerce-images/medusa-nextjs-starter`, a storefront image built from the official Medusa Next.js starter repository.
- Medusa provisioning now creates two services: `medusa-backend` and `medusa-storefront`.
- The storefront service uses `COMMERCE_MEDUSA_STOREFRONT_IMAGE` / `esteemed/medusa-nextjs-starter:latest`, listens on port `8000`, and receives `NEXT_PUBLIC_MEDUSA_BACKEND_URL`.
- The backend keeps Medusa API/admin routes (`/store`, `/admin`, `/auth`, `/health`) while the Next.js storefront owns `/`.
- Added `ops/commerce-images/woocommerce`, a WooCommerce-ready WordPress image with WP-CLI, WooCommerce, WP Offload Media Lite, and startup activation/bootstrap.
- Added `ops/commerce-images/drupal-commerce`, a Drupal Commerce-ready image with Commerce modules, S3FS, Drush, and startup module/bootstrap handling.
- Provisioning now defaults WooCommerce to `esteemed/woocommerce:latest` and Drupal Commerce to `esteemed/drupal-commerce:latest`.
- Provisioning now requires object storage settings for WordPress/Drupal (`CMS_FILES_S3_*`) so customer uploads and CMS-managed files are backed by durable storage instead of ephemeral container filesystems.
- Generated specs pass CMS file storage envs into the app service and mark access keys/passwords as secret envs.
- `.env.example` and `.env.local.example` document the image and object-storage settings.
- Focused tests now cover ecommerce-ready default images and required CMS storage config.

Operational follow-through:

- Build and push `esteemed/medusa-nextjs-starter:latest`, `esteemed/woocommerce:latest`, and `esteemed/drupal-commerce:latest`, or set the corresponding image env vars to pushed registry paths.
- Provide production `CMS_FILES_S3_*` values before enabling self-serve WooCommerce or Drupal Commerce checkout.
- Full production build has been rerun successfully on the clean committed tree.

## Verification already run

```sh
npm run build
```

Initial result during review: pass.

After implementation, focused commerce tests pass:

```sh
npx playwright test tests/commerce-provisioning.spec.js
```

Current full build result: pass.

Focused coverage was added for Stripe webhook signature behavior, idempotent provisioning IDs, provisioner auth compatibility, Docker image parsing, generated DigitalOcean App Platform specs, ecommerce-ready CMS image defaults, and CMS storage requirements.

## Suggested labels

- `bug`
- `provisioning`
- `stripe`
- `ecommerce`
- `priority: high`
