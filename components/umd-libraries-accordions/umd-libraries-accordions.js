/**
 * UMD Libraries Accordion functionality
 * Enhanced for accessibility and responsive design
 */

(function () {
  "use strict";

  //   initialize the accordions
  document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accrodion-child--container");
    accordions.forEach(initialzeAccordion);
  });

  function initialzeAccordion(accordion) {
    const button = accordion.querySelector(".accordion-child--headline");
    const content = accordion.querySelector(".accordion-child--body-wrapper");

    const buttonAttributes = button.getAttribute("aria-expanded");
    const contentAttributes = content.getAttribute("aria-hidden");

    console.log("buttonAttributes", buttonAttributes);
    console.log("contentAttributes", contentAttributes);

    if (buttonAttributes === null || contentAttributes === null) {
      // Set initial aria attributes
      button.setAttribute("aria-expanded", "false");
      content.setAttribute("aria-hidden", "true");
    }

    // Add click event listener to toggle accordion
    button.addEventListener("click", function () {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", !isExpanded);
      content.setAttribute("aria-hidden", isExpanded);
      content.style.display = isExpanded ? "none" : "block";
      content.style.height = isExpanded ? "0px" : "auto";
    });
  }
})();
