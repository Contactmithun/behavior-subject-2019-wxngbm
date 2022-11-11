import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyService } from './../myservice';

@Component({
  selector: 'child-summary',
  templateUrl: 'secondchild.component.html',
})
export class SecondchildComponent implements OnInit {
  someData: string = 'hello from child summary';

  message: string = 'secondChild';

  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private myService: MyService) {}

  ngOnInit() {
     this.myService.currentMessage.subscribe(message=> this.message = message)
  }

  public pickDate(date: any): void {
    this.onDatePicked.emit(date);
  }

  newMessage() {
    this.myService.changeMessage(`Hello from child summary component`);
    // this.myService.changeMessage(`Hello from ${this.message}`)
  }
}
