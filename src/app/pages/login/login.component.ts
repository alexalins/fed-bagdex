import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/shared/model/request/login';
import { LoginResponse } from 'src/app/shared/model/response/login';
import { TreinadorService } from 'src/app/shared/services/treinador.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/shared/utils/constants';
import { ValidacoesUtil } from 'src/app/shared/utils/validacoesUtil';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  campos: string [] = [Constants.FORM_EMAIL, Constants.FORM_SENHA];

  formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      ValidacoesUtil.noWhitespaceValidator,
    ]),
    senha: new FormControl('', [
      Validators.minLength(4),
      Validators.required,
      ValidacoesUtil.noWhitespaceValidator,
    ]),
  });

  constructor(
    private router: Router,
    private treinadorService: TreinadorService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    let login = this.montarRequest();
    this.treinadorService.login(login).subscribe(
      (data: LoginResponse) => {
        sessionStorage.setItem(Constants.KEY_TOKEN, data.token);
        sessionStorage.setItem(Constants.KEY_TREINADOR, JSON.stringify(data));
        this.router.navigateByUrl(Constants.URL_INICIO);
        this.toastr.success('Login realizado com sucesso!');
      },
      (error) => {
        if (error.status === Constants.CODE_UNAUTHORIZED) {
          this.toastr.error('Campo e-mail/senha inválido!');
        } else {
          this.toastr.error('Erro ao realizar o login!');
        }
      }
    );
  }

  montarRequest(): LoginRequest {
    let email = this.formLogin.get(Constants.FORM_EMAIL)?.value;
    let senha = this.formLogin.get(Constants.FORM_SENHA)?.value;
    return new LoginRequest(email, senha);
  }

  get formPreenchido() {
    return ValidacoesUtil.isFormValidacao(this.campos, this.formLogin);
  }

  get formPreenchidoSemEspaco() {
    return ValidacoesUtil.isFormValidacao(this.campos, this.formLogin, 'whitespace');
  }
}
