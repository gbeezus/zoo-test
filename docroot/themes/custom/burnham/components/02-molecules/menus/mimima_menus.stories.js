import breadcrumb from './breadcrumbs/breadcrumbs.twig';
// import inlineMenu from './inline/inline-menu.twig';
import link from '../../01-atoms/links/link/link.twig';
// import mainMenu from './main-menu/main-menu.twig';
// import socialMenu from './social/social-menu.twig';
// import metroBrand from './metro-brand/metro-brand.twig';

import breadcrumbsData from './breadcrumbs/breadcrumbs.yml';
// import inlineMenuData from './inline/inline-menu.yml';
// import mainMenuData from './main-menu/main-menu.yml';
// import socialMenuData from './social/social-menu.yml';
// import metroBrandData from './metro-brand/metro-brand.yml';

import './main-menu/main_menu';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Menus',
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Breadcrumbs</h2>' +
          "Breadcrumbs are a secondary navigation system that informs the user of the page's place in the site hierarchy.",
      },
    },
    chromatic: { viewports: [400, 1200] },
  },
  argTypes: {
    is_rtl: {
      type: { name: 'string', required: false },
      defaultValue: false,
      description: 'RTL text direction',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'Is RTL',
        options: {
          false: false,
          true: true,
        },
      },
    },
  },
};

// export const main = () => (
//   <div dangerouslySetInnerHTML={{ __html: mainMenu(mainMenuData) }} />
// );

const breadcrumbsLinks = breadcrumbsData.map((d) => link(d));
export const breadcrumbs = (args) => breadcrumb(args);
breadcrumbs.args = { links: breadcrumbsLinks };

// export const inline = () => (
//   <div dangerouslySetInnerHTML={{ __html: inlineMenu(inlineMenuData) }} />
// );
// export const social = () => (
//   <div dangerouslySetInnerHTML={{ __html: socialMenu(socialMenuData) }} />
// );
// export const metroBrandMenu = (args) => metroBrand(args);
// metroBrandMenu.args = metroBrandData;
