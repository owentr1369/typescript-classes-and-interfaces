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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const itAccouting = new ITDepartment("1", ["Max"]);
itAccouting.addEmployee("Max");
itAccouting.addEmployee("Keanu");
// accounting.name = "New Department";
itAccouting.describe();
// Department Accounting
itAccouting.printEmployeeInfomation();
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
console.log(itAccouting);
const accounting = new AccountingDepartment("2", []);
accounting.mostRecentReport = "Year end report";
accounting.addReport("Something went wrong...!");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Owen");
accounting.printReports();
accounting.printEmployeeInfomation();
// accountingCopy.describe();
// // Department undefined
