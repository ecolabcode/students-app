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
  selector: 'app-general-results',
  templateUrl: './general-results.component.html',
  styleUrls: ['./general-results.component.css'],
})
export class GeneralResultsComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) students!: StudentDTO[];
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  private chart?: Chart;

  ngAfterViewInit(): void {
    const aprobados = this.students.filter((s) => s.notaFinal >= 5).length;
    const suspendidos = this.students.filter((s) => s.notaFinal < 5).length;

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Aprobados', 'Suspendidos'],
        datasets: [{ label: 'Resultados', data: [aprobados, suspendidos] }],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
