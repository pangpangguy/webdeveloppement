import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  //Define events with Event Emitter
  //EventEmitter is an Angular object that lets us emit our own events
  //@Output() to pass events to parent component.

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //Updated by input
  newServerName = "";
  newServerContent = "";

  constructor() {}
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  //Using local ref and without 2way binding
  //#serverContentInput defined in the html will update the variable here
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  onAddServerHash(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  ngOnInit(): void {}
}
