export class ValidacoesUtil {

  static noWhitespaceValidator(control: any) {
    let isWhitespace;
    if(control.value != '') {
      isWhitespace = (control.value).trim().length === 0;
    }
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
