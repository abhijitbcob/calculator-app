const toggleSwitch = document.querySelector(".switch");
const toggleSwitchSlider = document.querySelector(".switch__slider");
const calculatorHeader = document.querySelector(".calculator__header");
const calculatorDisplay = document.querySelector(".calculator__display");
const equalKey = document.querySelector(".calculator__key--equal");

//////////////////////////
// Calculator - Theme switching Logic
let currentThemeNumber = 1;
const toggleSwitchHandler = function () {
  switch (currentThemeNumber) {
    case 1:
      toggleSwitchSlider.style.transform =
        "translateX(calc(var(--slider-size) + 37.5%))";
      currentThemeNumber++;
      setTheme(currentThemeNumber);
      break;
    case 2:
      toggleSwitchSlider.style.transform =
        "translateX(calc((var(--slider-size) + 37.5%)*2))";
      currentThemeNumber++;
      setTheme(currentThemeNumber);
      break;
    case 3:
      toggleSwitchSlider.style.transform = "translateX(0)";
      currentThemeNumber = 1;
      setTheme(currentThemeNumber);
      break;
    default:
      break;
  }
};

const setTheme = function (themeNumber) {
  document.documentElement.setAttribute("data-theme", themeNumber);
  const items = [calculatorHeader, calculatorDisplay];
  if (currentThemeNumber === 1) {
    items.forEach((item) => {
      item.style.setProperty("--text-color--1", "var(--text-color--2");
    });
  } else {
    items.forEach((item) => {
      item.style.removeProperty("--text-color--1");
    });
  }
  if (currentThemeNumber === 3) {
    equalKey.style.setProperty("--text-color--2", "var(--text-color--3");
  } else {
    equalKey.style.removeProperty("--text-color--2");
  }
};

setTheme();
toggleSwitch.addEventListener("click", toggleSwitchHandler);

//////////////////////////////////
// Calculator - Application Logic
const keypad = document.querySelector(".calculator__keypad");
const firstLineDisplay = document.querySelector(
  ".calculator__display--first-line"
);
const secondLineDisplay = document.querySelector(
  ".calculator__display--second-line"
);

// firstOperand[0-9] operator[+,-,*,/] lastOperand[0-9] = result
//e.g. 1 + 2 = 3
let state = {
  firstOperand: "",
  operator: "",
  lastOperand: "",
  result: "",
};

let stateHistory = Object.create(state);

function handleEvent(e) {
  let value = "";
  if (e.type === "keydown") {
    value = e.key;
  }

  if (e.type === "click") {
    value = e.target.dataset.value;
  }

  if (value === "=" || value === "Enter") {
    // To prevent default behaviour of "enter" key
    e.preventDefault();
    handleEqualKey();
    return;
  }

  if (value === "Backspace" || value === "del") {
    handleDelKey();
    render("secondLine");
  }

  if (value === "reset" || value === "Escape") {
    reset();
    return;
  }

  updateState(value);
  state.firstOperand.length > 12
    ? (secondLineDisplay.style.fontSize = "3.5rem")
    : (secondLineDisplay.style.fontSize = "4.8rem");
}

function updateState(value) {
  let { firstOperand, operator, lastOperand, result } = state;

  // Case 1: If the input value is a numeric value or decimal point
  // a + b = c
  if (!Number.isNaN(+value) || value === ".") {
    // First condition for inserting value into first operand

    if (
      operator === "" &&
      lastOperand === "" &&
      result === "" &&
      firstOperand.length <= 16
    ) {
      // Stop if the operand already has a decimal point
      if (value === "." && firstOperand.includes(".")) return;
      // else

      if (value === "." && firstOperand === "") {
        state.firstOperand = "0.";
        render("secondLine");
        return;
      }

      state.firstOperand += value;
      render("secondLine");
      return;
    }

    // Second condition for inserting value into first operand
    if (
      firstOperand === "" &&
      operator === "" &&
      lastOperand === "" &&
      result !== "" &&
      firstOperand.length <= 16
    ) {
      state.result = "";
      state.firstOperand += value;
      firstLineDisplay.textContent = "";
      render("secondLine");
      return;
    }

    // Only condition for inserting value into last operand
    if (operator !== "" && lastOperand.length <= 16) {
      if (value === "." && lastOperand === "") {
        state.lastOperand = "0.";
        secondLineDisplay.textContent = thousandsSeparator("lastOperand");
        return;
      }

      state.lastOperand += value;
      secondLineDisplay.textContent = thousandsSeparator("lastOperand");
      return;
    }
  }

  // Case 2: If the input value is operational key
  // c = a + b
  if (["+", "-", "*", "/"].includes(value)) {
    handleDecimalPoint("firstOperand");
    if (firstOperand !== "" && lastOperand == "") {
      state.operator = value;
      render("firstLine");
      secondLineDisplay.textContent = Number(
        state.firstOperand
      ).toLocaleString();
      return;
    }

    if (firstOperand !== "" && operator !== "" && lastOperand !== "") {
      let result = handleFloat(calculateResult(state));
      state.firstOperand = result;
      state.operator = value;
      state.lastOperand = "";
      render("firstLine");
      secondLineDisplay.textContent = Number(
        state.firstOperand
      ).toLocaleString();
      return;
    }

    if (
      firstOperand === "" &&
      operator === "" &&
      lastOperand === "" &&
      result !== ""
    ) {
      state.firstOperand = state.result;
      state.operator = value;
      render("firstLine");
      secondLineDisplay.textContent = Number(
        state.firstOperand
      ).toLocaleString();
      return;
    }

    if (firstOperand === "" && operator === "") {
      state.firstOperand = "0";
      state.operator = value;
      render("firstLine");
      secondLineDisplay.textContent = Number(
        state.firstOperand
      ).toLocaleString();
      return;
    }
  }

  // console.log(state);
}

function calculateResult() {
  handleDecimalPoint("lastOperand");
  let firstOperand = +state.firstOperand;
  let operator = state.operator;
  let lastOperand = +state.lastOperand;

  if (operator === "+") {
    return firstOperand + lastOperand;
  }

  if (operator === "-") {
    return firstOperand - lastOperand;
  }

  if (operator === "*") {
    return firstOperand * lastOperand;
  }

  if (operator === "/") {
    return firstOperand / lastOperand;
  }
}

function setResult() {
  // 1 + 2 = 3
  if (state.operator && state.lastOperand !== "") {
    state.result = handleFloat(calculateResult());
    return;
  }

  // _ _ _ = _
  if (state.firstOperand === "" && state.result === "") {
    state.firstOperand = "0";
    state.result = "0";
    return;
  }

  // 1 _ _ = _
  if (state.firstOperand !== "" && state.operator === "") {
    handleDecimalPoint("firstOperand");
    state.result = state.firstOperand;
    return;
  }
  // prettier-ignore
  // 1 + _ = _
  if (state.lastOperand === "" && state.result === "") {
    state.lastOperand = state.firstOperand;
    state.result = handleFloat(calculateResult(state));
    return;
  }

  // _ _ _ = 1
  if (state.result !== "") {
    state.firstOperand = stateHistory.result;
    state.operator = stateHistory.operator;
    state.lastOperand = stateHistory.lastOperand;
    state.result = handleFloat(calculateResult(state));
    return;
  }
}

function handleDelKey() {
  //a + b = c
  if (state.operator === "" && state.firstOperand !== "") {
    state.firstOperand = state.firstOperand.slice(
      0,
      state.firstOperand.length - 1
    );
  }

  if (state.operator !== "" && state.lastOperand !== "") {
    state.lastOperand = state.lastOperand.slice(
      0,
      state.lastOperand.length - 1
    );
  }

  // Erasing first line display when del key is pressed after pressing equal(=) key
  if (state.result !== "") {
    firstLineDisplay.textContent = "";
  }
}

function handleEqualKey() {
  setResult();
  // Displaying the expression on the first line
  firstLineDisplay.textContent = `
      ${state.firstOperand} ${state.operator === "*" ? "×" : state.operator} ${
    state.lastOperand
  } =
    `;

  stateHistory = { ...state };

  // Resetting the state object
  state.firstOperand = "";
  state.operator = "";
  state.lastOperand = "";

  // Updating second line display
  render("secondLine");
  // console.log(state);
}

function reset() {
  state.firstOperand = "";
  state.operator = "";
  state.lastOperand = "";
  state.result = "";

  firstLineDisplay.textContent = "";
  secondLineDisplay.textContent = 0;
}

function handleDecimalPoint(operand) {
  if (state[operand].length === 1 && state[operand] === ".") {
    state[operand] = "0";
    return;
  }
  if (state[operand].slice(-1) === ".") {
    state[operand] = state[operand].slice(0, -1);
    return;
  }
}

// Handling floating number
function handleFloat(num) {
  if (
    num % 1 !== 0 &&
    num.toString().slice(num.toString().indexOf(".")).length > 10
  ) {
    console.log(num.toString().slice(num.toString().indexOf(".")).length);
    return num.toFixed(10).toString();
  }

  return num.toString();
}

["click", "keydown"].forEach((event) => {
  window.addEventListener(event, handleEvent);
});

/////////////////////////
// Application UI logic
function render(where) {
  if (where === "secondLine") {
    if (state.operator === "" && state.result === "") {
      secondLineDisplay.textContent =
        state.firstOperand.length === 0
          ? "0"
          : thousandsSeparator("firstOperand");
    }

    if (state.operator !== "") {
      secondLineDisplay.textContent =
        state.lastOperand.length === 0
          ? "0"
          : thousandsSeparator("lastOperand");
    }

    if (state.result !== "") {
      secondLineDisplay.textContent = thousandsSeparator("result");
    }
  }

  if (where === "firstLine") {
    firstLineDisplay.textContent = `
      ${state.firstOperand} ${state.operator === "*" ? "×" : state.operator}
    `;
  }
}

function thousandsSeparator(property) {
  let operand = state[property];
  if (operand.includes(".")) {
    return operand;
  }

  // console.log(Number(operand).toLocaleString());
  return Number(operand).toLocaleString();
}
