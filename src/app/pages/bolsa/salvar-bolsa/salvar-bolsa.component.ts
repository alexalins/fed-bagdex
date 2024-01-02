import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/shared/utils/constants';
import { JsonUtil } from 'src/app/shared/utils/jsonUtil';
import { ValidacoesUtil } from 'src/app/shared/utils/validacoesUtil';

@Component({
  selector: 'app-salvar-bolsa',
  templateUrl: './salvar-bolsa.component.html',
  styleUrls: ['./salvar-bolsa.component.css']
})
export class SalvarBolsaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get listTipos() {
    return JsonUtil.listaTipos();
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.minLength(4), Validators.required, ValidacoesUtil.noWhitespaceValidator]),
    descricao: new FormControl(''),
    tipo: new FormControl('', Validators.required),
  });

  cadastrar() {
    console.log(this.formCadastro.value)
  }

  get formPreenchido() {
    return (
      (this.formCadastro.controls[Constants.FORM_NOME].errors?.['required'] &&
        this.formCadastro.controls[Constants.FORM_NOME].touched) ||
      (this.formCadastro.controls[Constants.FORM_TIPO].errors?.['required'] &&
        this.formCadastro.controls[Constants.FORM_EMAIL].touched)
    );
  }

  get formPreenchidoComEspaco() {
    return (
      (this.formCadastro.controls[Constants.FORM_NOME].errors?.['whitespace'] &&
        this.formCadastro.controls[Constants.FORM_NOME].touched)
    );
  }
}
