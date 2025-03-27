/**
 * UMD Libraries Accordion functionality
 * Enhanced for accessibility and responsive design
 */

(function () {
  "use strict";

  // initialize the accordions
  document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accrodion-child--container");
    accordions.forEach(initialzeAccordion);
  });

  function initialzeAccordion(accordion) {
    const button = accordion.querySelector(".accordion-child--headline");
    const content = accordion.querySelector(".accordion-child--body-wrapper");

    const buttonAttributes = button.getAttribute("aria-expanded");
    const contentAttributes = content.getAttribute("aria-hidden");

    if (buttonAttributes === null || contentAttributes === null) {
      // Set initial aria attributes
      button.setAttribute("aria-expanded", "false");
      content.setAttribute("aria-hidden", "true");

      if (button.getAttribute("aria-expanded") === "false") {
        content.style.display = "block";
        content.style.height = "0px";
        content.style.overflow = "hidden";
      }
    }

    // Add click event listener to toggle accordion
    button.addEventListener("click", function () {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", !isExpanded);
      content.setAttribute("aria-hidden", isExpanded);

      if (isExpanded) {
        content.style.height = content.scrollHeight + "px";
        content.offsetHeight;
        content.style.height = "0";
      } else {
        content.style.display = "block";
        content.style.height = "0px";
        content.offsetHeight;
        content.style.height = content.scrollHeight + "px";

        content.addEventListener(
          "transitionend",
          function setAutoHeight() {
            content.style.height = "auto";
            content.removeEventListener("transitionend", setAutoHeight);
          },
          { once: true }
        );
      }
    });
  }
})();
