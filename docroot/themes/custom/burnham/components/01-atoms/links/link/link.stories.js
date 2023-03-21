import Link from './link.twig';
import linkData from './link.yml';
import BackToTopLink from './back-to-top-link.twig';
import SkipLink from './skip-link.twig';

import backToTopLinkData from './back-to-top-link.yml';
import prominentLinkData from './prominent-link.yml';
import inlineLinkElements from './inline-links.twig';
import skipLinkData from './skip-link.yml';

import './js/backToTop';

window.drupalSettings = {
  minima: {
    backToTop: {
      pageThreshold: 4,
      targetElementQuery: '#wysiwyg-links',
    },
  },
};

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Links',
  id: 'links',
  component: 'Link',
  decorators: [
    (Story) => {
      const componentDomNode = document
        .createRange()
        .createContextualFragment(Story().outerHTML || Story());
      Drupal.behaviors.minimaBackToTopLink.attach(componentDomNode);
      return componentDomNode;
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A link is a basic link component. \n\n Prominent links are used to call extra attention to a link, for use as read more links, calls to actions in Call-to-action blocks, and other places emphasis may be needed.\n\n The Wysiwyg Links Story demonstrates a standard, in-line text link.',
      },
    },
    chromatic: { viewports: [400, 600, 800] },
  },
  argTypes: {
    is_rtl: {
      type: { name: 'string', required: false },
      defaultValue: false,
      description: 'RTL text direction',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'Is RTL',
        options: {
          false: false,
          true: true,
        },
      },
    },
    link_content: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'The text for the link.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: 'text',
    },
    link_icon: {
      type: { name: 'string', required: false },
      defaultValue: null,
      description: 'An icon to show with the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'Link icon',
        options: {
          none: '',
          'arrow-forward': 'arrow-forward',
          'circle-up': 'arrow-circle-up',
          search: 'search',
        },
      },
    },
    link_icon_use_rtl: {
      type: { name: 'string', required: false },
      defaultValue: false,
      description: 'RTL text direction',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'Is RTL',
        options: {
          false: false,
          true: true,
        },
      },
    },
    link_attributes: {
      type: { name: 'array', required: false },
      defaultValue: [],
      description: 'Attributes of the link.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'Link attributes',
        options: { none: '', newtab: { target: '_blank' } },
      },
    },
    link_modifiers: {
      type: { name: 'array', required: false },
      defaultValue: [],
      description: 'Modifiers to style the link.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'select',
        name: 'Link modifiers',
        options: {
          none: '',
          prominent: ['prominent'],
        },
      },
    },
  },
};

const prominentLinkHTML = `${prominentLinkData
  .map((d) => `<p>${Link(d)}`)
  .join('')}</p>`;

export const basicLink = (args) => Link(args);
basicLink.args = { ...linkData };
export const basicLinkFocusState = () =>
  `<div style="padding: 1em;">${Link({ ...linkData })}</div>`;
basicLinkFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('#root a.link').focus();
};
export const basicLinkHoverState = () => Link({ ...linkData });
basicLinkHoverState.parameters = {
  pseudo: { hover: true },
};
export const basicLinkVisitedState = () => Link({ ...linkData });
basicLinkVisitedState.parameters = {
  pseudo: { visited: true },
};

export const skipLink = () => SkipLink(skipLinkData);
export const skipLinkFocusState = () =>
  `<div style="padding: 1em;">${SkipLink(skipLinkData)}</div>`;
skipLinkFocusState.play = async ({ canvasElement }) => {
  canvasElement.querySelector('#root a.link').focus();
};

export const backToTopLink = () => BackToTopLink(backToTopLinkData);
export const prominentLinks = () => prominentLinkHTML;
export const inlineLinks = () => inlineLinkElements({});
