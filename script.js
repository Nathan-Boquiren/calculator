let cl = console.log;

// Dom elements
const display = document.getElementById("display");
const numBtns = document.querySelectorAll(".num-btn");
const operantBtns = document.querySelectorAll(".op-btn");
const equalBtn = document.getElementById("equals-btn");
const clearbtn = document.getElementById("clear-btn");

// Calculator logic

let calculationArr = [];

// Number array

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let currentInput = btn.innerHTML;
    let lastInput = calculationArr[calculationArr.length - 1];

    if (nums.includes(Number(lastInput)) || lastInput === undefined) {
      if (typeof lastInput === "string" && !isNaN(lastInput)) {
        calculationArr[calculationArr.length - 1] += currentInput;
      } else {
        calculationArr.push(`${currentInput}`);
      }
    } else {
      calculationArr.push(`${currentInput}`);
    }

    let calculationStr = calculationArr.join("");

    display.innerHTML = calculationStr;
  });
});

operantBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculationArr.push(` ${btn.innerHTML} `);
    let calculationStr = calculationArr.join("");
    display.innerHTML = calculationStr;
  });
});

equalBtn.addEventListener("click", () => {
  let calculationStr = calculationArr.join(" ");
  let result = eval(calculationStr);

  if (result.toString().length > 15) {
    result = Number(result.toPrecision(15));
  }

  if (result === Infinity) {
    display.innerHTML = "YOU CAN'T DIVIDE BY 0!!";
  } else {
    display.innerHTML = result;
  }
  calculationArr.length = 0;
  calculationArr.push(result);
});

clearbtn.addEventListener("click", () => {
  display.innerHTML = "";
  calculationArr.length = 0;
});
