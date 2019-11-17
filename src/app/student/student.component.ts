import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  private students = [];
  public selectedId;
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.students = data);
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(stud) {
    this.router.navigate([stud.id], {relativeTo: this.route});
  }
  isSelected(stud) {
    return stud.id === this.selectedId;
  }

}
