import { Treinador } from '../model/treinador';
import { Constants } from './constants';

export class DataUtil {
  static formatarData(dataStr: string): string {
    const data = new Date(dataStr);
    const dia = String(data.getDate() + 1).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  static getUserLogado(): Treinador {
    let json = sessionStorage.getItem(Constants.KEY_TREINADOR);
    if (json) {
      const treinador: Treinador = JSON.parse(json);
      return treinador;
    }
    return new Treinador(0, '', '');
  }

  static extrairNumeroDaURL(url: string): number {
    const match = url.match(/\/(\d+)\/$/);

    if (match) {
      return parseInt(match[1], 10);
    }

    return 0;
  }

  static adicionaZerosAEsquerda(numero: number): string {
    return numero.toString().padStart(3, '0');
  }
}
