// class Calculator {
//     constructor() {
//       this.display = document.getElementById('display');
//       this.buttonsContainer = document.getElementById('buttons');
//       this.operators = ['/', '*', '-', '+'];
//       this.createButtons();
//       this.attachEventListeners();
//     }
  
//     createButtons() {
//       for (let i = 9; i >= 0; i--) {
//         this.createButton(i.toString());
//       }
  
//       for (const operator of this.operators) {
//         this.createButton(operator);
//       }
  
//       this.createButton('.');
//       this.createButton('C', 'button clear');
//       this.createButton('=', 'button equals');
//     }
  
//     createButton(value, className = 'button') {
//       const button = document.createElement('button');
//       button.textContent = value;
//       button.className = className;
//       this.buttonsContainer.appendChild(button);
//     }
  
//     attachEventListeners() {
//       this.buttonsContainer.addEventListener('click', (event) => this.handleButtonClick(event));
//     }
  
//     handleButtonClick(event) {
//       const button = event.target;
//       if (button.classList.contains('button')) {
//         this.handleNumericButtonClick(button.textContent);
//       } else if (button.classList.contains('clear')) {
//         this.clearDisplay();
//       } else if (button.classList.contains('equals')) {
//         this.calculate();
//       }
//     }
  
//     handleNumericButtonClick(value) {
//       this.display.value += value;
//     }
  
//     clearDisplay() {
//       this.display.value = '';
//     }
  
//     calculate() {
//       try {
//         this.display.value = eval(this.display.value);
//       } catch (error) {
//         this.display.value = 'Error';
//       }
//     }
//   }
  
//   document.addEventListener('DOMContentLoaded', () => {
//     new Calculator();
//   });
  