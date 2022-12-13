import {Component} from "@angular/core";
@Component({
  selector:'courseleader',
  templateUrl:'courseleader.component.html'
})
export  class CourseleaderComponent{
  onactive() {
    window.scroll(0,0)
  }
}
