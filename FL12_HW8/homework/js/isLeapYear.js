function isLeapYear(inputD) {
    let inputY = new Date(inputD);
    let year = inputY.getFullYear();
    let feb29 = new Date(year, 1, 29).getDate();
    if (isNaN(year)) {
        return 'Invalid date';
    }
    if (feb29 === 29) {
        return year + ' is a leap year';
    } else { 
        return year + 'is not a leap year';
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);