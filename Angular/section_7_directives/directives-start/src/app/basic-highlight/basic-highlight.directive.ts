//Defining custom directive
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]", //select by attribute
})
export class BasicHighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    //not a good practice to directly access element like this
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
