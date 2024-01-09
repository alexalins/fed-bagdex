export class Constants {
  //Pages
  static readonly URL_LOGIN = '/login';
  static readonly URL_CADASTRO = '/cadastro';
  static readonly URL_INICIO = '/inicio';

  //HTTPS CODE
  static readonly CODE_UNAUTHORIZED: number = 401;
  static readonly CODE_CONFLICT: number = 409;


  //key de sessao ou local storage
  static readonly KEY_TREINADOR: string = 'treinador';
  static readonly KEY_TOKEN: string = 'token';

  //Form
  static readonly FORM_NOME: string = 'nome';
  static readonly FORM_EMAIL: string = 'email';
  static readonly FORM_SENHA: string = 'senha';
  static readonly FORM_DESCRICAO: string = 'descricao';
  static readonly FORM_TIPO: string = 'tipo';

  //Tipo Botao
  static readonly BOTAO_INCLUIR_BAG: string = 'incluir-bag';
  static readonly BOTAO_INCLUIR_POKEMON: string = 'incluir-pokemon';
}
