module.exports = (api) => {
  api.cache(true);

  const sourceType = 'unambiguous';

  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'usage',
      },
    ],
    [
      'minify',
      {
        builtIns: false,
      },
    ],
  ];

  const comments = false;

  return { presets, comments, sourceType };
};
