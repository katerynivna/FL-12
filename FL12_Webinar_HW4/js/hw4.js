'use strict';
const testArr = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
const testNumber = '0123456789';
const lastFourDigits = 4;
const testObj = {
    key1: "value1",
    key2: 2
};
const oldObj = { name: "Someone", details: { id: 1, age: 11, university: 'UNI'} };

//task 1
function maxElement(array) {
    let max = Math.max(...array);
    return max;
}
//console.log(maxElement(testArr));

//task 2
function copyArray(array) {
    let copiedArr = [];
    array.forEach((element) => { copiedArr.push(element) });
    return copiedArr;
}
//console.log(copyArray(testArr));

//task 3
function addUniqueId(object) {
    return { ...object, uniqueId: Symbol() };
}
//console.log(addUniqueId(testObj));

//task 4
function regroupObject({name, details: {id, age, university}}) {
    return {university, user: {age, firstName: name, id}};
}
//console.log(regroupObject(oldObj));

//task 5
function findUniqueElements(array) {
    let filtrArr = [...new Set(array)];
    return filtrArr;
}
//console.log(findUniqueElements(testArr));

//task 6
function hideNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberTail = phoneNumber.slice(numberLength - lastFourDigits, numberLength + 1);
    return numberTail.padStart(numberLength, "*");
}
//console.log(hideNumber(testNumber));

//task 7
function add(par1 = required(), par2 = required()) {
    return par1 + par2;
}
let required = () => { throw new Error('Missing property') };


//task 8