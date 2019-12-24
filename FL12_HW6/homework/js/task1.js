alert("Let's solve quadratic equation of this type: ax^2 + bx + c = 0");
alert('Now enter values for a, b and c: ');
let a = prompt('a: ');
let b = prompt('b: ');
let c = prompt('c: ');
if (isNaN(a) || a === 0 || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    const con4 = 4;
    const con2 = 2;
    let discr = Math.sqrt(b * b - con4 * a * c);
    if (isNaN(discr)) {
        console.log('No real roots');
    } else if (discr === 0) {
        let x;
        x = -b / (con2 * a);
        console.log('x = ' + x);
    } else {
        let x1 = (-b + discr) / (con2 * a);
        let x2 = (-b - discr) / (con2 * a);
        console.log('x1 = ' + Math.round(x1) + ' and x2 = ' + Math.round(x2));
    }  
}