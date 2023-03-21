import Heading from './headings/_heading.twig';
import InlineElements from './text/inline-elements.twig';
import InlineHeaderElements from './headings/inline-headings.twig';
import Paragraph from './text/paragraph.twig';
import Pre from './text/pre.twig';

import headingData from './headings/headings.yml';
import paragraphData from './text/typography--paragraph-styles.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };

// Loop over items in headingData to show each one in the example below.
const headings = headingData.map((d) => Heading(d)).join('');
export const Headings = () => headings;

export const InlineHeadings = () => InlineHeaderElements({});

export const InlineText = () => InlineElements({});

const paragraphs = paragraphData.map((d) => Paragraph(d)).join('');
export const paragraphStyles = () => paragraphs;

export const Preformatted = () => Pre({});
