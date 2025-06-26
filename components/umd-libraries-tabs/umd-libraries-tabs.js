/**
 * UMD Libraries Tabs functionality
 * Enhanced for accessibility and responsive design
 */
(function () {
  "use strict";

  // Track resize handlers for all containers
  const resizeHandlers = new Map();
  let lastWindowWidth = window.innerWidth;

  // Initialize all tab containers on the page
  document.addEventListener("DOMContentLoaded", function () {
    const tabContainers = document.querySelectorAll("[data-tabs-container]");
    tabContainers.forEach(initializeTabs);

    // Check if URL has hash that matches a tab
    const hash = window.location.hash.substring(1);
    if (hash) {
      const tabWithHash = document.querySelector(
        `[role="tab"][aria-controls="tabpanel-${hash}"]`
      );
      if (tabWithHash) {
        const container = tabWithHash.closest("[data-tabs-container]");
        selectTab(container, hash);
      }
    }
  });

  // Window resize handler - calls individual container handlers
  window.addEventListener("resize", () => {
    // Only recalculate if width has actually changed
    if (window.innerWidth !== lastWindowWidth) {
      lastWindowWidth = window.innerWidth;
      // Call each container's resize handler
      resizeHandlers.forEach((handler) => handler());
    }
  });

  /**
   * Initialize a tab container
   * @param {HTMLElement} container - The tab container element
   */
  function initializeTabs(container) {
    // Container-specific variables (moved from global scope)
    const triggerList = container.querySelector(".tabs--triggers");
    const triggers = container.querySelectorAll('[role="tab"]');
    const decoBackground = container.querySelector("#tabs--trigger-deco");
    const decoLine = container.querySelector("#deco-underline");
    const defaultTab = container.dataset.defaultTab;
    const isVertical = container.dataset.orientation === "vertical";

    let triggerWidth = 0;
    let triggerHeight = 0;
    let singleTriggerHeight = 0;
    let triggerLayout = true; // true = horizontal, false = vertical

    // Container-specific helper functions
    function calculateTriggerSize() {
      // Reset values first
      triggerWidth = 0;
      triggerHeight = 0;

      triggers.forEach((trigger) => {
        const triggerSize = trigger.getBoundingClientRect();
        triggerWidth += triggerSize.width;
        triggerHeight += triggerSize.height;
      });

      if (triggers.length > 0) {
        const trigger = triggers[0];
        const triggerSize = trigger.getBoundingClientRect();
        singleTriggerHeight = triggerSize.height;
      }
    }

    function checkTriggersLayout() {
      const containerWidth = container.getBoundingClientRect().width; // Container width
      triggerLayout = containerWidth > triggerWidth;
    }

    function updateBaseStyle() {
      if (triggerLayout) {
        // Horizontal layout
        triggerList.classList.remove("vertical");
        triggerList.setAttribute("aria-orientation", "horizontal");
        // decoBackground style
        decoBackground.style.height = "2px";
        decoBackground.style.width = `${triggerWidth}px`;
        decoBackground.style.top = `${singleTriggerHeight}px`;
        decoBackground.style.left = "0px";
      } else {
        // Vertical layout
        triggerList.classList.add("vertical");
        triggerList.setAttribute("aria-orientation", "vertical");
        // decoBackground style
        decoBackground.style.width = "2px";
        decoBackground.style.height = `${triggerHeight}px`;
        decoBackground.style.top = "0px";
        decoBackground.style.left = "0px";
      }
    }

    function updateDecoPosition() {
      const parentElement = triggerList;
      const activeTab = triggerList.querySelector(
        '[role="tab"][aria-selected="true"]'
      );

      // get the bounding rect of the active tab
      if (activeTab) {
        const rect = activeTab.getBoundingClientRect();

        if (triggerLayout) {
          // Horizontal layout

          // Adjust the deco line position based on this location to the parent element
          const parentRect = parentElement.getBoundingClientRect();
          const parentLeft = parentRect.left;
          const positionLeft = rect.left - parentLeft;

          decoLine.style.transform = `translateX(${positionLeft}px)`;
          decoLine.style.width = `${rect.width}px`;
          decoLine.style.height = "2px";
        } else {
          // Vertical layout
          // Find the index of the selected trigger among siblings
          const allTriggers = Array.from(
            container.querySelectorAll('[role="tab"]')
          );
          const activeIndex = allTriggers.indexOf(activeTab);

          if (activeIndex !== -1) {
            // Use the index to calculate the position
            let decoLineHeight = activeIndex * rect.height;

            decoLine.style.width = "2px";
            decoLine.style.height = `${rect.height}px`;
            decoLine.style.transform = `translateY(${decoLineHeight}px)`;
          }
        }
      }
    }

    // Create a container-specific resize handler
    const containerResizeHandler = () => {
      checkTriggersLayout();
      updateBaseStyle();
      updateDecoPosition();
    };

    // Store the resize handler
    resizeHandlers.set(container, containerResizeHandler);

    // Set up event handlers for all triggers
    triggers.forEach((trigger) => {
      // Click handler
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const tabId = trigger.id.replace("tab-", "");
        selectTab(container, tabId);
        updateURLHash(tabId);
      });

      // Keyboard handler
      trigger.addEventListener("keydown", (event) => {
        handleKeyDown(event, container, isVertical);
      });
    });

    // Initialize with default tab or first tab
    let initialTabValue;
    if (defaultTab && container.querySelector(`#tab-${defaultTab}`)) {
      initialTabValue = defaultTab;
    } else if (triggers.length > 0) {
      initialTabValue = triggers[0].id.replace("tab-", "");
    }

    if (initialTabValue) {
      selectTab(container, initialTabValue);
    }

    // Initial layout setup
    calculateTriggerSize();
    checkTriggersLayout();
    updateBaseStyle();
    updateDecoPosition();
  }

  /**
   * Handle keyboard navigation for tabs
   * @param {KeyboardEvent} event - The keyboard event
   * @param {HTMLElement} container - The tab container element
   * @param {boolean} isVertical - Whether the tabs are vertically oriented
   */
  function handleKeyDown(event, container, isVertical) {
    const triggers = Array.from(container.querySelectorAll('[role="tab"]'));
    const currentTrigger = event.target;
    const currentIndex = triggers.indexOf(currentTrigger);

    if (currentIndex === -1) return;

    let nextIndex;

    // Define navigation keys based on orientation
    const nextKey = isVertical ? "ArrowDown" : "ArrowRight";
    const prevKey = isVertical ? "ArrowUp" : "ArrowLeft";

    switch (event.key) {
      case nextKey:
        event.preventDefault();
        nextIndex = (currentIndex + 1) % triggers.length;
        focusAndActivateTab(container, triggers[nextIndex]);
        break;

      case prevKey:
        event.preventDefault();
        nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
        focusAndActivateTab(container, triggers[nextIndex]);
        break;

      case "Home":
        event.preventDefault();
        focusAndActivateTab(container, triggers[0]);
        break;

      case "End":
        event.preventDefault();
        focusAndActivateTab(container, triggers[triggers.length - 1]);
        break;

      case " ":
      case "Enter":
        event.preventDefault();
        const tabId = currentTrigger.id.replace("tab-", "");
        selectTab(container, tabId);
        updateURLHash(tabId);
        break;

      case "PageUp":
        if (event.ctrlKey) {
          event.preventDefault();
          nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
          focusAndActivateTab(container, triggers[nextIndex]);
        }
        break;

      case "PageDown":
        if (event.ctrlKey) {
          event.preventDefault();
          nextIndex = (currentIndex + 1) % triggers.length;
          focusAndActivateTab(container, triggers[nextIndex]);
        }
        break;
    }
  }

  /**
   * Focus and activate a specific tab
   * @param {HTMLElement} container - The tab container
   * @param {HTMLElement} tabTrigger - The tab trigger to focus and activate
   */
  function focusAndActivateTab(container, tabTrigger) {
    // Update tabindex for all tabs (roving tabindex pattern)
    const allTriggers = container.querySelectorAll('[role="tab"]');
    allTriggers.forEach((t) => t.setAttribute("tabindex", "-1"));

    // Set focused tab to be tabbable
    tabTrigger.setAttribute("tabindex", "0");

    // Focus the tab
    tabTrigger.focus();

    // Activate the tab
    const tabId = tabTrigger.id.replace("tab-", "");
    selectTab(container, tabId);
  }

  /**
   * Select a specific tab
   * @param {HTMLElement} container - The tab container element
   * @param {string} tabValue - The value of the tab to select
   */
  function selectTab(container, tabValue) {
    const triggers = container.querySelectorAll('[role="tab"]');
    const panels = container.querySelectorAll('[role="tabpanel"]');

    // Deactivate all tabs
    triggers.forEach((t) => {
      t.setAttribute("aria-selected", "false");
      t.classList.remove("active");
      t.setAttribute("tabindex", "-1");
    });

    panels.forEach((p) => {
      p.classList.add("hidden");
      p.classList.remove("active");
      p.setAttribute("hidden", "true");
    });

    // Activate the selected tab
    const selectedTrigger = container.querySelector(`#tab-${tabValue}`);
    const selectedPanel = container.querySelector(`#tabpanel-${tabValue}`);

    if (selectedTrigger) {
      selectedTrigger.setAttribute("aria-selected", "true");
      selectedTrigger.classList.add("active");
      selectedTrigger.setAttribute("tabindex", "0");

      // Update decoration position after setting active state
      setTimeout(() => {
        if (resizeHandlers.has(container)) {
          resizeHandlers.get(container)();
        }
      }, 0);
    }

    if (selectedPanel) {
      selectedPanel.classList.remove("hidden");
      selectedPanel.classList.add("active");
      selectedPanel.removeAttribute("hidden");
    }

    // Trigger the resize handler to ensure decoration is properly positioned
    if (resizeHandlers.has(container)) {
      resizeHandlers.get(container)();
    }
  }

  /**
   * Update URL hash to match selected tab for bookmarking/sharing
   * @param {string} tabValue - Tab value to set in URL hash
   */
  function updateURLHash(tabValue) {
    if (history.pushState) {
      history.pushState(null, null, `#${tabValue}`);
    } else {
      location.hash = tabValue;
    }
  }
})();
