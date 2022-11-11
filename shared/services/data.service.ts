import { Injectable, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/from';

@Injectable()
export class DataService{
  // onGetData:EventEmitter<T> = new EventEmitter();

private messageSource = new BehaviorSubject<string>("default message");
currentMessage = this.messageSource.asObservable();


  constructor(http: XMLHttpRequest) {
  }

// getData() {
//   this.http.post(...params).map(res => {
//     this.onGetData.emit(res.json());
//   })

// }
}