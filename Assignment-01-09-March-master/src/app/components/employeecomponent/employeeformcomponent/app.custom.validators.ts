import { AbstractControl } from '@angular/forms';
import { Employee } from 'src/app/models/app.employee.model';
import { EmployeeLogic } from 'src/app/models/app.logic';
export class CustomValidators  {
  static emp: Employee ;
  static e1: EmployeeLogic;

  static checkEven(ctrl: AbstractControl): any {
    if (parseInt(ctrl.value) % 2 === 0) {
      console.log(parseInt(ctrl.value) % 2);

      return null;
    } else {
      return { even: false };
    }
  }

  // Check whther Emplyee ID is not repated
  static isRepeated(ctrl: AbstractControl): any {
    if (Number(ctrl.value) === 101) {
      return null;
    } else {
      return { unique: true };
    }
  }

  static startWithUpperCase(ctrl: AbstractControl): any {
    const regex = /^[A-Z].*$/.test(ctrl.value);
    console.log('regex is' + regex);
    if (regex) {
      return null;
    } else {
      return { upperCase: false };
    }
  }
}
