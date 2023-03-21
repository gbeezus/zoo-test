import footerTwig from './site-footer.twig';

import { footerLogo } from '../../../02-molecules/site-logo/site-logo.stories';

import footerLogoData from '../../../02-molecules/site-logo/site-logo--footer.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Site',
  component: 'Site footer',
};

export const footer = () =>
  footerTwig({ content: [footerLogo(footerLogoData)] });
