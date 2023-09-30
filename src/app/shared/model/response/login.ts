export class LoginResponse {
  token: string;
  id: number;
  nome: string;
  email: string;

  constructor(token: string, id: number, nome: string, email: string) {
    this.token = token;
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}
