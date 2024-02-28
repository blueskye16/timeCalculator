const startHourInput = document.getElementById("startHourInput");
const startMinuteInput = document.getElementById("startMinuteInput");
const hoursToAddInput = document.getElementById("hourInput");
const minutesToAddInput = document.getElementById("minuteInput");
const resultContainer = document.getElementById("resultContainer");
const resultText = resultContainer.querySelector("h1");

function setTime(startTime) {
  startTime = startTime.padStart(4, "0");
  return new Date(`2024-02-01T${startTime}`);
}

function calculateHours(startDate, hoursToAdd) {
  startDate.setHours(startDate.getHours() + hoursToAdd);
  return startDate.getHours() % 24; // Ensure hours stay within 0-23
}

function calculateMinutes(startDate, minutesToAdd) {
  startDate.setMinutes(startDate.getMinutes() + minutesToAdd);
  return startDate.getMinutes() % 60; // Ensure minutes stay within 0-59
}

function calculateHoursMinutes(startDate, hoursToAdd, minutesToAdd) {
  startDate.setHours(startDate.getHours() + hoursToAdd);
  startDate.setMinutes(startDate.getMinutes() + minutesToAdd);
  return {
    newHours: startDate.getHours() % 24,
    newMinutes: startDate.getMinutes() % 60,
  };
}

function storeTimeAndCalculate() {
  // Validate inputs: handle empty inputs and invalid values
  let startHour = parseInt(startHourInput.value);
  let startMinute = parseInt(startMinuteInput.value);
  let hoursToAdd = parseInt(hoursToAddInput.value);
  let minutesToAdd = parseInt(minutesToAddInput.value);

  if (isNaN(startHour) || isNaN(startMinute) || startHour < 0 || startHour > 23 || startMinute < 0 || startMinute > 59) {
    alert("Invalid start time values. Please enter hours between 0-23 and minutes between 0-59.");
    return;
  }

  if (isNaN(hoursToAdd) || isNaN(minutesToAdd)) {
    alert("Invalid time addition values. Please enter valid integers.");
    return;
  }

  const startTime = `${startHour.toString().padStart(2, "0")}:${startMinute.toString().padStart(2, "0")}`;
  let startDate = setTime(startTime);

  // Handle separate calculations for hours and minutes
  if (hoursToAdd && !minutesToAdd) {
    const newHours = calculateHours(startDate, hoursToAdd);
    resultText.textContent = `${newHours.toString().padStart(2, "0")}:${startMinute.toString().padStart(2, "0")}`;
  } else if (minutesToAdd && !hoursToAdd) {
    const newMinutes = calculateMinutes(startDate, minutesToAdd);
    resultText.textContent = `${startHour.toString().padStart(2, "0")}:${newMinutes.toString().padStart(2, "0")}`;
  } else {
    // Combined calculation with validation
    if (hoursToAdd < 0 && minutesToAdd < 0) {
      alert("Both hours and minutes cannot be negative simultaneously.");
      return;
    }
    const combinedResult = calculateHoursMinutes(startDate, hoursToAdd, minutesToAdd);
    resultText.textContent = `${combinedResult.newHours.toString().padStart(2, "0")}:${combinedResult.newMinutes.toString().padStart(2, "0")}`;
  }
}

// Add event listeners
document.getElementById("calculateBtn").addEventListener("click", storeTimeAndCalculate);
document.getElementById("resetBtn").addEventListener("click", function() {
  startHourInput.value = "";
  startMinuteInput.value = "";
  hoursToAddInput.value = "";
  minutesToAddInput.value = "";
  resultText.textContent = "00:00";
});
