import { Employee } from './app.employee.model';


export class EmployeeLogic{
    private employees:Array<Employee>;
    constructor(){
      this.employees = new Array<Employee>();
      this.employees.push(
        new Employee(101,"Huma",30000000,"Permanent")
      );
      this.employees.push(
        new Employee(102,"Shabname",40000000,"Contract")
      );
    }

    getEmployees():Array<Employee>{
      return this.employees;
    }
}
