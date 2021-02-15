import {
  addition,
  subtraction,
  multiplication,
  division
} from './mathUtils.js';

//ADDITION
const addNum1 = document.getElementById('add-input-1');
const addNum2 = document.getElementById('add-input-2');
const addSolution = document.getElementById('add-result');

export function handleAddition() {
  const value1 = addNum1.valueAsNumber;
  const value2 = addNum2.valueAsNumber;
  addSolution.textContent = addition(value1, value2);
}

//SUBTRACTION
const subNum1 = document.getElementById('subtract-input-1');
const subNum2 = document.getElementById('subtract-input-2');
const subSolution = document.getElementById('subtract-results');

export function handleSubtraction() {
  const value1 = subNum1.valueAsNumber;
  const value2 = subNum2.valueAsNumber;
  subSolution.textContent = subtraction(value1, value2);
}

//MULTIPLICATION
const multNum1 = document.getElementById('multiplication-input-1');
const multNum2 = document.getElementById('multiplication-input-2');
const multSolution = document.getElementById('multiply-result');

export function handleMultiplication() {
  const value1 = multNum1.valueAsNumber;
  const value2 = multNum2.valueAsNumber;
  multSolution.textContent = multiplication(value1, value2);
}

//DIVISION
const divNum1 = document.getElementById('divide-input-1');
const divNum2 = document.getElementById('divide-input-2');
const divSolution = document.getElementById('divide-result');

export function handleDivision() {
  const value1 = divNum1.valueAsNumber;
  const value2 = divNum2.valueAsNumber;
  divSolution.textContent = division(value1, value2);
}
