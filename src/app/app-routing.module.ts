import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentComponent} from './student/student.component';


const routes: Routes = [
  { path : '', redirectTo: '/students', pathMatch: 'full'},
  { path : 'students', component: StudentComponent},
  {
    path: 'students/:id', component: StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
