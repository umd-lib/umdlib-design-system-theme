const currentlocation = window.location;
const links = document.querySelectorAll(".emphasized-link a");

links.forEach((link) => {
  const linkIcon = link.querySelector("span");
  if (linkIcon && link.host !== currentlocation.host) {
    linkIcon.classList.remove("i-chevron");
    linkIcon.classList.add("i-external-arrow");
  }
});
