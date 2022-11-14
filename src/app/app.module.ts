import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./Aerobic/home.component";
import {ClassComponent} from "./Aerobic/class.component";
import {TeacherComponent} from "./Aerobic/teacher.component";



@NgModule({
  declarations: [
    AppComponent,HomeComponent,ClassComponent,TeacherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
