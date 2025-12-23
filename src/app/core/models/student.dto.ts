export type Gender = 'M' | 'F';

export interface StudentDTO {
  id: number; // ID_Alumno
  nombre: string; // Nombre
  apellidos: string; // Apellidos
  sexo: Gender; // Sexo
  notaFinal: number; // Nota_final
  faltas: number; // Faltas_Asistencia
}
