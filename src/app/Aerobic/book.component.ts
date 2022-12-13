import {Component} from "@angular/core";
@Component({
  selector:'book',
  templateUrl:'book.component.html'
})
export  class BookComponent{
  onactive() {
    window.scroll(0,0)
  }
}
