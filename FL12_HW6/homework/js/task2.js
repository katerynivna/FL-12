alert("Let's identify triangle type. Enter values for sides lengths a, b and c:");
let a1 = prompt('a: ');
let b1 = prompt('b: ');
let c1 = prompt('c: ');

if (isNaN(a1) || a1 === undefined || a1 === '' ||
    isNaN(b1) || b1 === undefined || b1 === '' ||
    isNaN(c1) || c1 === undefined || c1 === '') {
    console.log('input values should be ONLY numbers');
} else {
    const a = parseInt(a1);
    const b = parseInt(b1);
    const c = parseInt(c1);
    if (a === 0 || b === 0 || c === 0) {
        console.log('A triangle must have 3 sides with a positive definite length');
    } else if (a + b > c && a + c > b && b + c > a) {
        if(a === b && b === c && c === a) {
            console.log('Isosceles triangle');
        } else if (a === b && a !== c || b === c && b !== a || a === c && a !== b) {
            console.log('Equilateral triangle');
        } else {
            console.log('Scalene triangle');
        }
    } else {
        console.log("Triangle doesn't exist");
    }
}