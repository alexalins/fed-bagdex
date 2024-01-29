import { PokemonApiResponse } from "./pokemonAPi";

export class DadosPokemonApiResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonApiResponse[];

  constructor() {
    this.count = 0;
    this.next = '';
    this.previous = '';
    this.results = [];
  }
}
