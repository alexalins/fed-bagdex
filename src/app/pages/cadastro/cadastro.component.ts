import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TreinadorRequest } from 'src/app/shared/model/request/treinador';
import { TreinadorResponse } from 'src/app/shared/model/response/treinador';
import { TreinadorService } from 'src/app/shared/services/treinador.service';
import { ValidacoesUtil } from 'src/app/shared/utils/validacoesUtil';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  campos: string [] = [Constants.FORM_NOME, Constants.FORM_EMAIL, Constants.FORM_SENHA];

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.minLength(4), Validators.required, ValidacoesUtil.noWhitespaceValidator]),
    email: new FormControl('', [Validators.email, Validators.required, ValidacoesUtil.noWhitespaceValidator]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required, ValidacoesUtil.noWhitespaceValidator]),
  });

  constructor(
    private treinadorService: TreinadorService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  cadastrar() {
    let treinador = this.montarRequest();
    this.treinadorService.cadastrar(treinador).subscribe(
      (data: TreinadorResponse) => {
        this.toastr.success('Cadastro realizado com sucesso!');
        this.router.navigateByUrl(Constants.URL_LOGIN);
      },
      (error) => {
        if (error.status === Constants.CODE_CONFLICT) {
          this.toastr.error('E-mail já cadastrado!');
        } else {
          this.toastr.error('Erro ao realizar o cadastro!');
        }
      }
    );
  }

  montarRequest(): TreinadorRequest {
    let nome = this.formCadastro.get(Constants.FORM_NOME)?.value;
    let email = this.formCadastro.get(Constants.FORM_EMAIL)?.value;
    let senha = this.formCadastro.get(Constants.FORM_SENHA)?.value;
    return new TreinadorRequest(nome, email, senha);
  }

  get formPreenchido() {
    return ValidacoesUtil.isFormValidacao(this.campos, this.formCadastro);
  }

  get formPreenchidoSemEspaco() {
    return ValidacoesUtil.isFormValidacao(this.campos, this.formCadastro, 'whitespace');
  }
}
