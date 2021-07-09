import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-gamecontrol",
  templateUrl: "./gamecontrol.component.html",
  styleUrls: ["./gamecontrol.component.css"],
})
export class GamecontrolComponent implements OnInit {
  number = 0;
  interval;
  @Output() incrementingNumber = new EventEmitter<number>();
  constructor() {}
  ngOnInit(): void {}

  startGame() {
    this.interval = setInterval(() => {
      this.incrementingNumber.emit(this.number);
      this.number += 1;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
