import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
subText = ''; 
mainText = ''; 
operand1: number; 
operand2: number; 
operator = ''; 
calculationString = ''; 
// This is the string that denotes the operation being performed
answered = false; 
// A flag to check whether the solution has been processed
operatorSet = false; 

constructor() {
  this.operand1 = 0;
  this.operand2 = 0;
}

pressKey(key: string) {
  if (key === '/' || key === 'x' || key === '-' || key === '+') {
     const lastKey = this.mainText[this.mainText.length - 1];
     if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
       this.operatorSet = true;
     }
     if ((this.operatorSet) || (this.mainText === '')) {
       return;
     }
     this.operand1 = parseFloat(this.mainText);
     this.operator = key;
     this.operatorSet = true;
  }
  if (this.mainText.length === 10) {
    return;
  }
  this.mainText += key;
}


getAnswer() {
  this.calculationString = this.mainText;
  this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
  if (this.operator === '/') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 / this.operand2).toString();
    this.subText = this.calculationString
    if (this.mainText.length > 9) {
      this.mainText = this.mainText.substr(0, 9);
    }
  } else if (this.operator === 'x') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 * this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else if (this.operator === '-') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 - this.operand2).toString();
    this.subText = this.calculationString;
  } else if (this.operator === '+') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 + this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else if (this.operator === '^') {
    this.subText = this.mainText;
    this.mainText = Math.pow(this.operand1,this.operand2).toString();
    this.subText = this.calculationString;
  } else {
    this.subText = 'ERROR: Invalid Operation';
  }
  this.answered = true;
}

allClear() {
  this.subText = ''; 
this.mainText = '';
this.operatorSet = false
}

squareRoot(){
  this.calculationString = this.mainText;
  this.subText = this.mainText;
  this.mainText = Math.sqrt(parseInt(this.subText)).toString();
  this.subText = this.calculationString;
}

}