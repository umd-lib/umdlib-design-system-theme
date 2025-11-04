document.addEventListener("DOMContentLoaded", function () {
  // mobile scroll location
  let savedScrollPosition = 0;

  // Menu Toggle
  document
    .querySelectorAll(".navigation__menu-button")
    .forEach(function (button) {
      if (!button.hasAttribute("data-processed")) {
        button.setAttribute("data-processed", "true");

        // Add click event listener to toggle menu
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
            document.body.style.overflow =
              document.body.style.overflow === "hidden" ? "auto" : "hidden";
          }

          navigationSubmenu.forEach(function (submenu) {
            submenu.classList.toggle("is-open");
            if (submenu.classList.contains("is-active")) {
              submenu.classList.remove("is-active");
            }
          });

          const menuCloseButton = document.getElementById(
            "navigation-in-menu-button"
          );

          if (menuCloseButton) {
            if (button.getAttribute("aria-expanded") === "false") {
              menuCloseButton.setAttribute("aria-expanded", "false");
            } else {
              menuCloseButton.setAttribute("aria-expanded", "true");
            }
          }
        });
      }
    });

  // escape key listener for closing the menu
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const menuButton = document.querySelector(".navigation__menu-button");
      if (menuButton && menuButton.getAttribute("aria-expanded") === "true") {
        menuButton.click();
      }
    }
  });

  // close menu using in menu button
  document.addEventListener("click", function (event) {
    const menuButton = document.getElementById("navigation-in-menu-button");
    if (
      menuButton &&
      event.target === menuButton &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      const mainMenuButton = document.querySelector(".navigation__menu-button");
      if (mainMenuButton) {
        mainMenuButton.click();
      }
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
        const navigationRows = document.querySelector(".navigation__rows");

        if (targetSubmenu) {
          targetSubmenu.classList.toggle("is-active");
          navigationRows.classList.toggle("submenu-open");
          savedScrollPosition = navigationRows.scrollTop;
          navigationRows.scrollTop = 0;
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
        const navigationRows = document.querySelector(".navigation__rows");
        const navigationSubmenu = document.querySelectorAll(
          ".navigation__submenu"
        );
        navigationRows.classList.toggle("submenu-open");
        navigationRows.scrollTop = savedScrollPosition;
        savedScrollPosition = 0;
        navigationSubmenu.forEach(function (submenu) {
          submenu.classList.remove("is-active");
        });
      });
    });
});
