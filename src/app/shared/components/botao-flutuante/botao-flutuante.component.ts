import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'botao-flutuante',
  templateUrl: './botao-flutuante.component.html',
  styleUrls: ['./botao-flutuante.component.css']
})
export class BotaoFlutuanteComponent {

  @Input() tipo: string = '';
}
