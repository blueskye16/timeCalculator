const startHourInput = document.getElementById("startHourInput");
const startMinuteInput = document.getElementById("startMinuteInput");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const resultContainer = document.getElementById("resultContainer");
const resultText = resultContainer.querySelector("h1");
const dateResult = document.getElementById("dateResult");
const dateInput = document.getElementById("dateInput");
const exceedDay = document.getElementById("exceedDay");

// dateResult.textContent = ""

function setTime(startTime) {
  startTime = startTime.padStart(4, "0");

  // const dateInputValue = dateInput.value;
  // Return a new Date object with the correct format
  // let dateToUse = dateInputValue
  //   ? new Date(dateInputValue)
  //   : new Date("01/01/2024");

  dateToUse = dateInput.value ? new Date(dateInput.value) : new Date();

  const dateYear = `${dateToUse.getFullYear()}`;
  const dateMonth = `${(dateToUse.getMonth() + 1).toString().padStart(2, "0")}`;
  const dateDay = `${dateToUse.getDate().toString().padStart(2, "0")}`;
  dateResult.textContent = `${dateDay}-${dateMonth}-${dateYear}`;

  const dateFormat = `${dateYear}-${dateMonth}-${dateDay}`;
  // const dateFormat = `${dateToUse.getFullYear()}-${(dateToUse.getMonth() + 1)
  //   .toString()
  //   .padStart(2, "0")}-${dateToUse.getDate().toString().padStart(2, "0")}`;

  return new Date(`${dateFormat}T${startTime}`);
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

// function checkIfExceedsDay(startDate, calculatedDate) {
//   // Calculate the difference in milliseconds between the dates
//   const timeDifference = calculatedDate.getTime() - startDate.getTime();

//   console.log("Time Difference (ms):", timeDifference);

//   // Check if the difference is greater than 24 hours (in milliseconds)
//   if (timeDifference > 24 * 60 * 60 * 1000) {
//     // If it exceeds, display the calculated date and show the "exceedsDay" element
//     const calculatedDateFormat = `${calculatedDate.getFullYear()}-${(
//       calculatedDate.getMonth() + 1
//     )
//       .toString()
//       .padStart(2, "0")}-${calculatedDate
//       .getDate()
//       .toString()
//       .padStart(2, "0")}`;
//     dateResult.textContent = calculatedDateFormat;
//     exceedDay.style.display = "block";
//     console.log("Exceeds Day:", calculatedDateFormat);
//   } else {
//     // If it doesn't exceed, hide the "exceedsDay" element and set a default date format
//     exceedDay.style.display = "none";
//     dateResult.textContent = "dd/mm/yyyy";
//     console.log("Doesn't Exceed");
//   }
// }

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
  // console.log(startDate);
  // console.log(startTime);

  // di console uda ngelebihin, gimana caranya itu. jadiin objek or somth else

  const combinedResult = calculateHoursMinutes(
    startDate,
    hoursToAdd,
    minutesToAdd
  );

  const currentDate = `${startHour.toString().padStart(2, "0")}:${startMinute
    .toString()
    .padStart(2, "0")}`;

  // const currentDate = new Date(dat);
  const calculatedDate = new Date(startDate.getTime());
  calculatedDate.setHours(combinedResult.newHours, combinedResult.newMinutes);
  // console.log("-------------------")
  // console.log(currentDate);
  console.log(currentDate);
  console.log(calculatedDate);

  // Call the checkIfExceedsDay function
  // checkIfExceedsDay(startDate, calculatedDate);
  // if (currentDate !== calculatedDate) {
  //   dateResult.textContent = `${calculatedDate.getDate().toString().padStart(2, "0")}`;
  //   exceedDay.style.display = "block";
  // } else {
  //   dateResult.textContent = currentDate;
  //   exceedDay.style.display = "none";
  // }
  // console.log(calculatedDate);

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
  dateInput.value = "";
  // document.getElementById("dateInput").value = ""; // kalo pake kaya gini jadi
  dateResult.textContent = "dd/mm/yyyy";
  exceedDay.style.display = "none";
});
