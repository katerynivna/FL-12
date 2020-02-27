const testArr = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
const testNumber = '0123456789';
const lastFourDigits = 4;

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
//task 4


//task 5
function findUniqueElements(array) {
    let filtrArr = [...new Set(array)];
    return filtrArr;
}
//console.log(findUniqueElements(testArr));

//task 6
function hideNumber(phoneNumber) {
    let numberLength = phoneNumber.length;
    let numberTail = phoneNumber.slice(numberLength - lastFourDigits, numberLength + 1);
    return numberTail.padStart(numberLength, "*");
}
//console.log(hideNumber(testNumber));