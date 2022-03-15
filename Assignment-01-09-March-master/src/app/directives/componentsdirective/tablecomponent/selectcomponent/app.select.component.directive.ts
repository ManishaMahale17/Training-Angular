
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-ui',
  templateUrl: './app.select.component.directive.view.html'
})

export class SelectComponent implements OnInit {
  _DataSource:Array<any>;
  selValue:any;
  @Output()
  onValueSelected:EventEmitter<any>;

  constructor() {
    this._DataSource = new Array<any>();
    this.onValueSelected = new EventEmitter<any>();
    this.selValue = "";
  }

  // <app-select-ui [DataSource]="VALUE-FROM-PARENT"/>
  @Input()
  set DataSource(val:Array<any>){
    this._DataSource = val;
  }
  get DataSource():Array<any>{
    return this._DataSource;
  }

  // <app-select-ui (onValueSelected)="METHOD-FROM-PARENT($event)">
  getSelectedValue(val:any):void{
    // EMit the data
    this.onValueSelected.emit(val);
  }


  ngOnInit() { }
}
