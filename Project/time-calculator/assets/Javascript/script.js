const startHourInput = document.getElementById("startHourInput");
const startMinuteInput = document.getElementById("startMinuteInput");
const hoursToAddInput = document.getElementById("hourInput");
const minutesToAddInput = document.getElementById("minuteInput");
const resultContainer = document.getElementById("resultContainer");
const resultText = resultContainer.querySelector("h1");

function setTime(startTime) {
  startTime = startTime.padStart(4, "0");
  const startDate = new Date(`2024-02-01T${startTime}`);
  return { startTime, startDate };
}

function calculateHours(startDate, hoursToAdd) {
  startDate.setHours(startDate.getHours() + hoursToAdd);
  const newHours = startDate.getHours() % 24;
  return { startDate, newHours };
}

function calculateMinutes(startDate, minutesToAdd) {
  startDate.setMinutes(startDate.getMinutes() + minutesToAdd);
  const newMinutes = startDate.getMinutes() % 60;
  return { startDate, newMinutes };
}

function calculateHoursMinutes(startDate, hoursToAdd, minutesToAdd) {
  startDate.setHours(startDate.getHours() + hoursToAdd);
  startDate.setMinutes(startDate.getMinutes() + minutesToAdd);
  const newHours = startDate.getHours() % 24; // Ensure hours stay within 0-23
  const newMinutes = startDate.getMinutes() % 60; // Ensure minutes stay within 0-59
  return { newHours, newMinutes };
}

function storeTimeAndCalculate() {
  const startHour = parseInt(startHourInput.value);
  const startMinute = parseInt(startMinuteInput.value);
  const hoursToAdd = parseInt(hoursToAddInput.value);
  const minutesToAdd = parseInt(minutesToAddInput.value);

  const startTime = `${startHour.toString().padStart(2, "0")}:${startMinute
    .toString()
    .padStart(2, "0")}`;
  let newTime = () => {
    if (hoursToAdd === "") {
      calculateMinutes(startDate, minutesToAdd);
    } else if (minutesToAdd === "") {
      calculateHours(startDate, hoursToAdd);
    } else if (hoursToAdd && minutesToAdd === true) {
      calculateHoursMinutes(startDate, hoursToAdd, minutesToAdd);
    } else {
      console.log("There is an error");
    }
  };
  if (newTime) {
    console.log("Stored hours:", startHour);
    console.log("Stored minutes: ", startMinute);
    console.log("-------------------------------------");
    console.log("Stored new hours:", newTime.hours);
    console.log("Stored new minutes:", newTime.minutes);
    console.log(
      `New time: ${newTime.newHours
        .toString()
        .padStart(2, "0")}:${newTime.newMinutes.toString().padStart(2, "0")}`
    );
    resultText.textContent = `${newTime.newHours
      .toString()
      .padStart(2, "0")}:${newTime.newMinutes.toString().padStart(2, "0")}`;
  } else {
    console.log('error')
  }
}
