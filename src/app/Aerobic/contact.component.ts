import {Component} from "@angular/core";
@Component({
  selector:'contact',
  templateUrl:'contact.component.html'
})
export  class ContactComponent{
  onactive() {
    window.scroll(0,0)
  }
}
