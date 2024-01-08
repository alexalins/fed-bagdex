import { FormGroup } from '@angular/forms';
import { Constants } from './constants';

export class ValidacoesUtil {
  static noWhitespaceValidator(control: any) {
    let isWhitespace;
    if (control.value != '') {
      isWhitespace = control.value.trim().length === 0;
    }
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  static isFormValidacao(campos: string[], form: FormGroup, formValidacao?: string) {
    let result = true;
    let validacao = formValidacao ? formValidacao : 'required';

    campos.forEach((campo) => {
      switch (campo) {
        case Constants.FORM_NOME:
          if (
            form.controls[Constants.FORM_NOME].errors?.[validacao] &&
            form.controls[Constants.FORM_NOME].touched
          ) {
            result = false;
          }
          break;
        case Constants.FORM_DESCRICAO:
          if (
            form.controls[Constants.FORM_DESCRICAO].errors?.[validacao] &&
            form.controls[Constants.FORM_DESCRICAO].touched
          ) {
            result = false;
          }
          break;
        case Constants.FORM_EMAIL:
          if (
            form.controls[Constants.FORM_EMAIL].errors?.[validacao] &&
            form.controls[Constants.FORM_EMAIL].touched
          ) {
            result = false;
          }
          break;
        case Constants.FORM_SENHA:
          if (
            form.controls[Constants.FORM_SENHA].errors?.[validacao] &&
            form.controls[Constants.FORM_SENHA].touched
          ) {
            result = false;
          }
          break;
        case Constants.FORM_TIPO:
          if (
            form.controls[Constants.FORM_TIPO].errors?.[validacao] &&
            form.controls[Constants.FORM_TIPO].touched
          ) {
            result = false;
          }
          break;
        default:
          break;
      }
    });

    return result;
  }
}
