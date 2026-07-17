<?php
/**
 * Esteemed Commerce bootstrap for managed WooCommerce stores.
 */

if (!defined('ABSPATH')) {
    exit;
}

if (getenv('CMS_FILES_S3_BUCKET')) {
    define('AS3CF_SETTINGS', serialize([
        'provider' => 'aws',
        'access-key-id' => getenv('CMS_FILES_S3_ACCESS_KEY_ID') ?: '',
        'secret-access-key' => getenv('CMS_FILES_S3_SECRET_ACCESS_KEY') ?: '',
        'bucket' => getenv('CMS_FILES_S3_BUCKET') ?: '',
        'region' => getenv('CMS_FILES_S3_REGION') ?: 'us-east-1',
        'enable-object-prefix' => true,
        'object-prefix' => trim(getenv('CMS_FILES_S3_PREFIX') ?: 'wp-content/uploads', '/') . '/',
        'copy-to-s3' => true,
        'serve-from-s3' => true,
        'remove-local-file' => false,
    ]));
}
