import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //Or template: <Directly insert HTML code>
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  //Constructr is executed when component is created by Angular
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = '';
  serverCreated = false;
  servers = ['Test 1', 'Test 2', 'Test 3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  ngOnInit(): void {}
}
