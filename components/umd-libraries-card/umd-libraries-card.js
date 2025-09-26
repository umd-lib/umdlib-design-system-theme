const currentcardlocation = window.location;
const cardLinks = document.querySelectorAll(".card--link");

cardLinks.forEach((link) => {
  const cardLinkIcon = link.querySelector("span");
  if (cardLinkIcon && link.host !== currentcardlocation.host) {
    cardLinkIcon.classList.add("i-external-arrow");
  }
});
