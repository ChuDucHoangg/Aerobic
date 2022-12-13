import {Component} from "@angular/core";
@Component({
  selector:'book-2',
  templateUrl:'book-2.component.html'
})
export  class Book2Component{
  onactive() {
    window.scroll(0,0)
  }
}
