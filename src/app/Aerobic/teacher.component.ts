import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'teacher',
  templateUrl:'teacher.component.html'
})
export  class TeacherComponent{
  onactive() {
    window.scroll(0,0)
  }
  teacher: any[] = [
    {tenteacher: 1},
  ];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.teachercount();
  }

  teachercount() {
    const url = 'http://localhost:3950/nhom6_teacher'
    this.http.get<any>(url)
      .subscribe(data => {
        this.teacher = data;
      })
  }
}
