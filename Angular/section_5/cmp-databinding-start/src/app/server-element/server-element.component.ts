import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string; name: string; content: string };
  //Optional: @Input('alias') to provide other name. The alias must be used in the parent component!
  constructor() {}

  ngOnInit(): void {}
}
