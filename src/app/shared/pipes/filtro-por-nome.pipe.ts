import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorNome'
})
export class FiltroPorNomePipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter(item =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
