function parseEventDate(value) {
  if (!value) {
    return null;
  }

  const trimmedValue = value.trim();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();

  const isoMatch = trimmedValue.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return {
      year: Number(year),
      month: Number(month),
      day: Number(day),
      hasMonth: true,
      hasDay: true,
    };
  }

  const monthDayYearMatch = trimmedValue.match(/^(?:(?:[A-Za-z]+),\s*)?([A-Za-z]+)\s+(\d{1,2})(?:,\s*(\d{4}))?$/);
  if (monthDayYearMatch) {
    const monthName = monthDayYearMatch[1];
    const monthIndex = monthNames.findIndex((name) => name.toLowerCase() === monthName.toLowerCase());

    if (monthIndex >= 0) {
      return {
        year: monthDayYearMatch[3] ? Number(monthDayYearMatch[3]) : currentYear,
        month: monthIndex + 1,
        day: Number(monthDayYearMatch[2]),
        hasMonth: true,
        hasDay: true,
      };
    }
  }

  const dayMonthYearMatch = trimmedValue.match(/^(\d{1,2})\s+([A-Za-z]+)(?:\s+(\d{4}))?$/);
  if (dayMonthYearMatch) {
    const monthName = dayMonthYearMatch[2];
    const monthIndex = monthNames.findIndex((name) => name.toLowerCase() === monthName.toLowerCase());

    if (monthIndex >= 0) {
      return {
        year: dayMonthYearMatch[3] ? Number(dayMonthYearMatch[3]) : currentYear,
        month: monthIndex + 1,
        day: Number(dayMonthYearMatch[1]),
        hasMonth: true,
        hasDay: true,
      };
    }
  }

  const monthYearMatch = trimmedValue.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYearMatch) {
    const monthName = monthYearMatch[1];
    const monthIndex = monthNames.findIndex((name) => name.toLowerCase() === monthName.toLowerCase());

    if (monthIndex >= 0) {
      return {
        year: Number(monthYearMatch[2]),
        month: monthIndex + 1,
        day: null,
        hasMonth: true,
        hasDay: false,
      };
    }
  }

  const yearOnlyMatch = trimmedValue.match(/^(\d{4})$/);
  if (yearOnlyMatch) {
    return {
      year: Number(yearOnlyMatch[1]),
      month: null,
      day: null,
      hasMonth: false,
      hasDay: false,
    };
  }

  const slashMatch = trimmedValue.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
  if (slashMatch) {
    const [, first, second, year] = slashMatch;
    const normalizedYear = year.length === 2 ? `20${year}` : year;
    return {
      year: Number(normalizedYear),
      month: Number(first),
      day: Number(second),
      hasMonth: true,
      hasDay: true,
    };
  }

  return null;
}

let eventDate = document.getElementById("event_date");

let targetMonth = document.getElementById("event_month");
let targetDay = document.getElementById("event_day");

if (eventDate) {
  let eventDateValue = eventDate.innerText.trim();
  let parsedDate = parseEventDate(eventDateValue);

  if (parsedDate) {
    if (targetMonth && parsedDate.hasMonth) {
      let Month = new Date(parsedDate.year, parsedDate.month - 1, 1).toLocaleString("en-US", { month: "short" });
      targetMonth.innerText = Month;
    }

    if (targetDay && parsedDate.hasDay) {
      targetDay.innerText = parsedDate.day.toString();
    }
  } else {
    console.error("Unable to parse event date:", eventDateValue);
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
