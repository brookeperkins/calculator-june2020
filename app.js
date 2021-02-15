import {
    handleAddition,
    handleSubtraction,
    handleMultiplication,
    handleDivision
} from './handlers.js';

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

addButton.addEventListener('click', handleAddition);
subtractButton.addEventListener('click', handleSubtraction);
multButton.addEventListener('click', handleMultiplication);
divideButton.addEventListener('click', handleDivision);
