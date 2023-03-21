import headerTwig from './site-header.twig';

import { headerLogo } from '../../../02-molecules/site-logo/site-logo.stories';

import headerLogoData from '../../../02-molecules/site-logo/site-logo--header.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Site',
  component: 'Site header',
};

export const header = () =>
  headerTwig({ content: [headerLogo(headerLogoData)] });
