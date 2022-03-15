import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/app.utility.service';

@Component({
  selector: 'app-utilityservice-component',
  template: ``,
})

export class UtilityServiceComponent implements OnInit {
  length: number;
  upperCase:string;
  lowerCase:string;
  constructor(private serve:UtilityService) { }

  ngOnInit() { }
}
