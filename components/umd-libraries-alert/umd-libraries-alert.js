/**
 * UMD Libraries Alert functionality
 * Enhanced for accessibility and responsive design
 */

(function () {
  "use strict";

  // initialize the accordions
  document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".alert");
    accordions.forEach(initializeAlert);
  });

  function initializeAlert(alert) {
    const button = alert.querySelector(".alert--button-close");
    const content = alert.querySelector(".alert--container");
    // Add click event listener to toggle accordion
    button.addEventListener("click", function () {
      content.style.display = "none";
    });
  }
})();
