const startHourInput = document.getElementById("startHourInput");
const startMinuteInput = document.getElementById("startMinuteInput");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const resultContainer = document.getElementById("resultContainer");
const resultText = resultContainer.querySelector("h1");
const dateResult = document.getElementById("dateResult");

function setTime(startTime) {
  startTime = startTime.padStart(5, "0");
  const dateInput = document.getElementById("dateInput").value;

  // Return a new Date object with the correct format
  let dateToUse = dateInput ? new Date(dateInput) : new Date("01/01/2024");
  return new Date(
    `${dateToUse.getFullYear()}-${(dateToUse.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${dateToUse
      .getDate()
      .toString()
      .padStart(2, "0")}T${startTime}`
  );
}

function calculateHoursMinutes(startDate, hoursToAdd, minutesToAdd) {
  // Add combined minutes (including existing and new minutes)
  const totalMinutes = startDate.getMinutes() + minutesToAdd;

  // Calculate additional hours based on the total minutes
  const additionalHours = Math.floor(totalMinutes / 60);

  // Update hours and minutes with the calculations
  startDate.setHours(startDate.getHours() + hoursToAdd + additionalHours);
  startDate.setMinutes(totalMinutes % 60);

  // Handle cases where startDate exceeds the current year
  if (startDate.getFullYear() > new Date().getFullYear()) {
    startDate.setFullYear(new Date().getFullYear());
  }

  return {
    newHours: startDate.getHours(),
    newMinutes: startDate.getMinutes(),
  };
}

function storeTimeAndCalculate() {
  // Validate inputs (handle empty inputs and invalid values)
  let startHour = parseInt(startHourInput.value) || 0; // Default to 0 if empty
  let startMinute = parseInt(startMinuteInput.value) || 0; // Default to 0 if empty
  let hoursToAdd = parseInt(hourInput.value) || 0; // Default to 0 if empty
  let minutesToAdd = parseInt(minuteInput.value) || 0; // Default to 0 if empty

  const startTime = `${startHour.toString().padStart(2, "0")}:${startMinute
    .toString()
    .padStart(2, "0")}`;
  let startDate = setTime(startTime);
  console.log(startDate);
  console.log(startTime);

  const combinedResult = calculateHoursMinutes(
    startDate,
    hoursToAdd,
    minutesToAdd
  );

  // Display the result in any case
  resultText.textContent = `${combinedResult.newHours
    .toString()
    .padStart(2, "0")}:${combinedResult.newMinutes
    .toString()
    .padStart(2, "0")}`;
  // dateResult.textContent = `${dateToUse}`
}

// Add event listeners
document
  .getElementById("calculateBtn")
  .addEventListener("click", storeTimeAndCalculate);

document.getElementById("resetBtn").addEventListener("click", function () {
  startHourInput.value = "";
  startMinuteInput.value = "";
  hourInput.value = "";
  minuteInput.value = "";
  resultText.textContent = "00:00";
});
