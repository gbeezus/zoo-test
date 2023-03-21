import ClickMenu from '../src/ClickMenu';

Drupal.behaviors.languagePickerMenu = {
  attach(context) {
    const languagePickerElement = context.getElementById(
      'language-picker-menu',
    );
    if (languagePickerElement === null) {
      return;
    }
    const languagePicker = new ClickMenu(languagePickerElement, false);
    languagePicker.init();
  },
};
