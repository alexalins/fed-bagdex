import { Component, Input, OnInit } from '@angular/core';
import { PokemonApiResponse } from '../../model/response/pokemonApi';
import { DataUtil } from '../../utils/dataUtil';

@Component({
  selector: 'app-tabela-dados-pokemon',
  templateUrl: './tabela-dados-pokemon.component.html',
  styleUrls: ['./tabela-dados-pokemon.component.css']
})
export class TabelaDadosPokemonComponent {

  @Input() pokemon: PokemonApiResponse = new PokemonApiResponse();

  corStats(index: number) {
    return DataUtil.corStats(index);
  }

}
