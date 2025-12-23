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
  selector: 'app-general-results',
  templateUrl: './general-results.component.html',
  styleUrls: ['./general-results.component.css'],
})
export class GeneralResultsComponent implements AfterViewInit {
  @Input({ required: true }) students!: StudentDTO[];
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  aprobados = 0;
  suspendidos = 0;

  ngAfterViewInit(): void {
    this.aprobados = this.students.filter((s) => s.notaFinal >= 5).length;
    this.suspendidos = this.students.filter((s) => s.notaFinal < 5).length;

    new Chart(this.canvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Aprobados', 'Suspendidos'],
        datasets: [
          { label: 'Resultados', data: [this.aprobados, this.suspendidos] },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  trackById = (_: number, s: StudentDTO) => s.id;
}
