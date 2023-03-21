/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Grids',
  parameters: {
    // Set the viewports in Chromatic at a component level.
    chromatic: { viewports: [400, 1200] },
  },
};

export const BootstrapGrid = () =>
  `<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>`;
