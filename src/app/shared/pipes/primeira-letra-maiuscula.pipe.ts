import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiraLetraMaiuscula'
})
export class PrimeiraLetraMaiusculaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(!value || value == '') {
      return '';
    }
    return value.charAt(0).toUpperCase() + value.slice(1);;
  }

}
