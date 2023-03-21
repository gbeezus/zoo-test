import SiteLogo from './site-logo.twig';

import headerLogoData from './site-logo--header.yml';
import footerLogoData from './site-logo--footer.yml';
import metroFooterLogoData from './metro-logo--footer.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Site Logo',
  component: 'Site Logo',
  parameters: {
    componentSubtitle:
      'The site logo identifies the site as being associated with a particular body.',
    docs: {
      description: {
        component:
          'The site logo is a link to the home page wrapped around an image. The logo may be placed in different places on the page (e.g. the header and footer), or even in a content block. The logo_blockname argument facilitates applying different styles in different situations.',
      },
    },
  },
  argTypes: {
    logo_src: {
      type: { name: 'string', required: true },
      defaultValue: null,
      description: 'The source for the logo image file.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    logo_link_url: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description:
        'The destination of the logo link. Defaults to the site home page.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
      control: 'text',
    },
    logo_blockname: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description:
        'The block name for this instance of the logo, typically "header" or "footer".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    logo_alt_text: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'Alt text for the logo image.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
  },
};

export const headerLogo = (args) => SiteLogo(args);
headerLogo.args = headerLogoData;

export const footerLogo = () => SiteLogo(footerLogoData);
export const metroFooterLogo = () => SiteLogo(metroFooterLogoData);
