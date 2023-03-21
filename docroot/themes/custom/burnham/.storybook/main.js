const _StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { namespaces } = require('./setupTwig');
const dartSass = require('sass');
const globImporter = require('node-sass-glob-importer');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../components/*.stories.mdx', '../components/**/*.stories.@(js)'],
  addons: [
    './docsonly/register.js',
    '@storybook/addon-a11y',
    '@storybook/addon-actions/register',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: null,
      },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        controls: true,
      },
    },
    '@storybook/addon-links',
    'storybook-addon-pseudo-states',
  ],
  webpackFinal: async (config) => {
    if (!config.target) {
      config.target = 'web';
    }

    config.plugins.push(
      new _StyleLintPlugin({
        configFile: path.resolve(__dirname, '../', '.stylelintrc.json'),
        context: path.resolve(__dirname, '../', 'components'),
        files: '**/*.scss',
        failOnError: false,
        quiet: false,
      }),
      new ESLintPlugin({
        context: path.resolve(__dirname, '../', 'components'),
        extensions: ['js'],
      }),
    );

    // Twig
    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twig-loader',
          options: {
            twigOptions: {
              namespaces,
            },
          },
        },
      ],
    });

    // SCSS
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              implementation: dartSass,
              importer: globImporter(),
            },
          },
        },
      ],
    });

    // YAML
    config.module.rules.push({
      test: /\.ya?ml$/,
      loader: 'js-yaml-loader',
    });

    // JS
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    });

    return config;
  },
  refs: {
    'minima-components': {
      title: 'Minima Components',
      url: 'https://ormetro.github.io/minima-components',
      expanded: false,
    },
  },
};
