import {Component} from "@angular/core";
@Component({
  selector:'classtuck',
  templateUrl:'classtuck.component.html'
})
export  class ClasstuckComponent{
  onactive() {
    window.scroll(0,0)
  }
}
