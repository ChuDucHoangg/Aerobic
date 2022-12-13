import {Component} from "@angular/core";
@Component({
  selector:'classrun',
  templateUrl:'classrun.component.html'
})
export  class ClassrunComponent{
  onactive() {
    window.scroll(0,0)
  }
}
