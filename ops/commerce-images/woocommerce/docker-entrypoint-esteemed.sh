#!/bin/sh
set -eu

if [ "${1:-}" = "apache2-foreground" ] || [ "${1:-}" = "php-fpm" ]; then
  docker-entrypoint.sh "$@" &
  child="$!"

  tries=0
  until wp --allow-root --path=/var/www/html core is-installed >/dev/null 2>&1; do
    tries=$((tries + 1))
    if [ "$tries" -gt 120 ]; then
      echo "WordPress did not become installable before timeout; continuing with web process."
      wait "$child"
      exit $?
    fi

    if [ -n "${WORDPRESS_ADMIN_USER:-}" ] && [ -n "${WORDPRESS_ADMIN_PASSWORD:-}" ] && [ -n "${WORDPRESS_ADMIN_EMAIL:-}" ]; then
      wp --allow-root --path=/var/www/html core install \
        --url="${WORDPRESS_SITE_URL:-http://localhost}" \
        --title="${WORDPRESS_SITE_TITLE:-Esteemed Commerce}" \
        --admin_user="$WORDPRESS_ADMIN_USER" \
        --admin_password="$WORDPRESS_ADMIN_PASSWORD" \
        --admin_email="$WORDPRESS_ADMIN_EMAIL" >/dev/null 2>&1 || true
    fi

    sleep 5
  done

  wp --allow-root --path=/var/www/html plugin activate woocommerce >/dev/null 2>&1 || true
  wp --allow-root --path=/var/www/html plugin activate amazon-s3-and-cloudfront >/dev/null 2>&1 || true

  wait "$child"
  exit $?
fi

exec docker-entrypoint.sh "$@"
