import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonApiResponse } from '../../model/response/pokemonAPi';
import { FiltroPorNomePipe } from '../../pipes/filtro-por-nome.pipe';

@Component({
  selector: 'app-card-list-api',
  templateUrl: './card-list-api.component.html',
  styleUrls: ['./card-list-api.component.css'],
})
export class CardListApiComponent implements AfterViewChecked {
  @Input() listaPokemon: PokemonApiResponse[] = [];
  @Input() urlProximo: string = '';
  @Input() urlAnterior: string = '';
  //
  @Output() public onAlert = new EventEmitter();
  //
  listaPokemonAux: PokemonApiResponse[] = [];
  filtro: string = '';

  constructor(private pipeFiltro: FiltroPorNomePipe) {}

  ngAfterViewChecked() {
    if (this.listaPokemon.length) {
      this.listaPokemonAux = this.pipeFiltro.transform(
        this.listaPokemon,
        this.filtro
      );
    }
  }

  mudarPagina(isProx: boolean) {
    if(isProx)  {
      this.onAlert.emit({url: this.urlProximo});
      return;
    }

    this.onAlert.emit({url: this.urlAnterior});
  }
}
