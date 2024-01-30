import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import { PokemonApiResponse } from '../../model/response/pokemonAPi';
import { FiltroPorNomePipe } from '../../pipes/filtro-por-nome.pipe';

@Component({
  selector: 'app-card-list-api',
  templateUrl: './card-list-api.component.html',
  styleUrls: ['./card-list-api.component.css'],
})
export class CardListApiComponent implements AfterViewInit {
  @Input() listaPokemon: PokemonApiResponse[] = [];
  listaPokemonAux: PokemonApiResponse[] = [];
  filtro: string = '';

  constructor(private pipeFiltro: FiltroPorNomePipe) {}

  ngAfterViewInit() {
    if (this.listaPokemon.length) {
      console.log(this.listaPokemon)
      this.listaPokemonAux = this.pipeFiltro.transform(
        this.listaPokemon,
        this.filtro
      );
    }
  }
}
