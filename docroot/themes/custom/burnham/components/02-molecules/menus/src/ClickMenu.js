import BaseElement from '../../../src/MinimaBaseElement';

/**
 * Class representing a click menu.
 */
class ClickMenu extends BaseElement {
  /**
   * Creates an instance of a click menu.
   * @param {HTMLElement} element
   * @memberOf ClickMenu
   */
  constructor(element, openState = false) {
    super(element);
    this.menuButton = this.element.querySelector('button');
    this.menuList = this.element.querySelector('ul');
    this.openState = openState;
    this.focusIndex = -1;
  }

  /**
   * Initializes the click menu.
   * @memberOf ClickMenu
   */
  init() {
    this.menuButton.addEventListener('click', this.toggleMenu);
    this.element.addEventListener('keydown', this.buttonArrowListener);
  }

  /**
   * Toggles the menu open and closed for this instance.
   * @param event
   */
  toggleMenu = (event) => {
    if (this.openState) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
    event.stopPropagation();
  };

  /**
   * Opens the menu and sets event handlers.
   */
  openMenu = () => {
    this.openState = true;
    this.focusIndex = -1;
    this.menuButton.classList.add('show');
    this.menuList.classList.add('show');
    window.addEventListener('click', this.clickEventListener);
    this.element.addEventListener('keydown', this.keyboardEventListener);
    this.element.removeEventListener('keydown', this.buttonArrowListener);
    this.menuButton.setAttribute('aria-expanded', 'true');
  };

  /**
   * Closes the menu and sets event handlers.
   */
  closeMenu = () => {
    this.openState = false;
    this.menuButton.classList.remove('show');
    this.menuList.classList.remove('show');
    window.removeEventListener('click', this.clickEventListener);
    this.element.removeEventListener('keydown', this.keyboardEventListener);
    this.element.addEventListener('keydown', this.buttonArrowListener);
    this.menuButton.setAttribute('aria-expanded', 'false');
  };

  /**
   * Handles keydown event when button is focused.
   * @param event
   */
  buttonArrowListener = (event) => {
    if (
      this.menuButton === document.activeElement &&
      event.key === 'ArrowDown'
    ) {
      this.openMenu();
    }
  };

  /**
   * Handles keyboard events when the menu is open.
   * @param event
   */
  keyboardEventListener = (event) => {
    if (
      event.key === ' ' &&
      document.activeElement.tagName.toLowerCase() === 'a'
    ) {
      // Follow the link if the space bar is pressed.
      document.activeElement.click();
    } else if (event.key === 'Escape') {
      // Exit the list if the escape key is pressed.
      this.exitMenuList(event);
    } else if (
      // Move to the first item in the list when the focus is the button and
      // the key pressed down arrow key is pressed.
      event.key === 'ArrowDown' &&
      document.activeElement === this.menuButton
    ) {
      this.setMenuItemFocus(0, event);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      // Handle up/down arrow navigation within the list
      if (event.key === 'ArrowUp') {
        this.setMenuItemFocus(this.focusIndex - 1, event);
      } else {
        this.setMenuItemFocus(this.focusIndex + 1, event);
      }
    }
  };

  /**
   * Sets the focus on the menu item based on the item's index in the list of items.
   * @param index
   * @param event
   */
  setMenuItemFocus = (index, event) => {
    const items = this.menuList.querySelectorAll('a');
    if (index === items.length || index === -1) {
      this.exitMenuList(event);
    } else if (items[index] !== undefined) {
      items[index].focus();
      this.focusIndex = index;
    }
    event.preventDefault();
  };

  /**
   * Exits a menu list prevents bubbling and defaults.
   * @param event
   */
  exitMenuList = (event) => {
    this.closeMenu();
    this.menuButton.focus();
    this.focusIndex = -1;
    event.stopPropagation();
  };

  /**
   * Handles click events when the menu is open.
   * @param event
   */
  clickEventListener = () => {
    this.closeMenu();
  };
}

export default ClickMenu;
