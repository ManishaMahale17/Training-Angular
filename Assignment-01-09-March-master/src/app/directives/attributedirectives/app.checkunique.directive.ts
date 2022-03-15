import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { Employee } from 'src/app/models/app.employee.model';
import { EmployeeLogic } from 'src/app/models/app.logic';

@Directive({
  selector: '[checkUnique]',
})
export class CheckUniqueDirective {
  @Input('checkUnique')
  checkUnique: number;
  emp: EmployeeLogic;

  constructor(private ele: ElementRef, private renderer: Renderer2) {
    this.checkUnique = 0;
    this.emp = new EmployeeLogic();
  }

  applyChanges(): void {
    console.log(this.checkUnique);
    this.emp.getEmployees().filter((emp2) => {
      console.log(typeof this.checkUnique);
      return emp2.EmployeeId === this.checkUnique;
    });

    if (
      this.emp
        .getEmployees()
        .filter((emp2) => emp2.EmployeeId === Number(this.checkUnique)).length >
      0
    ) {
      console.log('here');

      this.renderer.setStyle(this.ele.nativeElement, 'borderColor', 'red');
    } else {
      this.renderer.setStyle(this.ele.nativeElement, 'borderColor', '');
    }
  }

  @HostListener('change')
  onchange() {
    console.log(this.checkUnique);

    this.applyChanges();
  }
}
