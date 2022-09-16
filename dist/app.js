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
        // console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return {
            name: name,
        };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfomation() {
        // console.log(this.employees.length);
        // console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
const employee1 = Department.createEmployee("Max");
// console.log(employee1, Department.fiscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        // console.log("IT Department - ID: ", this.id);
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
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    describe() {
        // console.log("Accounting Department - ID: " + this.id);
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
        // console.log(this.reports);
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
// console.log(itAccouting);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.mostRecentReport = "Year end report";
accounting.addReport("Something went wrong...!");
console.log(accounting, accounting2);
accounting.addEmployee("Max");
accounting.addEmployee("Owen");
accounting.printReports();
// accounting.printEmployeeInfomation();
// accountingCopy.describe();
// // Department undefined
accounting.describe();
