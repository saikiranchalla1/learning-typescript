// Code goes here!

abstract class Department {
    // public name: string;
    // private name: string;
    static fiscalYear = 2023;

    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
        console.log(this.id);
    }

    static createEmployee(name: string) {
        return {
            name
        }
    }

    abstract describe(): void;

    addEmployee(employee: string) {
        // authentication and authorization
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// Inheritance

class ITDepartment extends Department {

    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'ITDepartment');
        this.admins = admins;
    }
    
    describe(): void {
        console.log("IT Department");
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found!');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("No value was provided!");
        }

        this.addReport(value);
    }

    addEmployee(employee: string): void { // overriding parent class definition
        if (employee === 'sai') {
            return;
        }
        this.employees.push(employee);
    }


    addReport(report: string) {
        this.reports.push(report);
    }

    printReports() {
        console.log(this.reports);
    }

    describe(): void {
        throw new Error("Method not implemented.");
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
}

// const accounting = new Department('d1', 'Accounting');
// accounting.name;
// accounting.employees;

// accounting.name = "DUMMY";

// accounting.describe();
// accounting.addEmployee("Kelly");
// accounting.addEmployee("Noah");

// accounting.printEmployeeInfo();


const it = new ITDepartment('d1', ['Marshall']);

it.addEmployee('Pablo');
it.addEmployee('Yam');

it.describe();
it.name = 'New IT Department';

it.printEmployeeInfo();

const account = AccountingDepartment.getInstance();
const accountTwo = AccountingDepartment.getInstance();

account.addReport('New Report');
accountTwo.addReport('Account Two Report')

accountTwo.printReports();
account.printReports();

account.mostRecentReport = 'Last Report';
console.log(account.mostRecentReport);

console.log(Department.fiscalYear);
// console.log((new Department('e1', 'DummyDepartment')).fiscalYear)


// SINGLETON
