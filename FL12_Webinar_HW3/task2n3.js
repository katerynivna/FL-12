'use strict';

const ONE_YEAR = 31556952000;

class Employee {
    constructor (
        id,
        fisrtName,
        lastName,
        birthday,
        salary,
        position,
        department
    ) {
        this.id = id;
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.salary = salary;
        this.position = position;
        this.department = department;
        Employee.EMPLOYEES.push(this);
    }

    get age() {
        let nowDate = new Date();
        let ageInYears = parseInt((Date.parse(nowDate) - Date.parse(this.birthday)) / ONE_YEAR);
        return ageInYears;
    }

    get fullName() {
        return `${this.fisrtName} ${this.lastName}`;
    }

    static EMPLOYEES = [];

    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
    changePosition(newPosition) {
        this.position = newPosition;
    }
    changeSalary(newSalary) {
        this.salary = newSalary;
    }

    quit() {
        let arrayIndex = Employee.EMPLOYEES.indexOf(this);
        Employee.EMPLOYEES.splice(arrayIndex, 1);
    }

    retire() {
        let arrayIndex = Employee.EMPLOYEES.indexOf(this);
        console.log('It was such a pleasure to work with you!');
        Employee.EMPLOYEES.splice(arrayIndex, 1);
    }

    

}

let Kate = new Employee(1, 'Kate', 'Ovch', '1993/10/07', '100', 'none', 'testDept');
let Olga = new Employee(2, 'olg', 'olgov', '1982/05/10', '200', 'position2', 'test');

//console.log(Olga.quit());

