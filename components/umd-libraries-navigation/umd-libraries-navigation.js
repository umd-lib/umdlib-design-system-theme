document.addEventListener("DOMContentLoaded", function () {
  // Menu Toggle
  document
    .querySelectorAll(".navigation__menu-button")
    .forEach(function (button) {
      if (!button.hasAttribute("data-processed")) {
        button.setAttribute("data-processed", "true");

        button.addEventListener("click", function () {
          // Update menu button style
          this.classList.toggle("is-active");
          this.setAttribute(
            "aria-expanded",
            this.getAttribute("aria-expanded") === "true" ? "false" : "true"
          );

          // Update menu - open/close
          const navigationRows = document.querySelector(".navigation__rows");
          const navigationSubmenu = document.querySelectorAll(
            ".navigation__submenu"
          );

          if (navigationRows) {
            navigationRows.classList.toggle("is-open");
          }

          navigationSubmenu.forEach(function (submenu) {
            submenu.classList.toggle("is-open");
            if (submenu.classList.contains("is-active")) {
              submenu.classList.remove("is-active");
            }
          });
        });
      }
    });

  // Submenu Toggle
  document
    .querySelectorAll(".navigation__submenu-button")
    .forEach(function (button) {
      if (!button.hasAttribute("data-processed")) {
        button.setAttribute("data-processed", "true");
      }

      const elementID = button.getAttribute("aria-controls");

      button.addEventListener("click", function () {
        this.setAttribute(
          "aria-expanded",
          this.getAttribute("aria-expanded") === "true" ? "false" : "true"
        );

        const targetSubmenu = document.getElementById(elementID);

        if (targetSubmenu) {
          targetSubmenu.classList.toggle("is-active");
        }
      });
    });

  // Back Button
  document
    .querySelectorAll(".navigation__back-button")
    .forEach(function (button) {
      if (!button.hasAttribute("data-processed")) {
        button.setAttribute("data-processed", "true");
      }

      button.addEventListener("click", function () {
        const navigationSubmenu = document.querySelectorAll(
          ".navigation__submenu"
        );

        navigationSubmenu.forEach(function (submenu) {
          submenu.classList.remove("is-active");
        });
      });
    });
});
