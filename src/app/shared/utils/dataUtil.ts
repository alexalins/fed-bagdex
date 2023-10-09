export class DataUtil {
  static formatarData(dataStr: string): string {
    const data = new Date(dataStr);
    const dia = String(data.getDate() + 1).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
}
