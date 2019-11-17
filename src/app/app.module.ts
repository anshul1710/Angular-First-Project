import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {StudentService} from './student.service';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
