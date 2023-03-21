import languagePickerMenu from './language-picker.twig';
import languagePickerData from './language-picker.yml';
import './language-picker';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Menus/Language Picker',
  id: 'language-picker',
  decorators: [
    (Story) => {
      const componentDomNode = document
        .createRange()
        .createContextualFragment(Story().outerHTML || Story());
      Drupal.behaviors.languagePickerMenu.attach(componentDomNode);
      return componentDomNode;
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          'The language picker is a page-level component that allows visitors to change the language of a page when translations are available. The langauge choice persists across page loads.',
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

export const languagePicker = () => languagePickerMenu(languagePickerData);
