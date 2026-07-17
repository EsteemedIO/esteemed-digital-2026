# Esteemed Medusa Next.js Starter Image

This image builds the official Medusa Next.js starter from:

```txt
https://github.com/medusajs/nextjs-starter-medusa
```

Expected image tag for provisioning:

```sh
COMMERCE_MEDUSA_STOREFRONT_IMAGE=esteemed/medusa-nextjs-starter:latest
```

Build and push example:

```sh
docker build -t esteemed/medusa-nextjs-starter:latest ops/commerce-images/medusa-nextjs-starter
docker push esteemed/medusa-nextjs-starter:latest
```

To pin a specific starter revision:

```sh
docker build \
  --build-arg MEDUSA_NEXTJS_STARTER_REF=<git-ref> \
  -t esteemed/medusa-nextjs-starter:latest \
  ops/commerce-images/medusa-nextjs-starter
```
