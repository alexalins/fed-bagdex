import { Component, Input } from '@angular/core';

@Component({
  selector: 'aviso-lista-vazia',
  templateUrl: './aviso-lista-vazia.component.html',
  styleUrls: ['./aviso-lista-vazia.component.css']
})
export class AvisoListaVaziaComponent {

  caminhoImagem: string = '../../../../assets/image/pikachu-search.png';
  @Input() mensagem: string = '';
  @Input() css?: boolean = false;
}
