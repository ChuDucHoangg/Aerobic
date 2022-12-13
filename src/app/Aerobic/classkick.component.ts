import {Component} from "@angular/core";
@Component({
  selector:'classkick',
  templateUrl:'classkick.component.html'
})
export  class ClasskickComponent{
  onactive() {
    window.scroll(0,0)
  }
}
