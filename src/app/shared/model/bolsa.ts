import { Pokemon } from "./pokemon";

export class Bolsa {
  nome: string;
  descricao: string;
  tipo: string;
  data: string;
  pokemon?: Pokemon[];

  constructor(nome: string, descricao: string, tipo: string, data: string, pokemon?: Pokemon[]) {
    this.nome = nome;
    this.descricao = descricao;
    this.tipo = tipo;
    this.data = data;
    this.pokemon = pokemon;
  }
}
