import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})

export class UtilityService{

  getLength(str:string):number{
    return str.length;
  }
  changeCase(str:string,c:string):string{
    if(c === 'l' || c==='L') return str.toLowerCase();
    if(c === 'u' || c==='U') return str.toUpperCase();
    return str;
  }
}
