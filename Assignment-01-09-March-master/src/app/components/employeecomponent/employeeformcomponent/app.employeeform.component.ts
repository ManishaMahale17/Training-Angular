import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/app.employee.model';
import { CustomValidators } from './app.custom.validators';

@Component({
  selector: 'app-employeeform-component',
  templateUrl: './app.employeeform.view.html'
})

export class EmployeeFormComponent implements OnInit {
  employee:Employee;
  frmEmployee:FormGroup;
  employees:Array<Employee>;
  constructor() {
    this.employee = new Employee(0,"",0,"");
    this.employees = new Array<Employee>();
    this.frmEmployee = new FormGroup({
      'EmployeeId': new FormControl(this.employee.EmployeeId,
        Validators.compose([Validators.required,Validators.minLength(2),
        Validators.maxLength(8),Validators.pattern('[0-9]+'),
        CustomValidators.checkEven,
        CustomValidators.isRepeated,
        CustomValidators.startWithUpperCase
        ])),
      'EmployeeName': new FormControl(this.employee.EmployeeName,
          Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]+'),
          CustomValidators.startWithUpperCase,
          ])),
    });
  }

  ngOnInit() { }
  save():void{
    this.employee = this.frmEmployee.value;
    this.employees.push(this.employee);
  }
}
