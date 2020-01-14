const one_day = 86400000;

//1
function convert() {
    let converted = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            converted.push(String(arguments[i]));
        } else if (typeof arguments[i] === 'string'){
            converted.push(Number(arguments[i]));

        }
    }
    return converted;
}

//2
function executeForEach(arr, func) {
    for (let iElement of arr) {
        func(iElement);
    }
}

//3
function mapArray (arr, func) {
    let newArr = [];
    for (let iElement of arr) {
        let mapArrayElement = func(parseInt(iElement));
        newArr.push(mapArrayElement);
    }
    return newArr;
}

//4
function filterArray (arr, func) {
    let newArr = [];
    for (let iElement of arr) {
        if (func(iElement)) {
            newArr.push(iElement);
        }
    }
    return newArr;
}

//5
function flipOver(inputStr) {
    let reverseStr = '';
    let n = inputStr.length;
    for (let i = n - 1; i >= 0; i--) {
        let lastChar = inputStr[i];
        reverseStr += lastChar;
    }
    return reverseStr;
}

//6
function makeListFromRange (arr) {
    let a = arr[0], b = arr[1];
    let arrList = [];
    for (let i = a; i <= b; i++) {
        let listElement = i;
        arrList.push(listElement);
    }
    return arrList;  
}

//7
function getArrayOfKeys(arr, key) {
    let newArr = [];
    for (let obj of arr) {
        newArr.push(obj[key]);
    }
    return newArr;    
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
console.log(getArrayOfKeys(actors, 'name'));

//8
function substitute(arr) {
    const milestone = 30;
    return mapArray(arr, function(el) {
        return el < milestone ? '*' : el;
    });    
}

//9
function getPastDay(date, timespan) {
    let d = date.getTime();
    return new Date(d - timespan * one_day).getDate();   
}

//10
function formatDate(date) {
    const Y = date.getFullYear();
    const M = date.getMonth();
    const D = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const duoDigit = 10;
    const checkedHour = hours < duoDigit ? '0' + hours : '' + hours;
    const checkedMin = minutes < duoDigit ? '0' + minutes : '' + minutes;
    return `${Y}/${M + 1}/${D} ${checkedHour}:${checkedMin}`; 
}