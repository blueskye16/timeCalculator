const startHourInput = document.getElementById("startHourInput");
const startMinuteInput = document.getElementById("startMinuteInput");
const hoursToAddInput = document.getElementById("hourInput");
const minutesToAddInput = document.getElementById("minuteInput");
const resultContainer = document.getElementById("resultContainer");
const resultText = resultContainer.querySelector("h1");

// Function to calculate new time (improved for clarity)
function calculateHoursMinute(startTime, hoursToAdd, minutesToAdd) {
  // 1. Ensure consistent time format with leading zeros
  startTime = startTime.padStart(4, "0"); // Add leading zeros if needed

  // 2. Create Date object with correct time components
  const startDate = new Date(`1970-01-01T${startTime}`); // Extract hours and minutes directly

  // 3. Add hours and minutes to Date object
  startDate.setHours(startDate.getHours() + hoursToAdd);
  startDate.setMinutes(startDate.getMinutes() + minutesToAdd);

  // 4. Handle potential overflow and underflow (improved accuracy)
  const newHours = startDate.getHours() % 24; // Ensure hours stay within 0-23
  const newMinutes = startDate.getMinutes() % 60; // Ensure minutes stay within 0-59

  // 5. Return an object with new hours and minutes
  return { hours: newHours, minutes: newMinutes };
}

// Function to store input values and calculate new time
function storeTimeAndCalculate() {
  // Validate input values (optional)
  const startHour = parseInt(startHourInput.value);
  const startMinute = parseInt(startMinuteInput.value);
  const hoursToAdd = parseInt(hoursToAddInput.value);
  const minutesToAdd = parseInt(minutesToAddInput.value);

  // Validate start hours: 0-23
  if (isNaN(startHour) || startHour < 0 || startHour > 23) {
    alert("Invalid start hour. Please enter a value between 0 and 23.");
    return;
  }

  // Validate start minutes: 0-59
  if (isNaN(startMinute) || startMinute < 0 || startMinute > 59) {
    alert("Invalid start minute. Please enter a value between 0 and 59.");
    return;
  }

  // Validate hours to add: 0-23
  if (isNaN(hoursToAdd) || hoursToAdd < 0 || hoursToAdd > 23) {
    alert("Invalid hours to add. Please enter a value between 0 and 23.");
    return;
  }

  // Validate minutes to add: 0-59
  if (isNaN(minutesToAdd) || minutesToAdd < 0 || minutesToAdd > 59) {
    alert("Invalid minutes to add. Please enter a value between 0 and 59.");
    return;
  }

  // Focus on the next field after reaching the limit
  // if (startHourInput.value.length === 2) {
  //   startMinuteInput.focus();
  // } else if (startMinuteInput.value.length === 2) {
  //   hoursToAddInput.focus();
  // } else if (hoursToAddInput.value.length === 2) {
  //   minutesToAddInput.focus();
  // }

  // Calculate new time using validated values
  const startTime = `${startHour.toString().padStart(2, "0")}:${startMinute
    .toString()
    .padStart(2, "0")}`;
  const newTime = calculateHoursMinute(startTime, hoursToAdd, minutesToAdd);

  // Handle calculation results
  if (newTime) {
    // Check if calculations were successful
    console.log("Stored hours:", startHour);
    console.log("Stored minutes: ", startMinute);
    console.log("-------------------------------------");
    console.log("Stored new hours:", newTime.hours);
    console.log("Stored new minutes:", newTime.minutes);
    console.log(
      `New time: ${newTime.hours.toString().padStart(2, "0")}:${newTime.minutes
        .toString()
        .padStart(2, "0")}`
    );
    resultText.textContent = `${newTime.hours
      .toString()
      .padStart(2, "0")}:${newTime.minutes.toString().padStart(2, "0")}`;

    // Optionally update the display or store the new time as needed
  } else {
    // Provide meaningful error feedback if calculation failed
    console.error("Error calculating new time.");
  }
}

function resetInput() {
  startHourInput.value = "";
  startMinuteInput.value = "";
  hoursToAddInput.value = "";
  minutesToAddInput.value = "";

  resultText.textContent = "00:00";
}

resetBtn.addEventListener("click", resetInput);

// Clear any existing calculations on page load (optional)
window.onload = function () {
  console.log("-- Initializing time calculator --");
  // Reset calculation results or display elements here
};
