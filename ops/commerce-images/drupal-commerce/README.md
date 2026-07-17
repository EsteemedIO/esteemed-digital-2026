# Esteemed Drupal Commerce Image

This image extends the official Drupal Apache image with:

- Drupal Commerce modules installed by Composer
- S3FS installed by Composer for object-storage backed files
- Drush available at runtime
- Startup bootstrap that installs Drupal when admin credentials are provided and enables Commerce modules

Expected image tag for provisioning:

```sh
DRUPAL_IMAGE=esteemed/drupal-commerce:latest
```

Build and push example:

```sh
docker build -t esteemed/drupal-commerce:latest ops/commerce-images/drupal-commerce
docker push esteemed/drupal-commerce:latest
```

For DigitalOcean Container Registry, set `DOCR_REGISTRY` to the registry name and use a repository tag such as:

```sh
DRUPAL_IMAGE=commerce/drupal-commerce:latest
```
