import VerticalSpacing from './vertical-spacing.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Foundations/Spacing',
  parameters: {
    chromatic: { viewports: [400, 1200] },
  },
};

export const Vertical = () => VerticalSpacing();
