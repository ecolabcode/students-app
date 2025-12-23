import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDTO } from '../../../core/models/student.dto';
import { StudentsService } from '../../../core/services/students.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  students$: Observable<StudentDTO[]> = this.studentsService.getStudents();
  constructor(private studentsService: StudentsService) {}
}
