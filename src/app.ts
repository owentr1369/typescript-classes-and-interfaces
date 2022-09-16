class Department {
  // private id: string;
  // public name: string;
  private employees: string[] = [];

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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
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

accounting.addReport("Something went wrong...!");

accounting.printReports();
// accountingCopy.describe();
// // Department undefined
