import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'class',
  templateUrl:'class.component.html'
})
export  class ClassComponent {
  onactive() {
    window.scroll(0, 0)
  }

  class: any[] = [
    {tenvideo: 1},
  ];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.classcount();
  }

  classcount() {
    const url = 'http://localhost:3950/nhom6_class'
    this.http.get<any>(url)
      .subscribe(data => {
        this.class = data;
      })
  }
}
