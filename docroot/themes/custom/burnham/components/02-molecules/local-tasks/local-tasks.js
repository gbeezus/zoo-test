Drupal.behaviors.localTasks = {
  attach(context) {
    const el = context.querySelectorAll('.local-tasks');
    const localtaskNavigationLinks =
      context.querySelectorAll('.local-tasks__link');
    const localtaskContentContainers = context.querySelectorAll(
      '.local-tasks__local-task',
    );
    let activeIndex = 0;

    /**
     * goTolocal-task
     * @description Goes to a specific local task tab based on index. Returns nothing.
     * @param {Number} index The index of the local-task to go to
     */
    function goToLocalTask(index) {
      if (
        index !== activeIndex &&
        index >= 0 &&
        index <= localtaskNavigationLinks.length
      ) {
        localtaskNavigationLinks[activeIndex].classList.remove('is-active');
        localtaskNavigationLinks[index].classList.add('is-active');
        localtaskContentContainers[activeIndex].classList.remove('is-active');
        localtaskContentContainers[index].classList.add('is-active');
        activeIndex = index;
      }
    }

    /**
     * handleClick
     * @description Handles click event listeners on each of the links in the
     *   local task navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */
    function handleClick(link, index) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        goToLocalTask(index);
      });
    }

    /**
     * init
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */
    for (let e = 0; e < el.length; e += 1) {
      el[e].classList.remove('no-js');
    }

    for (let i = 0; i < localtaskNavigationLinks.length; i += 1) {
      const link = localtaskNavigationLinks[i];
      handleClick(link, i);
    }
  },
};
