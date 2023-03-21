import boxes from './boxes.twig';
import boxData from './boxes.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Foundations/Box Styles',
  id: 'box-styles',
  parameters: {
    componentSubtitle: 'Border, box shadows, and roundness',
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'A <strong>Box border</strong> style is an aesthetic choice that helps separate content.\n' +
          '\n' +
          'In the platform style, the border of certain objects is used as a way to separate an object of content from other objects on the page. ' +
          'The standard border style is used by cards, the summary box, tables, and the horizontal rule (although that is not a box). ' +
          'Form fields are outlined with a thin border but it is slightly darker to signify and accentuate the user input. ' +
          'The call-to-action block has a different border style in order to draw attention to the call to action. \n' +
          '\n' +
          'The <strong>Box shadow</strong> style tokens set the size and style of an item’s drop shadow.\n' +
          '\n' +
          'The <strong>Border radius</strong> style token sets the degree of roundedness for the corners of polygons such as rectangles, squares, hexagons, or even diamonds.\n' +
          '\n' +
          'In the platform aesthetic, polygons do not have rounded corners. ' +
          'For example, take a look at alerts, accordions, back-to-top links, buttons, the call-to-action block, cards, form fields, images, social sharing, summary box, and tabs. ' +
          'Due to the fact that some instances based on the platform may round their polygons as part of their style, ' +
          'a mixin has been established to specify the standard amount of border radius to use. <strong>For the platform, the border radius is 0.</strong>',
      },
    },
  },
};

export const BoxStyleDemo = () => boxes(boxData);
