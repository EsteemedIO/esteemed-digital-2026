FROM drupal:10-php8.3-apache

RUN set -eux; \
  apt-get update; \
  apt-get install -y --no-install-recommends default-mysql-client postgresql-client unzip git; \
  rm -rf /var/lib/apt/lists/*

RUN set -eux; \
  composer require --no-interaction --no-progress drupal/commerce:^2.40 drupal/s3fs:^3.7 drush/drush:^12; \
  ln -sf /opt/drupal/vendor/bin/drush /usr/local/bin/drush

COPY docker-entrypoint-esteemed.sh /usr/local/bin/docker-entrypoint-esteemed
RUN chmod +x /usr/local/bin/docker-entrypoint-esteemed

ENTRYPOINT ["docker-entrypoint-esteemed"]
CMD ["apache2-foreground"]
