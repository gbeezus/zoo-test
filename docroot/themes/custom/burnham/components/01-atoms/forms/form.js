Drupal.behaviors.minimaForms = {
  attach(context) {
    /**
     * Helper function to determine if an element is already in view.
     *
     * https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
     */
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    /**
     * Pseudo form-elements have pseudo-focus and they need a little help to be
     * visible on the screen when they are focused.
     */
    context
      .querySelectorAll(
        'input[type="checkbox"].unprocessed, input[type="radio"].unprocessed',
      )
      .forEach((option) => {
        option.addEventListener('focus', () => {
          if (!isElementInViewport(option.parentElement)) {
            option.parentElement.scrollIntoView({
              behavior: 'auto',
              block: 'end',
            });
          }
        });
        option.classList.remove('unprocessed');
      });
  },
};
