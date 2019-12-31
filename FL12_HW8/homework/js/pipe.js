function addOne(x) {
    return x + 1;
}

function pipe(passedVal) {
    for (let i = 1; i < arguments.length; i++) {
        passedVal = arguments[i](passedVal);
    }
    return passedVal;
}

pipe(1, addOne, addOne);