import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice';

import { SecondchildComponent } from './child-summary/secondchild.component';

@Component({
  selector: 'my-app',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit  {

dataFromChild:string;

message:string;

  constructor(private myService: MyService, public secondchild:SecondchildComponent) {
    this.dataFromChild = secondchild.someData;
  }

  ngOnInit(): void{
        this.myService.currentMessage.subscribe(message=> this.message = message)
        console.log(this.dataFromChild);
  }

    newMessage() {
    this.myService.changeMessage("Hello from parent component")
  }



}
