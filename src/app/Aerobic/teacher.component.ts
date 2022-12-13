import {Component} from "@angular/core";
@Component({
  selector:'teacher',
  templateUrl:'teacher.component.html'
})
export  class TeacherComponent{
  onactive() {
    window.scroll(0,0)
  }
}
