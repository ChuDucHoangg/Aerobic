import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TiviComponent} from "./Aerobic/tivi.component";
import {HomeComponent} from "./Aerobic/home.component";
import {ClassComponent} from "./Aerobic/class.component";
import {TeacherComponent} from "./Aerobic/teacher.component";
import {BookComponent} from "./Aerobic/book.component";
import {CourseComponent} from "./Aerobic/course.component";
import {ContactComponent,} from "./Aerobic/contact.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";

const appRoutes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'tivi',component:TiviComponent},
  {path:'class',component:ClassComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'book',component:BookComponent},
  {path:'course',component:CourseComponent},
  {path:'contact',component:ContactComponent},


];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ClassComponent,TeacherComponent,BookComponent,CourseComponent,ContactComponent,TiviComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    HttpClientModule, RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
