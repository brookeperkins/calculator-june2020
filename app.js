import {
    add, 
    subtract, 
    multiply, 
    divide,
} from './test/utils.js';

//------------------------------------ADD


const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const boogerButton = document.getElementById('add-button');
const boogerSpan = document.getElementById('add-result');

boogerButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    const sum = add(value1, value2);
    boogerSpan.textContent = sum;
});

//---------------------------SUBTRACT


const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subButton = document.getElementById('subtract-button');
const subSpan = document.getElementById('subtract-result');

subButton.addEventListener('click', () => {
    const subvalue1 = subtractInput1.value;
    const subvalue2 = subtractInput2.value;
    const total = subtract(subvalue1, subvalue2);
    subSpan.textContent = total;
});

//---------------------------------MULTIPLY


const multInput1 = document.getElementById('multiply-input-1');
const multInput2 = document.getElementById('multiply-input-2');
const multButton = document.getElementById('multiply-button');
const multSpan = document.getElementById('multiply-result');

multButton.addEventListener('click', () => {
    const multvalue1 = multInput1.value;
    const multvalue2 = multInput2.value;
    const totalmult = multiply(multvalue1, multvalue2);
    multSpan.textContent = totalmult;
});

// ----------------------------------------DIVIDE

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideSpan = document.getElementById('divide-result');

divideButton.addEventListener('click', () => {
    const dividevalue1 = divideInput1.value;
    const dividevalue2 = divideInput2.value;
    const divsum = divide(dividevalue1, dividevalue2);
    divideSpan.textContent = divsum;
});