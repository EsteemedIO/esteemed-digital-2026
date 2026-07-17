#!/bin/sh
set -eu

if [ "${1:-}" = "apache2-foreground" ]; then
  if [ ! -f /opt/drupal/web/sites/default/settings.php ] && [ -n "${DRUPAL_ADMIN_USER:-}" ] && [ -n "${DRUPAL_ADMIN_PASSWORD:-}" ]; then
    db_url="pgsql://${DRUPAL_DB_USER}:${DRUPAL_DB_PASS}@${DRUPAL_DB_HOST}:${DRUPAL_DB_PORT:-5432}/${DRUPAL_DB_NAME}"
    drush site:install standard \
      --yes \
      --db-url="$db_url" \
      --site-name="${DRUPAL_SITE_NAME:-Esteemed Commerce}" \
      --account-name="$DRUPAL_ADMIN_USER" \
      --account-pass="$DRUPAL_ADMIN_PASSWORD" || true
  fi

  drush pm:enable commerce commerce_product commerce_cart commerce_checkout commerce_order commerce_payment --yes || true

  if [ -n "${CMS_FILES_S3_BUCKET:-}" ]; then
    drush pm:enable s3fs --yes || true
    drush config:set s3fs.settings bucket "$CMS_FILES_S3_BUCKET" --yes || true
    drush config:set s3fs.settings region "${CMS_FILES_S3_REGION:-us-east-1}" --yes || true
    drush config:set s3fs.settings root_folder "${CMS_FILES_S3_PREFIX:-drupal-files}" --yes || true
  fi
fi

exec docker-php-entrypoint "$@"
