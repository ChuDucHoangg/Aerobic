import {Component} from "@angular/core";
@Component({
  selector:'classplan',
  templateUrl:'classplan.component.html'
})
export  class ClassplanComponent{
  onactive() {
    window.scroll(0,0)
  }
}
