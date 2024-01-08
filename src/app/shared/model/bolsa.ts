import { Pokemon } from "./pokemon";

export class Bolsa {
  id: number;
  nome: string;
  descricao: string;
  tipo: string;
  data: string;
  pokemon?: Pokemon[];

  constructor() {
    this.id = 0;
    this.nome = '';
    this.descricao = '';
    this.tipo = '';
    this.data = '';
    this.pokemon = [];
  }
}
