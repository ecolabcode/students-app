import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { StudentDTO } from '../../../core/models/student.dto';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css'],
})
export class GenderComponent implements AfterViewInit {
  @Input({ required: true }) students!: StudentDTO[];
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  male = 0;
  female = 0;

  ngAfterViewInit(): void {
    this.male = this.students.filter((s) => s.sexo === 'M').length;
    this.female = this.students.filter((s) => s.sexo === 'F').length;

    new Chart(this.canvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['M', 'F'],
        datasets: [{ label: 'Sexo', data: [this.male, this.female] }],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  trackById = (_: number, s: StudentDTO) => s.id;
}
