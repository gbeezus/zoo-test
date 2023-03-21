const tabIgnoreRules = ['color-contrast', 'nested-interactive'];

module.exports = {
  storybookBuildDir: '.out',
  pa11y: {
    includeNotices: true,
    includeWarnings: true,
    runners: ['axe'],
  },
  // A11y linting is done on a component-by-component
  // basis, which results in the linter reporting some errors that
  // should be ignored. These codes and descriptions allow for those
  // errors to be targeted specifically.
  ignore: {
    codes: [
      'bypass',
      'frame-tested',
      'landmark-one-main',
      'page-has-heading-one',
    ],
    descriptions: ['Ensures all page content is contained by landmarks'],
    // Exceptions for specific stories
    //
    // stories: {
    //   'ignore-this-whole-story': true,
    //   'ignore-just-some-issues-on-this-story': ['this-one', 'that-one'],
    // }
    stories: {
      'introduction--page': true,
      'foundations-colors--palettes': true,
      'foundations-motion--easing': true,
      'foundations-motion--duration': true,
      'box-styles--box-style-demo': true,
      'foundations-iconography--icons': true,
      'foundations-typography--alphanumeric': true,
      'foundations-typography--russian': true,
      'foundations-typography--vietnamese': true,
      'foundations-typography--simplified-chinese': true,
      'foundations-spacing--vertical': true,
      'organisms-global-footer--global-footer': ['color-contrast'],
      'search-box--search-boxes': ['color-contrast'],
      'tabs--tabs': tabIgnoreRules,
      'tabs--tabs-focus-state': tabIgnoreRules,
      'tabs--tabs-hover-and-visited-state': tabIgnoreRules,
      'tabs--tabs-rtl': tabIgnoreRules,
    },
  },
};
