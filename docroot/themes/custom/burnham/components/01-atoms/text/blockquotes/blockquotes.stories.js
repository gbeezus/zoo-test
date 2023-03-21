import Blockquote from './blockquote.twig';
import blockquoteData from './blockquote.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Text/Blockquote',
  component: Blockquote,
  parameters: {
    docs: {
      description: {
        component:
          "The block quote is a way to cite any source. Storytellers often use it to entice the reader's eye ot a notable quote or highlight. Also known as a pull quote. They are set off from the main text as a distinct paragraph or block. \n\nThere are two fields: the quote itself, and the source of the quote.\n\nThis element should not contain rich text formatting, images, audio or videos. Consider other compoonents if you need an attention-getting mechanism that is not a citing of a source. For example, try using warning text, inset text, call-to-action, an info sidebar, or alerts.",
      },
    },
  },
  argTables: {
    blockquote_content: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'The text for the blockquote.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    blockquote_source: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'The source of the quote.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
  },
};

export const BlockquoteExample = (args) => Blockquote(args);
BlockquoteExample.args = blockquoteData;
