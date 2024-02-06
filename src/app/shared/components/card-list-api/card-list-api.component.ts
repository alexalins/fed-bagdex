import { AfterViewChecked, Component, EventEmitter, Input, Output } from '@angular/core';
import { FiltroPorNomePipe } from '../../pipes/filtro-por-nome.pipe';
import { PokemonApiResponse } from '../../model/response/pokemonApi';
import { environment } from 'src/environments/environment';


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
  urlAtual: string = '';

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
      this.urlAtual = this.urlProximo;
      return;
    }

    this.onAlert.emit({url: this.urlAnterior});
    this.urlAtual = this.urlAnterior;
  }

  buscarPorNome() {
    this.onAlert.emit({nome: `${this.filtro.toLowerCase()}`});
  }

  verificarFiltro() {
    if (this.filtro === '') {
      let url = this.urlAtual ? this.urlAtual : environment.apiPoke;
      this.onAlert.emit({url: url});
    }
  }
}
