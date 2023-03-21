import Image from './image/responsive-image.twig';

import imageData from './image/image.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Images',
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Documentation</h2>\n' +
          '\n' +
          'Adding an image to content should always be towards a purpose. Ask yourself if there’s a real user need. For example, is a point in the text illuminated through the use of imagery? \n' +
          '\n' +
          '<h2>Accessibility</h2>\n' +
          '\n' +
          'All images, except decorative images, must have alternative text. Alternative text, or alt text, is read out by screen readers or displayed if an image does not load or if images have been switched off. Alt text helps with SEO as well. \n' +
          '\n' +
          'Text should never be included as part of the image as this will not be read out by screen readers or translated by automated translators. \n' +
          '\n' +
          '<h2>Image focal point</h2>\n' +
          '\n' +
          'Content authors may upload an image which will get cropped for different uses on the site. The content provider  should have the opportunity to choose a focal point which will be used as a center point by the cropping algorithm. \n' +
          '\n' +
          '<h2>Responsive vs. fixed images</h2>\n' +
          '\n' +
          'Some images will have to be a fixed size due to the nature of the container they find themselves in. Other images, such as a full-width hero image, will have to be responsive, or fill up the space of their parent container. \n',
      },
    },
  },
  argTypes: {
    output_image_tag: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description:
        'Defines whether or not the component will be output as an &lt;img&gt; tag instead of &lt;picture&gt;.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
        name: 'Output image tag',
      },
    },
    image_srcset: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'The image srcset for the img or picture element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    image_sizes: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'The image sizes to use.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    image_src: {
      type: { name: 'string', required: false },
      description: 'The url for the image.',
      table: {
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: '' },
        },
      },
      control: 'text',
    },
    image_loading: {
      type: { name: 'string', required: false },
      defaultValue: 'medium',
      description: 'The loading attribute for the element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lazy' },
      },
      control: {
        type: 'select',
        name: 'Image loading',
        options: ['lazy', 'eager'],
      },
    },
    image_alt: {
      description: 'The alt text for the image.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    responsive_image_base_class: {
      type: { name: 'string', required: false },
      description: 'The base class for the element.',
      table: {
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'image' },
        },
      },
      control: 'text',
    },
  },
};

const imagesData = imageData
  .slice(1)
  .map((data) => Image(data))
  .join('<div style="margin-bottom: 1rem; clear: both;"></div>');

export const defaultImage = (args) => Image(args);
defaultImage.args = { ...imageData[0] };

export const images = () => imagesData;
