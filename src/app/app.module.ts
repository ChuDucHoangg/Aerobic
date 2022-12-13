import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TiviComponent} from "./Aerobic/tivi.component";
import {HomeComponent} from "./Aerobic/home.component";
import {ClassComponent} from "./Aerobic/class.component";
import {ClassheatupComponent} from "./Aerobic/classheatup.component";
import {ClassenduranceComponent} from "./Aerobic/classendurance.component";
import {ClassmeditainComponent} from "./Aerobic/classmeditain.component";
import {ClasspowerComponent} from "./Aerobic/classpower.component";
import {ClassheavyComponent} from "./Aerobic/classheavy.component";
import {ClassdanceComponent} from "./Aerobic/classdance.component";
import {TeacherComponent} from "./Aerobic/teacher.component";
import {TeachercrossComponent} from "./Aerobic/teachercross.component";
import {TeacherdavidComponent} from "./Aerobic/teacherdavid.component";
import {BookComponent} from "./Aerobic/book.component";
import {CourseComponent} from "./Aerobic/course.component";
import {ContactComponent,} from "./Aerobic/contact.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {TeacherwillComponent} from "./Aerobic/teacherwill.component";
import {TeacherconhillComponent} from "./Aerobic/teacherconhill.component";
import {TeacherconbruceComponent} from "./Aerobic/teacherconbruce.component";
import {TeacherconzahraComponent} from "./Aerobic/teacherconzahra.component";
import {TeacherconruthComponent} from "./Aerobic/teacherconruth.component";
import {TeachermannyComponent} from "./Aerobic/teachermanny.component";
import {TeacherconjohnComponent} from "./Aerobic/teacherconjohn.component";
import {TeacherconkateComponent} from "./Aerobic/teacherconkate.component";
import {TeacherconantonyComponent} from "./Aerobic/teacherconantony.component";
import {ClassstepComponent} from "./Aerobic/classstep.component";
import {ClassrunComponent} from "./Aerobic/classrun.component";
import {ClassbalanceComponent} from "./Aerobic/classbalance.component";
import {ClassjumComponent} from "./Aerobic/classjum.component";
import {ClasshipComponent} from "./Aerobic/clasship.component";
import {ClasskickComponent} from "./Aerobic/classkick.component";
import {ClassheelComponent} from "./Aerobic/classheel.component";
import {ClassjackComponent} from "./Aerobic/classjack.component";
import {ClasshightComponent} from "./Aerobic/classhight.component";
import {ClasssquatComponent} from "./Aerobic/classsquat.component";
import {ClassclimbComponent} from "./Aerobic/classclimb.component";
import {ClassburpeComponent} from "./Aerobic/classburpe.component";
import {ClasssupiComponents} from "./Aerobic/classsupi.component";
import {ClassjackstepComponent} from "./Aerobic/classjackstep.component";
import {ClassbendComponent} from "./Aerobic/classbend.component";
import {ClasscardioComponent} from "./Aerobic/classcardio.component";
import {ClassplanComponent} from "./Aerobic/classplan.component";
import {ClasszumbaComponent} from "./Aerobic/classzumba.component";
import {ClasslegsComponent} from "./Aerobic/classlegs.component";
import {ClasstuckComponent} from "./Aerobic/classtuck.component";
import {Book2Component} from "./Aerobic/book-2.component";
import {CourseadvandComponent} from "./Aerobic/courseadvand.component";
import {CourseleaderComponent} from "./Aerobic/courseleader.component";

const appRoutes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'tivi',component:TiviComponent},
  {path:'class',component:ClassComponent},
  {path:'classheatup',component:ClassheatupComponent},
  {path:'classendurance',component:ClassenduranceComponent},
  {path:'classmeditain',component:ClassmeditainComponent},
  {path:'classpower',component:ClasspowerComponent},
  {path:'classheavy',component:ClassheavyComponent},
  {path:'classdance',component:ClassdanceComponent},
  {path:'classstep',component:ClassstepComponent},
  {path:'classrun',component:ClassrunComponent},
  {path:'classbalance',component:ClassbalanceComponent},
  {path:'classjum',component:ClassjumComponent},
  {path:'clasship',component:ClasshipComponent},
  {path:'classkick',component:ClasskickComponent},
  {path:'classheel',component:ClassheelComponent},
  {path:'classjack',component:ClassjackComponent},
  {path:'classhight',component:ClasshightComponent},
  {path:'classsquat',component:ClasssquatComponent},
  {path:'classclimb',component:ClassclimbComponent},
  {path:'classburpe',component:ClassburpeComponent},
  {path:'classsupi',component:ClasssupiComponents},
  {path:'classjackstep',component:ClassjackstepComponent},
  {path:'classbend',component:ClassbendComponent},
  {path:'classcardio',component:ClasscardioComponent},
  {path:'classplan',component:ClassplanComponent},
  {path:'classzumba',component:ClasszumbaComponent},
  {path:'classlegs',component:ClasslegsComponent},
  {path:'classtuck',component:ClasstuckComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'teachercross',component:TeachercrossComponent},
  {path:'teacherdavid',component:TeacherdavidComponent},
  {path:'teacherwill',component:TeacherwillComponent},
  {path:'teacherconhill',component:TeacherconhillComponent},
  {path:'teacherconbruce',component:TeacherconbruceComponent},
  {path:'teacherconzahra',component:TeacherconzahraComponent},
  {path:'teacherconruth',component:TeacherconruthComponent},
  {path:'teachermanny',component:TeachermannyComponent},
  {path:'teacherconjohn',component:TeacherconjohnComponent},
  {path:'teacherconkate',component:TeacherconkateComponent},
  {path:'teacherconantony',component:TeacherconantonyComponent},
  {path:'book',component:BookComponent},
  {path:'book-2',component:Book2Component},
  {path:'course',component:CourseComponent},
  {path:'courseadvand',component:CourseadvandComponent},
  {path:'courseleader',component:CourseleaderComponent},
  {path:'contact',component:ContactComponent},


];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ClassComponent,TeacherComponent,BookComponent,CourseComponent,ContactComponent,TiviComponent,
    ClassheatupComponent,ClassenduranceComponent,ClassmeditainComponent,ClasspowerComponent,ClassheavyComponent,ClassdanceComponent,
    TeachercrossComponent,TeacherdavidComponent,TeacherwillComponent,TeacherconhillComponent,TeacherconbruceComponent,TeacherconzahraComponent,
    TeacherconruthComponent,TeachermannyComponent,TeacherconjohnComponent,TeacherconkateComponent,TeacherconantonyComponent,
    ClassstepComponent,ClassrunComponent,ClassbalanceComponent,ClassjumComponent,ClasshipComponent,ClasskickComponent,ClassheelComponent,
    ClassjackComponent,ClasshightComponent,ClasssquatComponent,ClassclimbComponent,ClassburpeComponent,ClasssupiComponents,ClassjackstepComponent,
    ClassbendComponent,ClasscardioComponent,ClassplanComponent,ClasszumbaComponent,ClasslegsComponent,ClasstuckComponent,Book2Component,
    CourseadvandComponent,CourseleaderComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    HttpClientModule, RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
