import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiraLetraMaiuscula'
})
export class PrimeiraLetraMaiusculaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.charAt(0).toUpperCase() + value.slice(1);;
  }

}
