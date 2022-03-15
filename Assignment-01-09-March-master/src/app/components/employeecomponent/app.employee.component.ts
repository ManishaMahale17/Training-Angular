import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  HostListener,
} from '@angular/core';
import { Employee } from 'src/app/models/app.employee.model';
import { EmployeeLogic } from 'src/app/models/app.logic';
import { Product } from 'src/app/models/app.product.model';
import { ParentComponent } from 'src/app/components/employeecomponent/app.parentemployee.component';

@Component({
  selector: 'app-employee-component',
  templateUrl: './app.employee.view.html',
})
export class EmployeeComponent implements OnInit, OnChanges {
  employee: Employee;
  empNo: number;
  employees: Array<Employee>;
  private logic: EmployeeLogic;
  columnHeaders: Array<string>;
  row1: number;
  canSort = true;
  sorting: Employee ;
  employeeId:number;
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

  ngOnInit() {
    console.log('ngOnInit is invoked');
    this.employees = this.logic.getEmployees();
    this.columnHeaders = Object.keys(this.employee);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is invoked');
  }
  onAddRow(event: any): void {
    this.employee = event;
    console.log(`Row ${this.employee}`);
  }
  onReceived(event: any): void {
    this.empNo = event;
    console.log(`Emp id: ${this.empNo}`);
    this.sortData();
  }
  sortData(){
  //  this.a = false;
    console.log("In sort data "+event);
    if(!this.canSort){
      let newarr = this.employees.sort((a,b)=>a.EmployeeId-b.EmployeeId);
      this.employees = newarr;
      console.log(this.employees);

    }else{
      let newarr = this.employees.sort((a,b)=>b.EmployeeId-a.EmployeeId);
      this.employees = newarr;
      console.log(this.employees);
    }
  this.canSort = !this.canSort;
  }
//From the Parent Component, you need to pass the value for 'canSort' to the child component.
  //This is the @Input decorated property in the Child Component.
  //If the parent component pass the value
  //for this property as 'true' then the child component has to show data in sorted manner
}
