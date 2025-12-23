import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDTO } from '../../../core/models/student.dto';
import { StudentsService } from '../../../core/services/students.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
    `
      .viewport {
        height: 500px;
        border: 1px solid #ddd;
      }
      .row {
        display: flex;
        gap: 12px;
        padding: 10px;
        border-bottom: 1px solid #eee;
      }
      .cell {
        width: 180px;
      }
    `,
  ],
})
export class ListPageComponent {
  students$: Observable<StudentDTO[]> = this.studentsService.getStudents();
  constructor(private studentsService: StudentsService) {}

  trackById = (_: number, s: StudentDTO) => s.id;
}
