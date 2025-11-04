/**
 * UMD Libraries Alert functionality
 * Enhanced for accessibility and responsive design
 */

(function () {
  "use strict";

  const CookieManager = {
    // Set cookie with custom expiration hours
    set: function (name, value, hours = 24, options = {}) {
      const expires = new Date();
      expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);

      let cookieString = `${name}=${encodeURIComponent(
        value
      )}; expires=${expires.toUTCString()}; path=${options.path || "/"}`;

      if (options.domain) cookieString += `; domain=${options.domain}`;
      if (options.secure) cookieString += "; secure";
      if (options.sameSite) cookieString += `; SameSite=${options.sameSite}`;

      document.cookie = cookieString;
    },

    // Get cookie value
    get: function (name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(";").shift());
      }
      return null;
    },

    // Check if cookie exists
    exists: function (name) {
      return this.get(name) !== null;
    },

    // Delete cookie
    delete: function (name, path = "/") {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
    },
  };

  class SiteAlert {
    constructor(alertId, alertElement) {
      this.alertId = alertId;
      this.alertElement = alertElement;
      this.cookieName = `alert_dismissed_${alertId}`;

      this.init();
    }

    init() {
      // Check if alert was already dismissed
      if (CookieManager.exists(this.cookieName)) {
        this.hideAlert();
        return;
      }

      // Add close button event listener
      const closeButton = this.alertElement.querySelector(
        ".alert--button-close"
      );
      if (closeButton) {
        closeButton.addEventListener("click", () => this.dismissAlert());
      }

      // Show the alert
      this.showAlert();
    }

    dismissAlert() {
      // Set cookie for 24 hours
      CookieManager.set(this.cookieName, "true", 24, {
        sameSite: "Strict",
        secure: window.location.protocol === "https:",
      });

      this.hideAlert();
    }

    showAlert() {
      this.alertElement.style.display = "block";
      this.alertElement.setAttribute("aria-hidden", "false");
    }

    hideAlert() {
      this.alertElement.style.display = "none";
      this.alertElement.setAttribute("aria-hidden", "true");
    }
  }

  // initialize the alerts
  document.addEventListener("DOMContentLoaded", function () {
    const alerts = document.querySelectorAll(".alert");
    if (alerts) {
      alerts.forEach(function (alert, idx) {
        initializeAlert(alert);
        new SiteAlert(`maintenance_notice_${idx}`, alert);
      });
    }
  });

  function initializeAlert(alert) {
    const button = alert.querySelector(".alert--button-close");
    const content = alert.querySelector(".alert--container");
    if (button && content) {
      // Add click event listener to toggle accordion
      button.addEventListener("click", function () {
        content.style.display = "none";
      });
    }
  }
})();
