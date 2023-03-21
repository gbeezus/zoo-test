// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

const forestGreen = '#275937';
const grassland = '#a5d867';
const grasslandLight = '#bbe28d';
const savannahLight = '#dddab6';
const textBlack = '#353531';

const burnhamTheme = create({
  base: 'light',

  colorPrimary: grassland,
  colorSecondary: forestGreen,

  // UI
  appBg: savannahLight,
  appContentBg: '#fff',
  appBorderColor: forestGreen,
  appBorderRadius: 0,

  // Typography
  fontBase: '"GT Walsheim", Arial, sans-serif',
  fontCode: 'monospace',
  textColor: textBlack,
  textMutedColor: textBlack,

  // Toolbar
  barTextColor: '#fff',
  barBg: forestGreen,
  barSelectedColor: grasslandLight,

  // Branding
  brandTitle: 'Oregon Zoo',
  brandUrl: 'https://www.oregonzoo.org/',
  brandImage: 'zoo-logo--tagline.png',
});

export default burnhamTheme;
