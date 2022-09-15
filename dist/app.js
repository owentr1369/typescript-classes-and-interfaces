"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department " + this.name);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
// Department Accounting
const accountingCopy = { name: "Dummy", describe: accounting.describe };
accountingCopy.describe();
// Department undefined
