Drupal.behaviors.minimaBackToTopLink = {
  attach() {
    // Import variables from Drupal.settings.
    const { pageThreshold, targetElementQuery } =
      drupalSettings.minima.backToTop;
    const offset = 200;

    // Set some more variables.
    const longPageClassName = 'page__long';
    const documentLength = () => document.documentElement.scrollHeight;
    const windowHeight = () => window.innerHeight;

    // If there isn't an element with the class 'back-to-top', stop executing this script.
    const backToTopLink = document.getElementsByClassName('back-to-top')[0];
    if (!backToTopLink) {
      return;
    }

    // If we've set up event handlers already, stop executing this script.
    if (backToTopLink.classList.contains('processed')) {
      return;
    }

    // Returns true when the page is more than longer than the threshold we have set.
    const pageIsLong = () => {
      return documentLength() / windowHeight() > pageThreshold;
    };

    // If we already know the page is long, stop executing this script.
    if (pageIsLong()) {
      document.getElementsByTagName('body')[0].classList.add(longPageClassName);
      return;
    }

    // Returns true if the targetElement is on the next screen (plus an offset).
    const scrollTargetOnNextScreen = () => {
      const scrollTarget = document.querySelector(targetElementQuery);
      return scrollTarget
        ? window.scrollY + windowHeight() + offset > scrollTarget.offsetTop
        : false;
    };

    // Handler for scroll event.
    const scrollHandler = () => {
      if (scrollTargetOnNextScreen()) {
        if (pageIsLong()) {
          document
            .getElementsByTagName('body')[0]
            .classList.add(longPageClassName);
        }
        document.removeEventListener('scroll', scrollHandler);
      }
    };

    // Set up an event listener.
    document.addEventListener('scroll', scrollHandler);
    backToTopLink.classList.add('processed');
  },
};
