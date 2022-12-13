import {Component} from "@angular/core";
@Component({
  selector:'classheel',
  templateUrl:'classheel.component.html'
})
export  class ClassheelComponent{
  onactive() {
    window.scroll(0,0)
  }
}
