import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' }) // Decorador
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    let minutes: number = Math.floor(value / 60000); // Cálculo de los minutos
    let seconds: number = Math.floor((value % 60000) / 1000); // Cálculo de los segundos
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Formato de salida en formato "mm:ss"
  }
}
