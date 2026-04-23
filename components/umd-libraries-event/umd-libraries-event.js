let eventDate = document.getElementById("event_date");

let targetMonth = document.getElementById("event_month");
let targetDay = document.getElementById("event_day");

if (eventDate) {
  let eventDateValue = eventDate.innerText.trim();

  let Month = eventDateValue.split(" ")[1];
  let Day = eventDateValue.split(" ")[2];

  Month = Month.substring(0, 3);

  if (targetMonth && targetDay) {
    targetMonth.innerText = Month;
    targetDay.innerText = Day;
  } else {
    console.error("Target elements not found.");
  }
}

// external link
const currenteventlocation = window.location;
const eventLinks = document.querySelectorAll(".event--link");

eventLinks.forEach((link) => {
  const eventLinks = link.querySelector("span");
  if (eventLinks && link.host !== currenteventlocation.host) {
    eventLinks.classList.add("i-external-arrow");
  } else {
    eventLinks.style.display = "none";
  }
});
