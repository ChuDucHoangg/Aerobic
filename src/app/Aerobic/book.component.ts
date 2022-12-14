import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'book',
  templateUrl:'book.component.html'
})
export  class BookComponent{
  onactive() {
    window.scroll(0,0)
  }

  book: any[] = [
    {tenbook: 1},
  ];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.bookcount();
  }

  bookcount() {
    const url = 'http://localhost:3950/nhom6_book'
    this.http.get<any>(url)
      .subscribe(data => {
        this.book = data;
      })
  }

}
