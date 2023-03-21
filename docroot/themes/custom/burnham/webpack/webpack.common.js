const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackDir = path.resolve(__dirname);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

function getEntries(pattern) {
  const entries = {};

  glob.sync(pattern).forEach((file) => {
    const filePath = file.split(`${path.sep}components${path.sep}`)[1];
    const baseName = path.basename(file, '.js');
    const directories = filePath.split(path.sep);
    const directoryPath = directories
      .slice(0, directories.length - 1)
      .join(path.sep);
    const newfilePath = `js${path.sep}${directoryPath}${path.sep}minima_${baseName}`;
    entries[newfilePath] = file;
  });

  entries.svgSprite = path.resolve(webpackDir, 'svgSprite.js');
  entries.css = path.resolve(webpackDir, 'css.js');

  return entries;
}

module.exports = {
  target: 'web',
  entry: getEntries(
    path.resolve(
      rootDir,
      'components/**/!(*.stories|*.component|*.min|*.test).js',
    ),
  ),
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.SVGSpriteLoader,
      loaders.ImageLoader,
      loaders.JSLoader,
      loaders.FontLoader,
    ],
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.SpriteLoaderPlugin,
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
  ],
  output: {
    path: distDir,
    filename: '[name].js',
  },
  stats: {
    errorDetails: true,
  },
};
