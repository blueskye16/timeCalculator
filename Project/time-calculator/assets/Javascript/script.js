// masih belum bisa convert dari menit ke jam
// ex: 70 menit, jamnya ngga nambah
const startHourInput = document.getElementById("startHourInput");
const startMinuteInput = document.getElementById("startMinuteInput");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const resultContainer = document.getElementById("resultContainer");
const resultText = resultContainer.querySelector("h1");

function setTime(startTime) {
  startTime = startTime.padStart(4, "0");
  return new Date(`2024-02-01T${startTime}`);
}

function calculateHoursMinutes(startDate, hoursToAdd, minutesToAdd) {
  // Add combined minutes (including existing and new minutes)
  const totalMinutes = startDate.getMinutes() + minutesToAdd;

  // Calculate additional hours based on the total minutes
  const additionalHours = Math.floor(totalMinutes / 60);

  // Update hours and minutes with the calculations
  startDate.setHours(startDate.getHours() + hoursToAdd + additionalHours);
  startDate.setMinutes(totalMinutes % 60);

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
