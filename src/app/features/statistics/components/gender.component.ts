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
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css'],
})
export class GenderComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) students!: StudentDTO[];
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  private chart?: Chart;

  ngAfterViewInit(): void {
    const male = this.students.filter((s) => s.sexo === 'M').length;
    const female = this.students.filter((s) => s.sexo === 'F').length;

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['M', 'F'],
        datasets: [{ label: 'Sexo', data: [male, female] }],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
