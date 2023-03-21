<?php

// @codingStandardsIgnoreFile

/**
 * @file
 * Drupal environment-specific configuration file.
 */
$config['config_split.config_split.local']['status'] = FALSE;
$config['config_split.config_split.acquia']['status'] = TRUE;
$config['config_split.config_split.development']['status'] = TRUE;
$config['config_split.config_split.test']['status'] = FALSE;
$config['config_split.config_split.production']['status'] = FALSE;

// Environment indicator
$config['environment_indicator.indicator'] = [
  'bg_color' => '#0A8901',
  'fg_color' => '#FFFFFF',
  'name' => 'Development'
];

// Disable captcha during installation
$settings['disable_captcha'] = TRUE;
