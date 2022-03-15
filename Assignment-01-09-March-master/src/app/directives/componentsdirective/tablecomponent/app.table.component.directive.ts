import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { EmployeeType } from 'src/app/models/app.constants';
import { Employee } from 'src/app/models/app.employee.model';

@Component({
  selector: 'app-table-ui',
  templateUrl: './app.table.component.directive.view.html',
})
export class TableComponent implements OnInit {
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  emp: Employee;
  _DataSource: Array<any>;
  selValue: any;
  @Output()
  onValueSelected: EventEmitter<any> = new EventEmitter();
  //canSort: boolean ;
  // @Input()
  _canSort: boolean = true;

  constructor() {
    this.emp = new Employee(0, '', 0, '');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addRow() {
    this.newAttribute = new Employee(0, '', 0, '');
    this.fieldArray.push(this.newAttribute);
    console.log(`Field ${this.fieldArray}`);
  }

  deleteRow(index: number): boolean {
    this.fieldArray.splice(index, 1);
    return true;
  }
  a = true;
  // <app-select-ui [DataSource]="VALUE-FROM-PARENT"/>
  @Input()
  set DataSource(val:any){
    this._DataSource = val;
  }
  get DataSource():Array<any>{
    return this._DataSource;
  }

  @Input()
  set canSort(val:any) {
    this._DataSource = val;


    console.log('In sort data ' + this._DataSource +" sorti"+ this.canSort);
    if (!this._canSort) {
      let newarr = this._DataSource.sort((a, b) => a.EmployeeId - b.EmployeeId);
      this._DataSource = newarr;
      console.log("1"+this._DataSource);
    } else {
      let newarr = this._DataSource.sort((a, b) => b.EmployeeId - a.EmployeeId);
      this._DataSource = newarr;
      console.log("2"+this._DataSource);
    }
    this.canSort = !this.canSort;
  }
  get canSort(): Array<any> {
    return this._DataSource;
  }
  // <app-select-ui (onValueSelected)="METHOD-FROM-PARENT($event)">
  getSelectedValue(val: any): void {
    // EMit the data
    console.log('get selected'+val);

    this.onValueSelected.emit(val);
  }
}
