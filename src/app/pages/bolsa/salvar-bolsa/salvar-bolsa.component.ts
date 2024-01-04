import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BolsaRequest } from 'src/app/shared/model/request/bolsa';
import { Treinador } from 'src/app/shared/model/treinador';
import { BolsaService } from 'src/app/shared/services/bolsa.service';
import { Constants } from 'src/app/shared/utils/constants';
import { DataUtil } from 'src/app/shared/utils/dataUtil';
import { JsonUtil } from 'src/app/shared/utils/jsonUtil';
import { ValidacoesUtil } from 'src/app/shared/utils/validacoesUtil';

@Component({
  selector: 'app-salvar-bolsa',
  templateUrl: './salvar-bolsa.component.html',
  styleUrls: ['./salvar-bolsa.component.css']
})
export class SalvarBolsaComponent implements OnInit {

  constructor(
    private bolsaService: BolsaService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.minLength(4), Validators.required, ValidacoesUtil.noWhitespaceValidator]),
    descricao: new FormControl(''),
    tipo: new FormControl('', Validators.required),
  });

  salvar() {
    let bolsa: BolsaRequest = this.montarRequest();
    this.bolsaService.salvar(bolsa).subscribe(
      (data: BolsaRequest) => {
        this.toastr.success('Bag salva com sucesso!');
        this.router.navigateByUrl(Constants.URL_INICIO);
      },
      (error) => {
        console.log(error);
        this.toastr.error('Erro ao salvar bag!');
      }
    );
  }

  montarRequest(): BolsaRequest {
    let nome = this.formCadastro.get(Constants.FORM_NOME)?.value;
    let descricao = this.formCadastro.get(Constants.FORM_DESCRICAO)?.value;
    let tipo = this.formCadastro.get(Constants.FORM_TIPO)?.value;
    let treinador: Treinador = DataUtil.getUserLogado();
    return new BolsaRequest(nome, descricao, tipo, treinador);
  }

  get formPreenchido() {
    return (
      (this.formCadastro.controls[Constants.FORM_NOME].errors?.['required'] &&
        this.formCadastro.controls[Constants.FORM_NOME].touched) ||
      (this.formCadastro.controls[Constants.FORM_TIPO].errors?.['required'] &&
        this.formCadastro.controls[Constants.FORM_TIPO].touched)
    );
  }

  get formPreenchidoComEspaco() {
    return (
      (this.formCadastro.controls[Constants.FORM_NOME].errors?.['whitespace'] &&
        this.formCadastro.controls[Constants.FORM_NOME].touched)
    );
  }
}
