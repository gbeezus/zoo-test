import { addons } from '@storybook/addons';
import burnhamTheme from './burnhamTheme';

addons.setConfig({
  theme: burnhamTheme,
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
});
