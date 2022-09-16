abstract class Department {
  static fiscalYear = 2022;
  // private id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return {
      name: name,
    };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfomation() {
    // console.log(this.employees.length);
    // console.log(this.employees);
  }
}

const employee1 = Department.createEmployee("Max");
// console.log(employee1, Department.fiscalYear);

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    // console.log("IT Department - ID: ", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
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
