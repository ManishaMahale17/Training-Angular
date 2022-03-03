import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkbox';
  name = 'Angular';
  isMasterSel:boolean;
  courseList:any;
  checkCourseList:any;
  
  constructor(){
      this.isMasterSel = false;
  
      this.courseList = [
      {CourseName: "JavaScript", Fees:20000} ,
      {CourseName: "Angular", Fees:30000},
      {CourseName: "React", Fees:40000},
      {CourseName: "Node.js", Fees:60000},
      {CourseName: "VueJS", Fees:80000}
    ];
  
      this.getCheckedItemList();
  }
  
  checkUncheckAll() {
    for (var i = 0; i < this.courseList.length; i++) {
      this.courseList[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }
   
  isAllSelected() {
    this.isMasterSel = this.courseList.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
  
  getCheckedItemList(){
    this.checkCourseList = [];
    for (var i = 0; i < this.courseList.length; i++) {
      if(this.courseList[i].isSelected)
      this.checkCourseList.push(this.courseList[i]);
    }
    this.checkCourseList = JSON.stringify(this.checkCourseList);
  }
}
  

