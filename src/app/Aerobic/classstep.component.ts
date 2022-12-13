import {Component} from "@angular/core";
@Component({
  selector:'classstep',
  templateUrl:'classstep.component.html'
})
export  class ClassstepComponent{
  onactive() {
    window.scroll(0,0)
  }
}
