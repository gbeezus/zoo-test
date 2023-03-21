import { addons } from '@storybook/addons';
import { STORY_RENDERED, DOCS_RENDERED } from '@storybook/core-events';

const ADDON_ID = 'addons-docsonly';

addons.register(ADDON_ID, function (api) {
  // Check whether we are on a docsOnly page and add a corresponding body class for styling
  const setBodyClass = function () {
    // Needs animation frame to make sure story component has been mounted
    window.requestAnimationFrame(function () {
      // You can change the logic of when to hide the canvas button of course.
      // you have full access to the storybook API, so you can also configure it per-story etc.
      let isDocsOnly = false;
      if (typeof api.getCurrentStoryData !== 'undefined') {
        isDocsOnly = api.getCurrentStoryData().parameters.docsOnly === true;
      }
      if (isDocsOnly) {
        document.body.classList.add('is-docs-only');
      } else {
        document.body.classList.remove('is-docs-only');
      }
    });
  };

  api.on(STORY_RENDERED, setBodyClass);
  api.on(DOCS_RENDERED, setBodyClass);
});
