/**
 * UMD Libraries Homepage Hero Search Box
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".hero-search--container");
    containers.forEach(initHeroSearch);
  });

  function initHeroSearch(container) {
    // --- Form submit ---
    const forms = container.querySelectorAll("[data-search-form]");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const input = form.querySelector("[data-search-input]");
        const term = input ? input.value.trim() : "";
        const baseUrl = form.dataset.searchBaseUrl || "";
        const mode = form.dataset.searchUrlMode;

        if (!baseUrl) return;

        let destination;
        if (mode === "append") {
          // Discover: Primo query syntax — query=any,contains,{term}
          destination = baseUrl + "any,contains," + encodeURIComponent(term);
        } else {
          // Search All: append as ?q= parameter
          const separator = baseUrl.includes("?") ? "&" : "?";
          destination = baseUrl + separator + "q=" + encodeURIComponent(term);
        }

        window.location.href = destination;
      });
    });

    // --- Quick actions: update hrefs when Discover input changes ---
    const discoverInput = container.querySelector(
      '[data-search-input="discover"]',
    );
    const quickActionLinks = container.querySelectorAll(
      "[data-quick-action-url]",
    );

    // --- Dropdown show/hide ---
    const dropdown = container.querySelector(".hero-search-box-dropdown");

    if (discoverInput && dropdown) {
      discoverInput.addEventListener("focus", function () {
        showDropdown(dropdown);
      });

      document.addEventListener("mousedown", function (event) {
        if (
          !dropdown.contains(event.target) &&
          event.target !== discoverInput
        ) {
          hideDropdown(dropdown);
        }
      });
    }

    if (discoverInput && quickActionLinks.length) {
      discoverInput.addEventListener("input", function () {
        updateQuickActionLinks(quickActionLinks, discoverInput.value.trim());
      });

      quickActionLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const term = discoverInput.value.trim();
          const baseUrl = link.dataset.quickActionUrl;
          if (!baseUrl) return;
          const separator = baseUrl.includes("?") ? "&" : "?";
          const destination = term
            ? baseUrl +
              separator +
              "query=any,contains," +
              encodeURIComponent(term)
            : baseUrl;
          window.location.href = destination;
        });
      });
    }
  }

  function updateQuickActionLinks(links, term) {
    links.forEach(function (link) {
      const baseUrl = link.dataset.quickActionUrl;
      if (!baseUrl) return;

      if (term) {
        const separator = baseUrl.includes("?") ? "&" : "?";
        link.href =
          baseUrl +
          separator +
          "query=any,contains," +
          encodeURIComponent(term);
      } else {
        link.href = baseUrl;
      }
    });
  }

  function showDropdown(dropdown) {
    dropdown.classList.add("is-visible");
    dropdown.setAttribute("aria-hidden", "false");
  }

  function hideDropdown(dropdown) {
    dropdown.classList.remove("is-visible");
    dropdown.setAttribute("aria-hidden", "true");
  }
})();
