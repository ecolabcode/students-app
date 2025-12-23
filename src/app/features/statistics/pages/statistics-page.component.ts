import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDTO } from '../../../core/models/student.dto';
import { StudentsService } from '../../../core/services/students.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css'],
})
export class StatisticsPageComponent {
  students$: Observable<StudentDTO[]> = this.studentsService.getStudents();
  constructor(private studentsService: StudentsService) {}
}
