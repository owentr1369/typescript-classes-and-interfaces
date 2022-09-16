"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
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
const accounting = new Department("1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Keanu");
// accounting.name = "New Department";
accounting.describe();
// Department Accounting
accounting.printEmployeeInfomation();
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
// // Department undefined
