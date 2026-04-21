const currentheadinglocation = window.location;
const headingLinks = document.querySelectorAll(".heading--link");

headingLinks.forEach((link) => {
  console.log("working", link);
  const headingLinkIcon = link.querySelector("span.icon-span");
  if (headingLinkIcon && link.host !== currentheadinglocation.host) {
    headingLinkIcon.classList.add("i-external-arrow");
    headingLinkIcon.classList.remove("internal");
  } else {
    headingLinkIcon.classList.add("internal");
  }
});
