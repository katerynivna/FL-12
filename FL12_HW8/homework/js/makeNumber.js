function makeNumber(mixedString) {
    let n = mixedString.length;
    let numArr = [];
    for (let i = 0; i < n; i++) {
        if(mixedString[i] >= 0 || mixedString[i] <= 9) {
            numArr = numArr + mixedString[i]; 
        }
    }
    console.log(numArr);
}

makeNumber('12fjhfjkhf7');