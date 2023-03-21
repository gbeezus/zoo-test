import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';

// Theming
import minimaTheme from './burnhamTheme';

// GLOBAL CSS
import '../components/style.scss';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

// Get design tokens
import designTokens from '../components/00-base/config.design-tokens.yml';

// Set viewports
let customViewports = designTokens.theme.breakpoints;
Object.keys(customViewports).map((breakpoint) => {
  let width = parseInt(String(customViewports[breakpoint]).slice(0, -2));
  if (!width) {
    width = 320;
  }
  let height = '1200px';
  customViewports[breakpoint] = {
    name: breakpoint + ' (' + width + ' x ' + height + ')',
    styles: { width: width + 1 + 'px', height: height },
  };
});

export const parameters = {
  options: {
    theme: minimaTheme,
  },
  // always reset the view mode to "canvas" / "story" whenever the user navigates
  // viewMode: 'story',
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
};

// debugging tool
import '@storybook/addon-console';

// addDecorator deprecated, but not sure how to use this otherwise.
addDecorator((storyFn) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

setupTwig(Twig);
