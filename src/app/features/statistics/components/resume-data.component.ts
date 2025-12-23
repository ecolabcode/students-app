import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { StudentDTO } from '../../../core/models/student.dto';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css'],
})
export class ResumeDataComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) students!: StudentDTO[];
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  total = 0;
  aprobados = 0;
  suspendidos = 0;

  private chart?: Chart;

  ngAfterViewInit(): void {
    this.total = this.students.length;
    this.aprobados = this.students.filter((s) => s.notaFinal >= 5).length;
    this.suspendidos = this.students.filter((s) => s.notaFinal < 5).length;

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Total', 'Aprobados', 'Suspendidos'],
        datasets: [
          {
            label: 'Resumen',
            data: [this.total, this.aprobados, this.suspendidos],
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
