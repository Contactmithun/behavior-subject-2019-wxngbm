import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice';

@Component({
  selector: 'my-sibling',
  template:
  `
  <div style="background:lightcoral">
  Message: {{message}} <button (click)="newMessage()">change message</button>
  </div>
  `
})
export class SiblingComponent implements OnInit {

message:string;

  constructor(private myService: MyService) {}

  ngOnInit() {
        this.myService.currentMessage.subscribe(message=> this.message = message)
   }

       newMessage() {
    this.myService.changeMessage("Hello from sibling")
  }
}
