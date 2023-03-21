// @ts-check

'use strict';

const { NaniError } = require('nani');

function createCustomProperties(data, prefix = '') {
  let output = '';

  for (const [key, value] of Object.entries(data)) {
    switch (typeof value) {
      case 'number':
      case 'string':
        output += `  --color--${prefix}--${key}: ${value};\n`;
        break;

      default:
        if (value === null || value === undefined) {
          output += 'null';
        } else {
          const nextPrefix = prefix ? `${prefix}--${key}` : key;
          output += `${createCustomProperties(value, nextPrefix)}`;
        }

        break;
    }
  }

  return output;
}

/**
 *
 * @param {import('./types').MinimaData} data
 */
function renderCustomProperties(data) {
  if (typeof data !== 'object' || Array.isArray(data)) {
    throw new NaniError({
      shortMessage: `Expecting non-array object for rendering custom properties; got ${typeof data}`,
    });
  }

  try {
    return `:root {\n${createCustomProperties(data.theme['ui-palette'], '')}
  @media (prefers-color-scheme: dark) {\n${createCustomProperties(
    data.theme['ui-palette--dark'],
    '',
  )}\n}\n}`;
  } catch (error) {
    throw new NaniError({
      shortMessage: 'Unable to compile tokens to CSS custom properties',
      cause: error,
    });
  }
}

module.exports = renderCustomProperties;
