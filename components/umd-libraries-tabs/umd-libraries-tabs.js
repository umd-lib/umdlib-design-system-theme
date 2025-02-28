/**
 * UMD Libraries Tabs functionality
 * Enhanced for accessibility
 */
(function () {
  "use strict";

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
      selectedTrigger.setAttribute("aria-selected", "true");
      selectedTrigger.classList.add("active");
      selectedTrigger.setAttribute("tabindex", "0");
    }

    if (selectedPanel) {
      selectedPanel.removeAttribute("hidden");
      selectedPanel.classList.add("active");

      // Check if we should auto-focus the first interactive element
      if (selectedPanel.dataset.autoFocus === "true") {
        setTimeout(() => {
          // Try to find the first focusable element
          const focusableElements = selectedPanel.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );

          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          } else {
            // If no focusable elements, focus the panel itself
            selectedPanel.focus();
          }
        }, 100);
      }
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
