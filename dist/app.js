"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // private id: string;
        // public name: string;
        this.employees = [];
        // this.name = n;
        // this.id = id;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting", "1");
accounting.addEmployee("Max");
accounting.addEmployee("Keanu");
// accounting.name = "New Department";
accounting.describe();
// Department Accounting
accounting.printEmployeeInfomation();
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
// // Department undefined
