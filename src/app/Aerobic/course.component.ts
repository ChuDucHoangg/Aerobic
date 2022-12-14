import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'course',
  templateUrl:'course.component.html'
})
export  class CourseComponent{
  onactive() {
    window.scroll(0,0)
  }

  course: any[] = [
    {tencourse: 1},
  ];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.coursecount();
  }

  coursecount() {
    const url = 'http://localhost:3950/nhom6_course'
    this.http.get<any>(url)
      .subscribe(data => {
        this.course = data;
      })
  }
}
