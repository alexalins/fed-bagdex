export class ValidacoesUtil {

  static noWhitespaceValidator(control: any) {
    if (control.value && /\s/g.test(control.value)) {
      return { whitespace: true };
    }
    return null;
  }
}
