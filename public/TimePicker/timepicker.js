let date = new Date();
let togle_calendar = false;
function $(selector) {
  return document.querySelectorAll(selector);
}

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let calendarInitHTML;

function setDate() {
  if (date < new Date()) {
    date = new Date();
  }
  let dumyDate = new Date(date);
  dumyDate.setDate(1);

  $(".giz-calendar-year-title")[0].innerHTML = date.getFullYear();
  $(".giz-calendar-title-slide")[0].innerHTML = `${
    month[date.getMonth()]
  } ${date.getFullYear()}`;
  $(".giz-calendar-title")[0].innerHTML = `${
    day[dumyDate.getDay()]
  }, ${date.getDate()} ${month[date.getMonth()]}`;

  let calendarHTML = "";
  for (let i = 0; i < dumyDate.getDay() - 1; i++) calendarHTML += "<div></div>";
  calendarHTML += calendarInitHTML;
  $(".giz-calendar-day")[0].innerHTML = calendarHTML;
  $(".giz-calendar-day button")[date.getDate() - 1].classList.add("active");

  $(".giz-calendar-day button").forEach((one, index) =>
    one.addEventListener("click", function () {
      date.setDate(index + 1);
      if (date < new Date().setDate(new Date().getDate() - 1)) {
        date = new Date();
        return;
      }

      $(".giz-calendar-year-title")[0].innerHTML = date.getFullYear();
      $(".giz-calendar-title-slide")[0].innerHTML = `${
        month[date.getMonth()]
      } ${date.getFullYear()}`;
      $(".giz-calendar-title")[0].innerHTML = `${
        day[date.getDay()]
      }, ${date.getDate()} ${month[date.getMonth()]}`;
      one.classList.add("active");

      $(".giz-calendar-day button").forEach((ione) => {
        if (one != ione) ione.classList.remove("active");
      });
    })
  );
}

document.addEventListener("DOMContentLoaded", function () {
  calendarInitHTML = $(".giz-calendar-day")[0].innerHTML;
  setDate();

  $(".giz-calendar-month button").forEach((elem, index) => {
    elem.classList.remove("active");
    if (index == date.getMonth()) {
      elem.classList.add("active");
    }
  });
  // togle active class
  $(".giz-calendar-month button").forEach((one, index) =>
    one.addEventListener("click", function () {
      date.setMonth(index);
      if (date < new Date()) date = new Date();
      setDate();
      $(".giz-calendar-title-slide")[0].click();
    })
  );
  // hide show month or days
  $(".giz-calendar-title-slide")[0].addEventListener("click", function () {
    if (togle_calendar) {
      $(".calendar-show")[0].classList.add("hide");
      $(".calendar-hide")[0].classList.remove("hide");
      togle_calendar = false;
    } else {
      $(".calendar-hide")[0].classList.add("hide");
      $(".calendar-show")[0].classList.remove("hide");
      togle_calendar = true;
    }
  });
  // set month button
  $(".giz-button-rounded")[0].addEventListener("click", function () {
    date.setMonth(date.getMonth() - 1);
    if (date < new Date()) date = new Date();
    setDate();
  });
  $(".giz-button-rounded")[1].addEventListener("click", function () {
    date.setMonth(date.getMonth() + 1);
    setDate();
  });
});

// ------------------------------------------------------
let AMPM = true;
function setTimer() {
  setDate();
  let hours = date.getHours();
  let minute = date.getMinutes();

  let getHours = hours < 10 ? "0" + hours : hours;
  let getMinute = minute < 10 ? "0" + minute : minute;
  if (AMPM) {
    $(".time-picker-label")[0].innerHTML = "AM";
  } else {
    $(".time-picker-label")[0].innerHTML = "PM";
  }

  if (hours > 12) {
    getHours = hours - 12 < 10 ? "0" + hours - 12 : hours - 12;
    AMPM = false;
  } else {
    AMPM = true;
  }
  $(".time-picker-minute")[0].innerHTML = getMinute;
  $(".time-picker-hours")[0].innerHTML = getHours;
  $("#hours")[0].value = getHours;
  $("#minutes")[0].value = getMinute;
}

document.addEventListener("DOMContentLoaded", function () {
  setTimer();
  // ok시
  $(".timer-action button")[0].addEventListener("click", function () {
    window.parent.postMessage({ message: date }, "*");
  });
  // 취소 시
  $(".timer-action button")[1].addEventListener("click", function () {
    date = new Date();
    setTimer();
  });
  $(".shade button")[0].addEventListener("click", function () {
    let ap = AMPM ? 0 : 12;
    date.setHours(parseInt($("#hours")[0].value) + 1 + ap);
    setTimer();
  });
  $(".shade button")[1].addEventListener("click", function () {
    let ap = AMPM ? 0 : 12;
    date.setHours(parseInt($("#hours")[0].value) - 1 + ap);
    if (date < new Date()) {
      date = new Date();
    }
    setTimer();
  });
  $(".shade button")[2].addEventListener("click", function () {
    date.setMinutes(parseInt($("#minutes")[0].value) + 1);
    setTimer();
  });
  $(".shade button")[3].addEventListener("click", function () {
    date.setMinutes(parseInt($("#minutes")[0].value) - 1);
    if (date < new Date()) {
      date = new Date();
    }
    setTimer();
  });
});
