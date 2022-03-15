export class Employee {
  [x:string]:any;
    constructor(
        public EmployeeId:number,
        public EmployeeName:string,
        public EmployeeSalary:number,
        public EmployeeType:string,
    ) { }
}
