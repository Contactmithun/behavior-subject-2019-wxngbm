import { Component, OnInit } from '@angular/core';
import { MyService } from './../myservice';

@Component({
  selector: 'summary',
  templateUrl:'child.component.html'
})
export class ChildComponent implements OnInit {

message:string= 'valid';

  constructor(private myService: MyService) {}

  ngOnInit() { 
    this.myService.currentMessage.subscribe(message=> this.message = message)

  }

  newMessage() {
    this.myService.changeMessage("Hello from summary component")
  }


}
