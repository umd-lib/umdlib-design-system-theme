/**
 * UMD Libraries Tabs functionality
 * Enhanced for accessibility and responsive design
 */
(function () {
  ("use strict"); // Fixed the syntax - removed extra parentheses

  // Global variables for the module
  let triggerLayout = true; // true = horizontal, false = vertical
  let resizeDebounceTimer;
  const RESIZE_DEBOUNCE_DELAY = 10; // ms

  // Initialize all tab containers on the page
  document.addEventListener("DOMContentLoaded", function () {
    const tabContainers = document.querySelectorAll("[data-tabs-container]");
    tabContainers.forEach(initializeTabs);

    // Check if URL has hash that matches a tab
    const hash = window.location.hash.substring(1);
    if (hash) {
      const tabWithHash = document.querySelector(
        `.tab--trigger[data-value="${hash}"]`
      );
      if (tabWithHash) {
        const container = tabWithHash.closest("[data-tabs-container]");
        selectTab(container, hash);
      }
    }
  });

  /**
   * Initialize a tab container
   * @param {HTMLElement} container - The tab container element
   */
  function initializeTabs(container) {
    const triggers = container.querySelectorAll(".tab--trigger");
    const panels = container.querySelectorAll(".tab--panel");
    const defaultTab = container.dataset.defaultTab;
    const isVertical = container.dataset.orientation === "vertical";
    const triggerList = container.querySelector(".tabs--triggers");
    const decoBackground = document.getElementById("tabs--trigger-deco");
    const decoLine = document.getElementById("deco-underline");

    // Set up event handlers for all triggers
    triggers.forEach((trigger) => {
      // Click handler
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const value = trigger.dataset.value;
        selectTab(container, value);
        updateURLHash(value);
      });

      // Keyboard handler
      trigger.addEventListener("keydown", (event) => {
        handleKeyDown(event, container, isVertical);
      });
    });

    // Initial layout setup
    updateTriggerLayout(triggers, triggerList, decoBackground, decoLine);

    // Window resize handler with debounce for better performance
    window.addEventListener("resize", () => {
      clearTimeout(resizeDebounceTimer);
      resizeDebounceTimer = setTimeout(() => {
        updateTriggerLayout(triggers, triggerList, decoBackground, decoLine);
      }, RESIZE_DEBOUNCE_DELAY);
    });

    // Initialize with default tab or first tab
    let initialTabValue;
    if (
      defaultTab &&
      container.querySelector(`.tab--trigger[data-value="${defaultTab}"]`)
    ) {
      initialTabValue = defaultTab;
    } else if (triggers.length > 0) {
      initialTabValue = triggers[0].dataset.value;
    }

    if (initialTabValue) {
      selectTab(container, initialTabValue);
    }
  }

  /**
   * Update trigger layout based on container width
   * @param {NodeList} triggers - Collection of tab triggers
   * @param {HTMLElement} triggerList - Container for triggers
   * @param {HTMLElement} decoBackground - Background decoration element
   * @param {HTMLElement} decoLine - Active tab indicator line
   */
  function updateTriggerLayout(
    triggers,
    triggerList,
    decoBackground,
    decoLine
  ) {
    // Calculate total width and height of triggers
    let triggerWidth = 0;
    let triggerHeight = 0;

    triggers.forEach((trigger) => {
      const rect = trigger.getBoundingClientRect();
      triggerWidth += rect.width;
      triggerHeight += rect.height;
    });

    const clientWidth = document.documentElement.clientWidth;

    // Set layout based on available width
    if (clientWidth > triggerWidth) {
      // Horizontal layout
      triggerList.style.flexDirection = "row";
      triggerLayout = true;

      decoBackground.style.height = "2px";
      decoBackground.style.width = `${triggerWidth}px`;
      decoBackground.style.left = "0px";
      decoLine.style.height = "2px";
    } else {
      // Vertical layout
      triggerList.style.flexDirection = "column";
      triggerLayout = false;

      // Simply get the index directly
      decoBackground.style.width = "2px";
      decoBackground.style.height = `${triggerHeight}px`;
      decoBackground.style.top = "0px";
      decoLine.style.width = "2px";
    }

    // Re-position the indicator line for currently active tab
    const activeTab = triggerList.querySelector(
      '.tab--trigger[aria-selected="true"]'
    );
    if (activeTab) {
      const rect = activeTab.getBoundingClientRect();
      updateDecoPosition(decoLine, rect);
    }
  }

  /**
   * Update decoration line position based on active tab
   * @param {HTMLElement} decoLine - Active tab indicator line
   * @param {DOMRect} rect - Bounding rectangle of active tab
   */
  function updateDecoPosition(decoLine, rect) {
    if (triggerLayout) {
      // Horizontal layout
      decoLine.style.transform = `translateX(${rect.left}px)`;
      decoLine.style.width = `${rect.width}px`;
      decoLine.style.height = "2px";
    } else {
      // Vertical layout - this section is now handled directly in selectTab
      // for better timing with class changes
      // This is just a fallback for resize events
      const activeButton = document.querySelector(
        '.tab--trigger[aria-selected="true"]'
      );
      if (!activeButton) return;

      // Get all siblings to find the index
      const container = activeButton.closest("[data-tabs-container]");
      if (!container) return;

      const allTriggers = Array.from(
        container.querySelectorAll(".tab--trigger")
      );
      const activeIndex = allTriggers.indexOf(activeButton);

      if (activeIndex !== -1) {
        // Calculate position based on index and height
        let deceLineHeight = activeIndex * rect.height;

        decoLine.style.width = "2px";
        decoLine.style.height = `${rect.height}px`;
        decoLine.style.transform = `translateY(${deceLineHeight}px)`;
      }
    }
  }

  /**
   * Handle keyboard navigation for tabs
   * @param {KeyboardEvent} event - The keyboard event
   * @param {HTMLElement} container - The tab container element
   * @param {boolean} isVertical - Whether the tabs are vertically oriented
   */
  function handleKeyDown(event, container, isVertical) {
    const triggers = Array.from(container.querySelectorAll(".tab--trigger"));
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
        selectTab(container, currentTrigger.dataset.value);
        updateURLHash(currentTrigger.dataset.value);
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
    const allTriggers = container.querySelectorAll(".tab--trigger");
    allTriggers.forEach((t) => t.setAttribute("tabindex", "-1"));

    // Set focused tab to be tabbable
    tabTrigger.setAttribute("tabindex", "0");

    // Focus the tab
    tabTrigger.focus();

    // Activate the tab
    selectTab(container, tabTrigger.dataset.value);
  }

  /**
   * Select a specific tab
   * @param {HTMLElement} container - The tab container element
   * @param {string} tabValue - The value of the tab to select
   */
  function selectTab(container, tabValue) {
    const triggers = container.querySelectorAll(".tab--trigger");
    const panels = container.querySelectorAll(".tab--panel");

    const decoBackground = document.getElementById("tabs--trigger-deco");
    const decoLine = document.getElementById("deco-underline");

    // Deactivate all tabs
    triggers.forEach((t) => {
      t.setAttribute("aria-selected", "false");
      t.classList.remove("active");
      t.setAttribute("tabindex", "-1");
    });

    panels.forEach((p) => {
      p.setAttribute("hidden", "true");
      p.classList.remove("active");
    });

    // Activate the selected tab
    const selectedTrigger = container.querySelector(
      `.tab--trigger[data-value="${tabValue}"]`
    );
    const selectedPanel = container.querySelector(
      `.tab--panel[data-value="${tabValue}"]`
    );

    if (selectedTrigger) {
      // First set the attributes and classes
      selectedTrigger.setAttribute("aria-selected", "true");
      selectedTrigger.classList.add("active");
      selectedTrigger.setAttribute("tabindex", "0");

      // Then get bounding rect and update decoration
      const rect = selectedTrigger.getBoundingClientRect();

      // Update decoration position
      if (triggerLayout) {
        decoBackground.style.top = `${rect.height}px`;
      }

      // For vertical layout, calculate position based on index
      if (!triggerLayout) {
        // Find the index of the selected trigger among siblings
        const allTriggers = Array.from(
          container.querySelectorAll(".tab--trigger")
        );
        const activeIndex = allTriggers.indexOf(selectedTrigger);

        if (activeIndex !== -1) {
          // Use the index to calculate the position
          let deceLineHeight = activeIndex * rect.height;

          decoLine.style.width = "2px";
          decoLine.style.height = `${rect.height}px`;
          decoLine.style.transform = `translateY(${deceLineHeight}px)`;
        }
      } else {
        // Horizontal layout (original behavior)
        updateDecoPosition(decoLine, rect);
      }
    }

    if (selectedPanel) {
      selectedPanel.removeAttribute("hidden");
      selectedPanel.classList.add("active");
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
