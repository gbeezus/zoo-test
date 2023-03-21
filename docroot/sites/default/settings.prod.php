<?php

// @codingStandardsIgnoreFile

/**
 * @file
 * Drupal environment-specific configuration file.
 */
$config['config_split.config_split.local']['status'] = FALSE;

$config['config_split.config_split.acquia']['status'] = TRUE;

$config['config_split.config_split.development']['status'] = FALSE;
$config['config_split.config_split.test']['status'] = FALSE;
$config['config_split.config_split.production']['status'] = TRUE;

// Environment indicator
$config['environment_indicator.indicator'] = [
  'bg_color' => '#FF0000',
  'fg_color' => '#FFFFFF',
  'name' => 'Production'
];
