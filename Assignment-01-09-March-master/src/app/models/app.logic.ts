import { Employee } from './app.employee.model';


export class EmployeeLogic{
    private employees:Array<Employee>;
    constructor(){
      this.employees = new Array<Employee>();
      this.employees.push(
        new Employee(501,"Manisha Mahale",8000000,"IT")
      );
      this.employees.push(
        new Employee(502,"Vaibhav Tambe",89000,"CS")
      );
      this.employees.push(
        new Employee(503,"Sangam Nene",5000,"HR")
      );
    }

    getEmployees():Array<Employee>{
      return this.employees;
    }
}
