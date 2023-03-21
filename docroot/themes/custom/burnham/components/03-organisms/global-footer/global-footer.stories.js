import GlobalFooter from './global-footer.twig';
import GlobalFooterData from './global-footer.yml';
import metroBrand from '../../02-molecules/menus/metro-brand/metro-brand.twig';
import metroBrandData from '../../02-molecules/menus/metro-brand/metro-brand.yml';

export default {
  title: 'Organisms/Global Footer',
  parameters: {
    // Set the viewports in Chromatic at a component level.
    chromatic: { viewports: [400, 1200] },
  },
};

export const globalFooter = (args) => GlobalFooter(args);
globalFooter.args = {
  ...GlobalFooterData,
  metro_brand_menu: metroBrand(metroBrandData),
};
