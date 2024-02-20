import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'botao-flutuante',
  templateUrl: './botao-flutuante.component.html',
  styleUrls: ['./botao-flutuante.component.css']
})
export class BotaoFlutuanteComponent {

  @Input() tipo: string = '';
  @Input() id: number = 0;
  //
  @Output() onClickSalvarPokemon = new EventEmitter();
  @Output() onClickDeletarPokemon = new EventEmitter();


  clickSalvarPokemon(){
    this.onClickSalvarPokemon.emit();
  }

  clickDeletarPokemon(){
    this.onClickDeletarPokemon.emit();
  }
}
