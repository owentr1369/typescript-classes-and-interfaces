class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Keanu");

accounting.name = "New Department";

accounting.describe();
// Department Accounting
accounting.printEmployeeInfomation();
// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();
// // Department undefined
