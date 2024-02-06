export class PokemonApiResponse {
  id: number;
  name: string;
  url: string;
  height: number;
  types: string [];
  stats: string [];

  constructor() {
    this.id = 0;
    this.name = '';
    this.url = '';
    this.height = 0;
    this.types = [];
    this.stats = [];
  }
}
