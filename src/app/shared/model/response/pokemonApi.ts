import { Stats } from "../stats";

export class PokemonApiResponse {
  id: number;
  name: string;
  url: string;
  height: number;
  types: string [];
  stats: Stats [];

  constructor() {
    this.id = 0;
    this.name = '';
    this.url = '';
    this.height = 0;
    this.types = [];
    this.stats = [];
  }

  setTypes(types: any[]) {
    types.forEach(type => this.types.push(type.type.name))
  }

  setStats(stats: any[]) {
    stats.forEach(stat => this.stats.push(new Stats(stat?.base_stat, stat?.stat?.name)));
  }
}
