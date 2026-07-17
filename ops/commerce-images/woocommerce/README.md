# Esteemed WooCommerce Image

This image extends the official WordPress Apache image with:

- WP-CLI
- WooCommerce pre-installed and activated at startup
- WP Offload Media Lite pre-installed for object-storage backed uploads
- A small must-use plugin that reads `CMS_FILES_S3_*` environment variables

Expected image tag for provisioning:

```sh
WOO_IMAGE=esteemed/woocommerce:latest
```

Build and push example:

```sh
docker build -t esteemed/woocommerce:latest ops/commerce-images/woocommerce
docker push esteemed/woocommerce:latest
```

For DigitalOcean Container Registry, set `DOCR_REGISTRY` to the registry name and use a repository tag such as:

```sh
WOO_IMAGE=commerce/woocommerce:latest
```
