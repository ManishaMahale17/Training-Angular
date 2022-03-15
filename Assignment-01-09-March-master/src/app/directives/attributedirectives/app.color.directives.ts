import { Directive, ElementRef, Input, Renderer2, HostListener } from "@angular/core";


// the attribute directive is used for property biniding
//so set the selectore as a s syntax of property biniding

//[]

@Directive({
  selector:'[setColor]'
})
export class ColorDirectives{
  //define @input decorated property, map this preoprty with the selector name

  @Input('setColor')
  setColor:string;
  // define a constrtuuctor and inject it with following classes:
  // 1. ElementRef: The HTML element on which directive is applied
  //2.Renderer2: new rendering for HTML element
  // instance of these classes will be resolved bu BrowserModule


  constructor(private ele:ElementRef,private renderer:Renderer2){
    this.setColor = "";
  }

  //private method
  applyColors(color:string):void{
    //update the style of HTML elements
    this.renderer.setStyle(this.ele.nativeElement,"backgroundColor",color);
  }




  // define public methods those will be use to execute the Business Logic
  // for the directive when an event occurs

  //apply host listener directive on business method
  // so that they will be executed when an event is raised on HTML elemnet where
  // the directive is applied
  //The HostListener will accept JS event

  @HostListener("mouseenter")
  onmouseenter(){
    this.applyColors(this.setColor)
  }
  @HostListener("mouseleave")
  onmouseleave(){
    this.applyColors("");
  }
  @HostListener("change")
  onchange(event:any){
    if(event.target.value===200){
      this.applyColors(this.setColor);
    }

  }


}
