import typography from './typography.twig';
import globalData from '../../_design-tokens.artifact.yml';
import aZData from './a-z.yml';
import vietnameseData from './vietnamese.yml';
import chineseData from './simplified-chinese.yml';
import russianData from './russian.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Foundations/Typography',
  parameters: {
    componentSubtitle: '',
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
};
export const Alphanumeric = () =>
  typography({
    ...globalData,
    ...aZData,
  });

export const Vietnamese = () =>
  typography({
    ...globalData,
    ...vietnameseData,
  });

export const SimplifiedChinese = () =>
  typography({
    ...globalData,
    ...chineseData,
  });

export const Russian = () =>
  typography({
    ...globalData,
    ...russianData,
  });
