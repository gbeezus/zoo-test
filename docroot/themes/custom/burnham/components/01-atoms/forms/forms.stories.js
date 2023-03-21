import checkbox from './checkbox/checkbox.twig';
import radiobuttons from './radio/radio.twig';
import textarea from './textarea/textarea.twig';
import textfield from './textfields/textfield.twig';

import checkboxData from './checkbox/checkbox.yml';
import radiobuttonsData from './radio/radio.yml';
import textareaData from './textarea/textarea.yml';
import textFieldData from './textfields/textfield.yml';
import toggleData from './toggle/toggle.yml';
import dateData from './date/date.yml';

import './form';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Forms',
  id: 'form-elements',
  decorators: [
    (Story) => {
      const componentDomNode = document
        .createRange()
        .createContextualFragment(Story().outerHTML || Story());
      Drupal.behaviors.minimaForms.attach(componentDomNode);
      return componentDomNode;
    },
  ],
  parameters: {
    chromatic: { viewports: [400, 1200] },
  },
};

const textFieldItems = textFieldData.map((data) => textfield(data)).join('');
const textareaItems = textareaData.map((data) => textarea(data)).join('');

/** Default states */
export const checkboxes = () => checkbox(checkboxData);
export const radioButtons = () => radiobuttons(radiobuttonsData);
export const toggles = () => checkbox(toggleData);
export const textareas = () => textareaItems;
export const textfieldsExamples = () => textFieldItems;
export const dates = () => textfield(dateData);

/** Focus states */
export const checkboxesWithFocusState = () => checkbox(checkboxData);
checkboxesWithFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('input').focus();
};
export const radioButtonsWithFocusState = () => radiobuttons(radiobuttonsData);
radioButtonsWithFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('input').focus();
};
export const togglesWithFocusState = () => checkbox(toggleData);
togglesWithFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('input').focus();
};
export const textareasWithFocusState = () => textarea(textareaData[0]);
textareasWithFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('textarea').focus();
};
export const textfieldsWithFocusState = () => textfield(textFieldData[0]);
textfieldsWithFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('input').focus();
};
export const datesWithFocusState = () => textfield(dateData);
datesWithFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('input').focus();
};
