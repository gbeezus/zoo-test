#!/usr/bin/env node
/**
 * @file a11y.js
 * Contains a script that, when executed, will execute a11y linting tools
 * against the storybook build.
 */

/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

const R = require('ramda');
const path = require('path');
const pa11y = require('pa11y');
const chalk = require('chalk');
const {
  storybookBuildDir,
  pa11y: pa11yConfig,
  ignore,
} = require('../a11y.config');

// Build list of stories from storybook; stories.json is generated from
// `npx sb extract .out .out/stories.json`.
const stories = require('../.out/stories.json');

// Honor ignore rules in config
const componentIds = Object.keys(stories.stories);
const components = componentIds.filter((x) => ignore.stories[x] !== true);

const STORYBOOK_BUILD_DIR = path.resolve(__dirname, '../', storybookBuildDir);
const STORYBOOK_IFRAME = path.join(STORYBOOK_BUILD_DIR, 'iframe.html');

const severityToColor = R.cond([
  [R.equals('error'), R.always('red')],
  [R.equals('warning'), R.always('yellow')],
  [R.equals('notice'), R.always('blue')],
]);

const issueIsValid = ({ code, runnerExtras: { description } }) =>
  !(ignore.codes.includes(code) || ignore.descriptions.includes(description));

const logIssue = ({ type: severity, message, context, selector }) => {
  console.log(`
    severity: ${chalk[severityToColor(severity)](severity)}
    message: ${message}
    context: ${context}
    selector: ${selector}
  `);
};

const logReport = ({ issues, pageUrl }) => {
  // Find out if this story should ignore particular codes
  const params = new Proxy(new URLSearchParams(pageUrl.split('?')[1]), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const storyIgnoreCodes = ignore.stories[params.id];
  const validIssues = issues
    .filter(issueIsValid)
    .filter(
      ({ code }) =>
        !storyIgnoreCodes ||
        (typeof storyIgnoreCodes === 'object' &&
          !storyIgnoreCodes.includes(code)),
    );
  const hasIssues = validIssues.length > 0;

  if (hasIssues) {
    console.log(chalk.red(`Issues found in component: ${pageUrl}`));
    validIssues.map(logIssue);
  } else {
    console.log(chalk.green(`No issues found in component: ${pageUrl}`));
  }

  return hasIssues;
};

const lintComponent = async (name) => {
  pa11y(`${STORYBOOK_IFRAME}?id=${name}`, {
    chromeLaunchConfig: {
      ignoreHTTPSErrors: true,
      args: ['--no-sandbox', '--disable-web-security'],
    },
    includeNotices: true,
    includeWarnings: true,
    ...pa11yConfig,
  }).then((results) => logReport(results));
};

const lintReportAndExit = async () => {
  try {
    await Promise.all(components.map((name) => lintComponent(name)));
  } catch (error) {
    console.error(error.message);
  }
};

// Only perform linting/reporting when instructed.
/* istanbul ignore next */
if (R.pathEq(['argv', 2], '-r')(process)) {
  lintReportAndExit();
}

module.exports = {
  severityToColor,
  issueIsValid,
  logIssue,
  logReport,
  lintComponent,
  lintReportAndExit,
};
