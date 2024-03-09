class PageHeader extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <header id="headerTop">
    <figure>
      <img
        id="imgLogo"
        src="./assets/images/Logo Universitas AMIKOM Purwokerto.png"
        alt="logo"
        width="90vw"
      />
    </figure>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tools</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </header>
    `;
  }
}

customElements.define("page-header", PageHeader);


// class MainSection extends HTMLElement {
//   constructor() {
//     super();

//     this.render();
//   }

//   render() {
//     this.innerHTML = `
//     <section id="timeCalculatorContainer">
//     <i class="fa-regular fa-star" style="color: #ffd43b"></i>
//     <h2>Time Calculator</h2>
//     <div id="timeContainer">
//       <div id="timeDisplay">
//         <p>SET TIME</p>
//         <input
//           type="number"
//           id="startHourInput"
//           placeholder="00"
//           maxlength="2"
//           oninput="this.value = this.value.slice(0, 2)"
//         />
//         <input
//           type="number"
//           id="startMinuteInput"
//           placeholder="00"
//           maxlength="2"
//           oninput="this.value = this.value.slice(0, 2)"
//         />
//       </div>
//       <div id="timeInputContainer">
//         <div id="hourContainer" class="time-input-el">
//           <p>Hour</p>
//           <input
//             type="number"
//             id="hourInput"
//             placeholder="00"
//             maxlength="2"
//           />
//         </div>
//         <div id="minuteContainer" class="time-input-el">
//           <p>Minute</p>
//           <input
//             type="number"
//             id="minuteInput"
//             placeholder="00"
//             maxlength="2"
//           />
//         </div>
//       </div>
//     </div>
//     <div class="btn-container">
//       <button
//         class="btn"
//         onclick="storeTimeAndCalculate()"
//         id="calculateBtn"
//       >
//         CALCULATE
//       </button>
//       <button class="btn" id="resetBtn">RESET</button>
//     </div>
//     <div id="resultContainer">
//       <p>Set Date (optional)</p>
//       <input type="date" id="dateInput" />
//       <p>RESULT</p>
//       <h1 id="timeCalculationResult">00:00</h1>
//       <p id="dateResult" style="display: none">dd/mm/yyyy</p>
//       <p id="exceedDay" style="display: none">Exceeding day time</p>
//     </div>
//   </section>
//     `;
//   }
// }
// customElements.define("main-section", MainSection);