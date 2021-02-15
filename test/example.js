import {
    addition, 
    subtraction,
    multiplication,
    division
} from '../mathUtils.js'
const test = QUnit.test;

test('add test', (expect) => {
    const expected = 6;
    const actual = addition(2,4);
    expect.equal(expected, actual);
})

test('subtract test', (expect) => {
    const expected = 2;
    const actual = subtraction(4,2);
    expect.equal(expected, actual);
})

test('mult test', (expect) => {
    const expected = 8;
    const actual = multiplication(2,4);
    expect.equal(expected, actual);
})

test('divide test', (expect) => {
    const expected = 2;
    const actual = division(8,4);
    expect.equal(expected, actual);
})
