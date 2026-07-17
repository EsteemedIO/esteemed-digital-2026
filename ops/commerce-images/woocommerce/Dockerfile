FROM wordpress:php8.3-apache

RUN set -eux; \
  apt-get update; \
  apt-get install -y --no-install-recommends less mariadb-client unzip; \
  rm -rf /var/lib/apt/lists/*

RUN set -eux; \
  curl -fsSL -o /usr/local/bin/wp https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar; \
  chmod +x /usr/local/bin/wp; \
  wp --allow-root --path=/usr/src/wordpress plugin install woocommerce amazon-s3-and-cloudfront; \
  mkdir -p /usr/src/wordpress/wp-content/mu-plugins

COPY esteemed-commerce-bootstrap.php /usr/src/wordpress/wp-content/mu-plugins/esteemed-commerce-bootstrap.php
COPY docker-entrypoint-esteemed.sh /usr/local/bin/docker-entrypoint-esteemed

RUN chmod +x /usr/local/bin/docker-entrypoint-esteemed

ENTRYPOINT ["docker-entrypoint-esteemed"]
CMD ["apache2-foreground"]
