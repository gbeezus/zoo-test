<?php

// @codingStandardsIgnoreFile

/**
 * @file
 * Drupal environment-specific configuration file.
 */
$config['config_split.config_split.local']['status'] = FALSE;

$config['config_split.config_split.acquia']['status'] = TRUE;

$config['config_split.config_split.development']['status'] = FALSE;
$config['config_split.config_split.test']['status'] = TRUE;
$config['config_split.config_split.production']['status'] = FALSE;

// Environment indicator
$config['environment_indicator.indicator'] = [
  'bg_color' => '#F3EB12',
  'fg_color' => '#000000',
  'name' => 'Staging'
];
