import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TreinadorRequest } from 'src/app/shared/model/request/treinador';
import { TreinadorResponse } from 'src/app/shared/model/response/treinador';
import { TreinadorService } from 'src/app/shared/services/treinador.service';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(
    private treinadorService: TreinadorService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.minLength(4), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required]),
  });

  cadastrar() {
    let treinador = this.montarRequest();
    this.treinadorService.cadastrar(treinador).subscribe(
      (data: TreinadorResponse) => {
        this.toastr.success('Cadastro realizado com sucesso!');
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
        if (error.status === Constants.CONFLICT) {
          this.toastr.error('E-mail já cadastrado!');
        } else {
          this.toastr.error('Erro ao realizar o login!');
        }
      }
    );
  }

  montarRequest(): TreinadorRequest {
    let nome = this.formCadastro.get('nome')?.value;
    let email = this.formCadastro.get('email')?.value;
    let senha = this.formCadastro.get('senha')?.value;
    return new TreinadorRequest(nome, email, senha);
  }

  get formPreenchido() {
    return (
      (this.formCadastro.controls['nome'].errors?.['required'] &&
        this.formCadastro.controls['nome'].touched) ||
      (this.formCadastro.controls['email'].errors?.['required'] &&
        this.formCadastro.controls['email'].touched) ||
      (this.formCadastro.controls['senha'].errors?.['required'] &&
        this.formCadastro.controls['senha'].touched)
    );
  }
}
