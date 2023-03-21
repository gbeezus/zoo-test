import Button from './twig/button.twig';
import primaryButtonData from './twig/primaryButton.yml';
import secondaryButtonData from './twig/secondaryButton.yml';
import tertiaryButtonData from './twig/tertiaryButton.yml';
import dangerButtonData from './twig/dangerButton.yml';
import iconButtonData from './twig/iconButton.yml';
import iconTextButtonData from './twig/iconTextButton.yml';

/**
 * Storybook Definition
 */
// Create icon Button List
const iconButtonList = iconButtonData.map((data) => Button(data)).join('');

// Create icon and text Button List
const iconTextButtonList = iconTextButtonData
  .map((data) => Button(data))
  .join('');

export default {
  id: 'button',
  title: 'Atoms/Button',
  component: Button,
  decorators: [(Story) => `<div style="padding: 1em;">${Story()}</div>`],
  parameters: {
    componentSubtitle: 'Use buttons to draw attention to important actions. ',
    docs: {
      description: {
        component:
          'Buttons are used primarily for actions, such as "Submit", "Close", "Cancel", or "Reset". Use primary buttons for actions that go to the next step (such as submitting forms), and use secondary or tertiary buttons for actions that happen on the current page. For navigating to other pages, consider a link or call-to-action.\n\nIn English, button labels should be a short, succinct action statement that explains what will happen when the button is activated, and not a sentence. Except for very clear single word actions like Subscribe, the recommended button label practice is to use a verb and a noun. For example, "Save draft." In order to prevent buttons from becoming so large that they create layout issues or stop resembling a button, the label should not exceed 25 characters.\n\nAll buttons can have a disabled state, which grays out the visual style and removes the link and hover state.',
      },
    },
    a11y: {
      config: { exclude: ['.button--disabled'] },
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
    button_content: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'The text or other content for the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    button_icon: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'An icon to show on the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'Button icon',
        options: { none: '', star: 'star', chevron: 'chevron-right' },
      },
    },
    button_theme: {
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description:
        'The theme of button: primary, secondary, tertiary or danger.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        name: 'Button theme',
        options: ['primary', 'secondary', 'tertiary', 'danger'],
      },
    },
    button_size: {
      type: { name: 'string', required: false },
      defaultValue: 'medium',
      description: 'The size of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
      control: {
        type: 'select',
        name: 'Button size',
        options: ['large', 'medium', 'small'],
      },
    },
    button_is_disabled: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Defines whether or not the button group is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
        name: 'Button is disabled',
      },
    },
    button_base_class: {
      defaultValue: 'button',
      description: 'The base class for the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
      control: 'text',
    },
  },
};

export const PrimaryButton = (args) => Button(args);
PrimaryButton.args = { ...primaryButtonData };
export const primaryButtonActiveState = () => Button({ ...primaryButtonData });
primaryButtonActiveState.parameters = {
  pseudo: { active: 'button' },
};

export const primaryButtonFocusState = () => Button({ ...primaryButtonData });
primaryButtonFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('.button--primary').focus();
};

export const primaryButtonHoverState = () => Button({ ...primaryButtonData });
primaryButtonHoverState.parameters = {
  pseudo: { hover: 'button' },
};

export const primaryButtonVisitedState = () => Button({ ...primaryButtonData });
primaryButtonVisitedState.parameters = {
  pseudo: { visited: 'button' },
};

export const SecondaryButton = () => Button(secondaryButtonData);
export const secondaryButtonHoverState = () =>
  Button({ ...secondaryButtonData });
secondaryButtonHoverState.parameters = {
  pseudo: { hover: 'button' },
};

export const TertiaryButton = () => Button(tertiaryButtonData);
export const tertiaryButtonHoverState = () => Button({ ...tertiaryButtonData });
tertiaryButtonHoverState.parameters = {
  pseudo: { hover: 'button' },
};

export const DangerButton = () => Button(dangerButtonData);
export const dangerButtonHoverState = () => Button({ ...dangerButtonData });
dangerButtonHoverState.parameters = {
  pseudo: { hover: 'button' },
};

export const IconButtons = () => iconButtonList;
export const IconTextButtons = () => iconTextButtonList;
