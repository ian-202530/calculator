let firstNum = "0"
let secondNum = "none"
let operator = "none"
let term = "first"
let result = "0"
let newNum = "n"
let second = "false"

const display = document.getElementById('displayScreen');

const buttons = document.querySelectorAll('.calculatorButtons.apple-only');
const tiButtons = document.querySelectorAll('.calculatorButtons.ti-only');
const lightButtons = document.querySelectorAll('.calculatorButtons.light-only');
const utilityButtons = document.querySelectorAll('.utility');
const operatorsButtons = document.querySelectorAll('.operators');
const numbersButtons = document.querySelectorAll('.numbers');
const secondButton = tiButtons[5];
const clearButton = buttons[1];
const clearButton3 = lightButtons[13];
const moduloButton = buttons[2];
const moduloButton3 = lightButtons[10];
const divideButton = buttons[3];
const divideButton2 = tiButtons[26];
const divideButton3 = lightButtons[6];
const multiplyButton = buttons[7];
const multiplyButton2 = tiButtons[31];
const multiplyButton3 = lightButtons[5];
const subtractButton = buttons[11];
const subtractButton2 = tiButtons[36];
const subtractButton3 = lightButtons[4];
const addButton = buttons[15];
const addButton2 = tiButtons[41];
const addButton3 = lightButtons[3];
const exponentButton2 = tiButtons[21];
const exponentButton3 = lightButtons[28];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function numUpdater() {
	if (term === "first") {
		firstNum = display.innerText
	}
	else if (term === "second") {
		secondNum = display.innerText
	}
}

function typer(pressedButton) {
	if (pressedButton === 'delete') {
		if (display.innerText.length <= 1) {
            display.innerText = "0";
        } else {
            display.innerText = display.innerText.slice(0, -1);
        }
			}
	else if (numbers.includes(pressedButton)) {
			if (display.innerText === ('0') || newNum === "y") {
				display.innerText = pressedButton;
				newNum = "n"
			}
			else {
				display.innerText += pressedButton;
			}
	}
	else if (pressedButton === '.') {
		if (!display.innerText.includes('.')) {
				display.innerText += pressedButton;
		}
	}
	else if (pressedButton === "ans") {
		display.innerText = result
		numUpdater()
	}

	if (display.innerText !== "0") {
		clearButton.innerText = "C"
		clearButton3.innerText = "C";
	}
	else {
		clearButton.innerText = "AC"
		clearButton3.innerText = "AC";
	}

	numUpdater()

	if (second === "true") {
		secondButton.style.filter = "brightness(100%)"
		second = "false"
	}
};

function clearCalc(type) {
	if (clearButton.innerText === "C" || clearButton3.innerText === "C") {
		display.innerText = "0"
		clearButton.innerText = "AC"
		clearButton3.innerText = "AC"

		if (term === "first") {
			firstNum = "0"
		}
		else {
			secondNum = "none"
		}
	}
	else {
		display.innerText = "0"

		firstNum = "0"
		secondNum = "none"
		operator = "none"
		term = "first"
		newNum = "n"
		divideButton.style.filter = "brightness(100%)"
		multiplyButton.style.filter = "brightness(100%)"
		subtractButton.style.filter = "brightness(100%)"
		addButton.style.filter = "brightness(100%)"
		moduloButton.style.filter = "brightness(100%)"
		divideButton2.style.filter = "brightness(100%)"
		multiplyButton2.style.filter = "brightness(100%)"
		subtractButton2.style.filter = "brightness(100%)"
		addButton2.style.filter = "brightness(100%)"
		divideButton3.style.filter = "brightness(100%)"
		multiplyButton3.style.filter = "brightness(100%)"
		subtractButton3.style.filter = "brightness(100%)"
		addButton3.style.filter = "brightness(100%)"
		moduloButton3.style.filter = "brightness(100%)"
		exponentButton2.style.filter = "brightness(100%)"
		exponentButton3.style.filter = "brightness(100%)"
		secondButton.style.filter = "brightness(100%)"
	}
}

function selectOperator(operation) {
	if (operation === 'divide') {
		operator = 'divide'
		divideButton.style.filter = "brightness(80%)"
		multiplyButton.style.filter = "brightness(100%)"
		subtractButton.style.filter = "brightness(100%)"
		addButton.style.filter = "brightness(100%)"
		moduloButton.style.filter = "brightness(100%)"
		divideButton2.style.filter = "brightness(80%)"
		multiplyButton2.style.filter = "brightness(100%)"
		subtractButton2.style.filter = "brightness(100%)"
		addButton2.style.filter = "brightness(100%)"
		exponentButton2.style.filter = "brightness(100%)"
		divideButton3.style.filter = "brightness(80%)"
		multiplyButton3.style.filter = "brightness(100%)"
		subtractButton3.style.filter = "brightness(100%)"
		addButton3.style.filter = "brightness(100%)"
		moduloButton3.style.filter = "brightness(100%)"
		exponentButton3.style.filter = "brightness(100%)"
	}
	if (operation === 'multiply') {
		operator = 'multiply'
		divideButton.style.filter = "brightness(100%)"
		multiplyButton.style.filter = "brightness(80%)"
		subtractButton.style.filter = "brightness(100%)"
		addButton.style.filter = "brightness(100%)"
		moduloButton.style.filter = "brightness(100%)"
		divideButton2.style.filter = "brightness(100%)"
		multiplyButton2.style.filter = "brightness(80%)"
		subtractButton2.style.filter = "brightness(100%)"
		addButton2.style.filter = "brightness(100%)"
		exponentButton2.style.filter = "brightness(100%)"
		divideButton3.style.filter = "brightness(100%)"
		multiplyButton3.style.filter = "brightness(80%)"
		subtractButton3.style.filter = "brightness(100%)"
		addButton3.style.filter = "brightness(100%)"
		moduloButton3.style.filter = "brightness(100%)"
		exponentButton3.style.filter = "brightness(100%)"
	}
	if (operation === 'subtract') {
		operator = 'subtract'
		divideButton.style.filter = "brightness(100%)"
		multiplyButton.style.filter = "brightness(100%)"
		subtractButton.style.filter = "brightness(80%)"
		addButton.style.filter = "brightness(100%)"
		moduloButton.style.filter = "brightness(100%)"
		divideButton2.style.filter = "brightness(100%)"
		multiplyButton2.style.filter = "brightness(100%)"
		subtractButton2.style.filter = "brightness(80%)"
		addButton2.style.filter = "brightness(100%)"
		exponentButton2.style.filter = "brightness(100%)"
		divideButton3.style.filter = "brightness(100%)"
		multiplyButton3.style.filter = "brightness(100%)"
		subtractButton3.style.filter = "brightness(80%)"
		addButton3.style.filter = "brightness(100%)"
		moduloButton3.style.filter = "brightness(100%)"
		exponentButton3.style.filter = "brightness(100%)"
	}
	if (operation === 'add') {
		operator = 'add'
		divideButton.style.filter = "brightness(100%)"
		multiplyButton.style.filter = "brightness(100%)"
		subtractButton.style.filter = "brightness(100%)"
		addButton.style.filter = "brightness(80%)"
		moduloButton.style.filter = "brightness(100%)"
		divideButton2.style.filter = "brightness(100%)"
		multiplyButton2.style.filter = "brightness(100%)"
		subtractButton2.style.filter = "brightness(100%)"
		addButton2.style.filter = "brightness(80%)"
		exponentButton2.style.filter = "brightness(100%)"
		divideButton3.style.filter = "brightness(100%)"
		multiplyButton3.style.filter = "brightness(100%)"
		subtractButton3.style.filter = "brightness(100%)"
		addButton3.style.filter = "brightness(80%)"
		moduloButton3.style.filter = "brightness(100%)"
		exponentButton3.style.filter = "brightness(100%)"
	}
	if (operation === 'modulo') {
		operator = 'modulo'
		divideButton.style.filter = "brightness(100%)"
		multiplyButton.style.filter = "brightness(100%)"
		subtractButton.style.filter = "brightness(100%)"
		addButton.style.filter = "brightness(100%)"
		moduloButton.style.filter = "brightness(80%)"
		divideButton2.style.filter = "brightness(100%)"
		multiplyButton2.style.filter = "brightness(100%)"
		subtractButton2.style.filter = "brightness(100%)"
		addButton2.style.filter = "brightness(100%)"
		exponentButton2.style.filter = "brightness(100%)"
		divideButton3.style.filter = "brightness(100%)"
		multiplyButton3.style.filter = "brightness(100%)"
		subtractButton3.style.filter = "brightness(100%)"
		addButton3.style.filter = "brightness(100%)"
		moduloButton3.style.filter = "brightness(80%)"
		exponentButton3.style.filter = "brightness(100%)"
	}
	if (operation === 'exponent') {
		operator = 'exponent'

		divideButton.style.filter = "brightness(100%)"
		multiplyButton.style.filter = "brightness(100%)"
		subtractButton.style.filter = "brightness(100%)"
		addButton.style.filter = "brightness(100%)"
		moduloButton.style.filter = "brightness(100%)"
		divideButton2.style.filter = "brightness(100%)"
		multiplyButton2.style.filter = "brightness(100%)"
		subtractButton2.style.filter = "brightness(100%)"
		addButton2.style.filter = "brightness(100%)"
		exponentButton2.style.filter = "brightness(80%)"
		divideButton3.style.filter = "brightness(100%)"
		multiplyButton3.style.filter = "brightness(100%)"
		subtractButton3.style.filter = "brightness(100%)"
		addButton3.style.filter = "brightness(100%)"
		moduloButton3.style.filter = "brightness(100%)"
		exponentButton3.style.filter = "brightness(80%)"
	}
	if (operation === 'reset') {
		divideButton.style.filter = "brightness(100%)"
		multiplyButton.style.filter = "brightness(100%)"
		subtractButton.style.filter = "brightness(100%)"
		addButton.style.filter = "brightness(100%)"
		moduloButton.style.filter = "brightness(100%)"
		divideButton2.style.filter = "brightness(100%)"
		multiplyButton2.style.filter = "brightness(100%)"
		subtractButton2.style.filter = "brightness(100%)"
		addButton2.style.filter = "brightness(100%)"
		exponentButton2.style.filter = "brightness(100%)"
		divideButton3.style.filter = "brightness(100%)"
		multiplyButton3.style.filter = "brightness(100%)"
		subtractButton3.style.filter = "brightness(100%)"
		addButton3.style.filter = "brightness(100%)"
		moduloButton3.style.filter = "brightness(100%)"
		exponentButton3.style.filter = "brightness(100%)"
	}
}

function operationHandling(operation) {
	if (secondNum !== "none") {
		equals()
	}
	newNum = "y"
	
	selectOperator(operation)

	if (secondNum === "none") {
		if (term === "first") {
			term = "second"
		}
	}
};

function equals() {
	if (secondNum === "none") {
		selectOperator('reset')


		result = parseFloat(firstNum)

		operator = "none"
		firstNum = result.toString()
		secondNum = "none"
		term = "first"
		newNum = "y"
	}
	else {
		if (operator === 'divide') {
			result = parseFloat(firstNum) / parseFloat(secondNum)
			display.innerText = result

			selectOperator('reset')

			operator = "none"
			firstNum = result.toString()
			secondNum = "none"
			term = "first"
			newNum = "y"
		}
		if (operator === 'multiply') {
			result = parseFloat(firstNum) * parseFloat(secondNum)
			display.innerText = result

			selectOperator('reset')

			operator = "none"
			firstNum = result.toString()
			secondNum = "none"
			term = "first"
			newNum = "y"
		}
		if (operator === 'subtract') {
			result = parseFloat(firstNum) - parseFloat(secondNum)
			display.innerText = result

			selectOperator('reset')

			operator = "none"
			firstNum = result.toString()
			secondNum = "none"
			term = "first"
			newNum = "y"
		}
		if (operator === 'add') {
			result = parseFloat(firstNum) + parseFloat(secondNum)
			display.innerText = result

			selectOperator('reset')

			operator = "none"
			firstNum = result.toString()
			secondNum = "none"
			term = "first"
			newNum = "y"
		}
		if (operator === 'modulo') {
			result = parseFloat(firstNum) % parseFloat(secondNum)
			display.innerText = result

			selectOperator('reset')

			operator = "none"
			firstNum = result.toString()
			secondNum = "none"
			term = "first"
			newNum = "y"
		}
		if (operator === 'exponent') {
			result = parseFloat(firstNum) ** parseFloat(secondNum)
			display.innerText = result

			selectOperator('reset')

			operator = "none"
			firstNum = result.toString()
			secondNum = "none"
			term = "first"
			newNum = "y"
		}
	}
	clearButton.innerText = "AC"
	clearButton3.innerText = "AC"
};

function special(operation) {
	if (operation === 'negative') {
		if (display.innerText.includes("-")) {
			display.innerText = display.innerText.slice(1);
		}
		else {
			display.innerText = "-" + display.innerText
		}
	}
	else if (operation === 'square') {
		if (term === "first") {
			display.innerText = (parseFloat(firstNum) ** 2).toString()
			equals()
		}
		else if (term === "second") {
			display.innerText = (parseFloat(secondNum) ** 2).toString()
			equals()
		}
	}
	else if (operation === 'sqrt') {
		if (term === "first") {
			equals()
			display.innerText = (Math.sqrt(parseFloat(firstNum))).toString()
			equals()
		}
		else if (term === "second") {
			display.innerText = (Math.sqrt(parseFloat(secondNum))).toString()
			equals()
		}
	}
	numUpdater()

};