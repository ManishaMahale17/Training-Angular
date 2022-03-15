import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/models/app.employee.model';
import { EmployeeLogic } from 'src/app/models/app.logic';
import { Product } from 'src/app/models/app.product.model';
@Component({
  selector: 'app-parentemployee-component',
  templateUrl: './app.parentemployee.view.html'
})

export class ParentComponent implements OnInit {
  employee: Employee;
  empNo: number;
  employees: Array<Employee>;
  private logic: EmployeeLogic;
  columnHeaders: Array<string>;
  row1: number;


  generateRow(): void {
    this.row1 = this.row1;
    console.log('invoked' + this.row1);
  }
  constructor() {
    this.employee = new Employee(0, '', 0, '');
    this.employees = new Array<Employee>();
    this.logic = new EmployeeLogic();
    this.columnHeaders = new Array<string>();
    this.row1 = 0;
    this.empNo = 0;
  }
  a = true;

  sortData(){
    this.a = false;
    console.log("In sort data ");
    if(this.a){
      let newarr = this.employees.sort((a,b)=>a.EmployeeId-b.EmployeeId);
      this.employees = newarr;
      console.log(this.employees);

    }else{
      let newarr = this.employees.sort((a,b)=>b.EmployeeId-a.EmployeeId);
      this.employees = newarr;
      console.log(this.employees);
    }
    this.a = !this.a;
  }
  ngOnInit() {
    console.log('ngOnInit is invoked');
    this.employees = this.logic.getEmployees();
    this.columnHeaders = Object.keys(this.employee);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is invoked');
  }
  //From the Parent Component, you need to pass the value for 'canSort' to the child component.
  //This is the @Input decorated property in the Child Component.
  //If the parent component pass the value
  //for this property as 'true' then the child component has to show data in sorted manner

}
