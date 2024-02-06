import { DataUtil } from 'src/app/shared/utils/dataUtil';
import { Component, Input} from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { environment } from 'src/environments/environment';
import { PokemonApiResponse } from '../../model/response/pokemonApi';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent {
  @Input() pokemon?: Pokemon = new Pokemon();
  @Input() pokemonApi?: PokemonApiResponse = new PokemonApiResponse();


  get id() {
    return this.pokemonApi ? DataUtil.extrairNumeroDaURL(this.pokemonApi?.url) : 0;
  }

  get urlFoto() {
    return this.pokemonApi ? `${environment.apiPokePicture}/${DataUtil.adicionaZerosAEsquerda(this.id)}.png` : '';
  }
}
