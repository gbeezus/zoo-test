import ImageMedia from './image_media.twig';
import ResponsiveImage from '../../../01-atoms/images/image/responsive-image.twig';
import Link from '../../../01-atoms/links/link/link.twig';
import imageData from './image_media.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Media/Image',
  component: 'Image Media with Caption',
  parameters: {
    chromatic: { viewports: [400, 1200] },
    docs: {
      description: {
        component:
          '<h2>Documentation</h2>\n' +
          '\n' +
          'Image (media) represents a media entity with a responsive image and an optional caption and credit.' +
          'This use of images is a specific use case for the `<figure>` component.' +
          '\n\n' +
          '<h2>Alignment alignment and width options</h2>\n' +
          '\n' +
          'The platform offers five alignment and width combination for image media. \n' +
          '<ul><li>Full-width: sets the figure/image to be 100% of the full width of its parent container, minus any padding that the container may have built into it. Smaller images could get blurry if the source image doesn’t have enough resolution.</li>' +
          '<li>Left aligned at 50%: sets the figure/image width to 50% of its parent container and aligns it left. Right and bottom margins are built in so text and other content has breathing room.</li>' +
          '<li>Right aligned at 50%: sets the figure/image width to 50% of its parent container and aligns it left. Left and bottom margins are built in so text and other content has room to breath. </li>' +
          '<li>Left aligned at 33%: sets the figure/image width to 33% of its parent container and aligns it left. Right and bottom margins are built in so text and other content isn’t too close to the image.</li>' +
          '<li>Right aligned at 33%: sets the figure/image width to 33% of its parent container and aligns it left. Left and bottom margins are built in so text and other content has suitable whitespace.</li></ul>\n',
      },
    },
  },
  argTypes: {
    figure_alignment: {
      description: 'The alignment for the image.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'image alignment',
        options: ['left', 'right', ''],
      },
    },
    figure_width: {
      description: 'The width the image in relation to its container.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'Image width',
        options: ['half', 'third', ''],
      },
    },
  },
};

const imageMediaStories = imageData
  .map((data) => {
    // Build images to include in figures
    if (data.media) {
      data.figure_media = ResponsiveImage({ ...data.media }); // eslint-disable-line
    }
    if (data.credit) {
      data.credit = Link({ ...data.credit }); // eslint-disable-line
    }
    return `${ImageMedia(data)}`;
  })
  .join('<div style="margin-bottom: 1rem; clear: both;"></div>');

export const imagesWithCaptions = () => imageMediaStories;
