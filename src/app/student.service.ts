import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentClass} from './StudentClass';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private url = '/assets/data/studentDetails.json';
  constructor(private http: HttpClient) { }

  getStudents(): Observable<StudentClass[]> {
      return this.http.get<StudentClass[]>(this.url);
  }
  getStudent(id: number): Observable<StudentClass[]> {
    return this.http.get<StudentClass[]>(this.url);
  }
}
