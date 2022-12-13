import {Component} from "@angular/core";
@Component({
  selector:'classclimb',
  templateUrl:'classclimb.component.html'
})
export  class ClassclimbComponent{
  onactive() {
    window.scroll(0,0)
  }
}
