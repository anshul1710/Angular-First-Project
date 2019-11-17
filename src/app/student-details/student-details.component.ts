import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  private studentId;
  private student = [];
  constructor(private route: ActivatedRoute, private router: Router, private studDetails: StudentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.studentId = id;
    });
  }
  gotoStudents() {
    let selectedId = this.studentId ? this.studentId : null;
    this.router.navigate(['../', {id : selectedId}],  {relativeTo: this.route});
  }

}
