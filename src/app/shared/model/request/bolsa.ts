import { Treinador } from "../treinador";

export class BolsaRequest {
  id?: number;
  nome: string;
  descricao: string;
  tipo: number;
  treinador: Treinador;

  constructor(nome: string, descricao: string, tipo: number, treinador: Treinador) {
    this.nome = nome;
    this.descricao = descricao;
    this.tipo = tipo;
    this.treinador = treinador;
  }
}
