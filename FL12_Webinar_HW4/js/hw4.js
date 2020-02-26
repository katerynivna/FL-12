const testArr = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];

function maxElement(array) {
    let max = Math.max(...array);
    return max;
}

console.log(maxElement(testArr));

function copyArray(array) {
    let copiedArr = [];
    array.forEach((element) => { copiedArr.push(element) });
    /*let copiedArr = [];
    for (let value of array) {
        copiedArr.push(value);
    }*/
    return copiedArr;
}

console.log(copyArray(testArr));