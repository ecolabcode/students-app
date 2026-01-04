import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Observable, map, shareReplay } from 'rxjs';
import { StudentDTO } from '../models/student.dto';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private readonly csvUrl = 'assets/notas_alumnos-1.csv';

  constructor(private http: HttpClient, private papa: Papa) {}

  private pick(row: any, key: string): string {
    const v = row?.[key];
    return v !== undefined && v !== null ? String(v).trim() : '';
  }

  private toNumber(value: string): number {
    const n = parseFloat(value);
    return Number.isFinite(n) ? n : 0;
  }

  private readonly students$ = this.http
    .get(this.csvUrl, { responseType: 'text' })
    .pipe(
      map((csvText) => {
        const parsed = this.papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          delimiter: ',',
          quoteChar: '"',
          transformHeader: (h) => h.replace('\uFEFF', '').trim(),
        });

        const rows = parsed.data as any[];

        console.log('FIELDS:', parsed.meta.fields);
        console.log('ROW 0:', rows[0]);
        console.log('Nota_Final ROW 0:', rows[0]?.['Nota_Final']);

        return rows
          .map((row) => ({
            id: this.toNumber(this.pick(row, 'ID_Alumno')),
            nombre: this.pick(row, 'Nombre'),
            apellidos: this.pick(row, 'Apellidos'),
            sexo: this.pick(row, 'Sexo') as any,
            notaFinal: this.toNumber(this.pick(row, 'Nota_Final')),
            faltas: this.toNumber(this.pick(row, 'Faltas_Asistencia')),
          }))
          .filter((s) => s.id !== 0);
      }),
      shareReplay(1)
    );

  getStudents(): Observable<StudentDTO[]> {
    return this.students$;
  }
}
