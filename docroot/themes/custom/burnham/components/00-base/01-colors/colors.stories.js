import colors from './colors.twig';
import colorsData from './colors.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Foundations/Colors',
  parameters: {
    componentSubtitle:
      'These guidelines around the use of color will help you create consistent and trustworthy digital experiences throughout the Metro Drupal platform.',
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'A foundational building block in this design system is color. The primary color palette is comprised of greens, blues, salmon, and grays. These Pacific Northwest-themed colors will be present on all pages. Use these colors to create consistency and a strong visual hierarchy throughout the page. \n\nThere are several categories of color palettes provided. The <strong>brand category</strong> has a primary, secondary and accent colors. The primary color should be used most often and the additional colors used sparingly and purposefully. The <strong>UI category</strong> has colors for hyperlinks and their various states. The <strong>semantic category</strong> colors (patterned after traffic signals) are reserved for notifications, information, warnings, and errors. The <strong>grays category</strong> is typically used for text, layout, borders, and rules. \n\nThe contrast ratio of text and interactive elements must meet the Metro accessibility standard of WCAG 2.1 level AA. Check your color combinations with a color contrast tool like this one: https://webaim.org/resources/contrastchecker/ \n\nWithin the brand colors, a range of tints are available. The primary, secondary and accent colors in their 100 percent level (for example, <em>primary-100-pct</em>) meet color contrast standards for any size text when combined with either white or black. As a result, those 100 percent colors should be the default choice, and the darker or lighter instances used for special cases. ',
      },
    },
  },
};
export const Palettes = () => colors(colorsData);
