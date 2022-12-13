import {Component} from "@angular/core";
@Component({
  selector:'classpower',
  templateUrl:'classpower.component.html'
})
export  class ClasspowerComponent{
  onactive() {
    window.scroll(0,0)
  }
}
