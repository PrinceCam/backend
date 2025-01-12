const returnEmptyString = function () {
    return ""
};
console.log(returnEmptyString())

const returnZeroNumber = function () {
    return 0
};
console.log(returnZeroNumber())

const returnEmptyArray = function () {
    return []
};
console.log(returnEmptyArray())

const returnEmptyObject = function () {
    let cam = {}
    return cam
};
console.log(returnEmptyObject())

const returnString = function () {
    return "I Love Coding"
};
console.log(returnString())

const addition = function (num1, num2) {
   return num1 + num2

};

console.log(addition(4,10))

const subtraction = function (num1, num2) {
    return num1 - num2
};

console.log(subtraction(4,10))

const multiplication = function (num1, num2) {
    return num1 * num2

};
console.log(multiplication(4,10))

const division = function (num1, num2) {
    return num1 / num2
};
console.log(division(4,10))

const returnArray = function () {
    return ["Rams", "Cowgirls", "Steelers", "Ravens"]
};
console.log(returnArray([]))


const returnFirstIndex = function (array) {
  return array[0];
};
console.log(returnFirstIndex([6, 12, 24]));


const returnSecondIndex = function (array) {
    return array[1]
};
console.log(returnSecondIndex([6, 12, 24]))


const returnArrayLength = function (array) {
    return array.length
};
console.log(returnArrayLength([6, 12, 18, 24]))

const arraySum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
console.log(arraySum([6, 12, 18, 24]))

const arraySubtraction = function () {};

const multiplicationArray = function () {};

const divisionArray = function () {};

const oddArray = function () {};

const evenArray = function () {};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
