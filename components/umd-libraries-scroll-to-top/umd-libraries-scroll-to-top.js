const scrollToTopBtn = document.getElementById("scroll-top--container");
let scrollTimeout;

// Show/hide button based on scroll position (over 1.5vh)
function toggleScrollButton() {
  const oneVh = window.innerHeight * 1.5; // 1.5vh for better visibility
  if (window.pageYOffset > oneVh) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
}

// Throttled scroll event listener for performance
function handleScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(toggleScrollButton, 16); // ~60fps
}

// Announce scroll action to screen readers
function announceScrollAction() {
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = "Scrolled to top of page";

  document.body.appendChild(announcement);

  // Remove announcement after screen readers have processed it
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Enhanced scroll to top function
function scrollToTop() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });

  // Move focus to top of page for screen reader users
  setTimeout(
    () => {
      const skipLink = document.querySelector('a[href="#main"], #main, h1');
      if (skipLink) {
        skipLink.focus();
      } else {
        document.body.focus();
      }
      announceScrollAction();
    },
    prefersReducedMotion ? 0 : 600
  );
}

// Event listeners
window.addEventListener("scroll", handleScroll, { passive: true });

// Keyboard accessibility
scrollToTopBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    scrollToTop();
  }
});

scrollToTopBtn.addEventListener("click", scrollToTop);
