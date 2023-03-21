import iconTwig from './icons.twig';
import iconData from './icons.yml';

import './svgxuse.min';

/**
 * Storybook Definition.
 */
export default {
  title: 'Foundations/Iconography',
  parameters: {
    componentSubtitle:
      'Icons help communicate meaning, actions, status, or feedback.',
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Icons are a simple, easily graspable way to add visual emphasis or interest, signal an action, or indicate a feedback state — all while reducing a user’s cognitive load.\n\n**Usability guidelines**\n\nUsing a consistent set of icons helps establish a familiar look and feel across a site or service, while using individual icons consistently establishes a reliable relationship between the image and a specific concept or action. For example, don’t use an envelope icon to indicate email on one page and mailing address on another. Users should be able to trust that a certain icon always means the same thing, no matter where it’s used on your site. Consistency aids users with cognitive disabilities and creates a better user experience for all users.\n\nUse icons to draw attention to actions. Icons are helpful when combined with text to inform users about performing an action. The icon should directly relate to the text it accompanies.\n\nUse icons to help readers find key information. Use icons as scannable, easy-to-understand visual indicators for key information like a phone number or email address.\n\nUse icons to enhance an actionable target. Icons make great touch or click targets. Use an icon for common actions like opening a menu or sharing an article.\n\nCombine icons with text. Users will not always understand the meaning of icons alone. Use icons combined with text to improve usability.',
      },
    },
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

export const icons = (args) => iconTwig(args);

icons.args = { ...iconData };
