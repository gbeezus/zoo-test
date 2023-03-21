/** Class representing a base element */
class BaseElement {
  /**
   * Creates an instance of BaseElement.
   * @param {HTMLElement} element
   * @memberof BaseElement
   */
  constructor(element) {
    this.element = element;
    this.id = '';
  }
}

export default BaseElement;
