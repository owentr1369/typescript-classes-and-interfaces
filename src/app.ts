class Department {
  // private id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

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
