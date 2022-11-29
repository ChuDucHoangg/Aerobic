import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./Aerobic/home.component";
import {ClassComponent} from "./Aerobic/class.component";
import {TeacherComponent} from "./Aerobic/teacher.component";
import {BookComponent} from "./Aerobic/book.component";
import {CourseComponent} from "./Aerobic/course.component";
import {PolicyComponent} from "./Aerobic/policy.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'class',component:ClassComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'book',component:BookComponent},
  {path:'course',component:CourseComponent},
  {path:'policy',component:PolicyComponent},


];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ClassComponent,TeacherComponent,BookComponent,CourseComponent,PolicyComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
