import {Component} from "@angular/core";
@Component({
  selector:'home',
  templateUrl:'home.component.html'
})
export  class HomeComponent{
  onactive() {
    window.scroll(0,0)
  }
}
