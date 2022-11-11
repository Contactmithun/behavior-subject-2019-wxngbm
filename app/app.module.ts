import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './summary/child.component'
import { SiblingComponent } from './sibling.component'
import { AppComponent } from './app.component';
import { MyService } from './myservice';
import { SecondchildComponent} from './child-summary/secondchild.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent, SiblingComponent, SecondchildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MyService, SecondchildComponent]
})
export class AppModule { }
