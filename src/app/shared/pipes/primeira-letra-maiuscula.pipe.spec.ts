import { PrimeiraLetraMaiusculaPipe } from './primeira-letra-maiuscula.pipe';

describe('PrimeiraLetraMaiusculaPipe', () => {
  it('create an instance', () => {
    const pipe = new PrimeiraLetraMaiusculaPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new PrimeiraLetraMaiusculaPipe();
    expect(pipe).toBeTruthy();
  });

  it('Dado que passe uma string vazia', () => {
    const pipe = new PrimeiraLetraMaiusculaPipe();
    let resul = pipe.transform('');
    expect(resul).toEqual('');
  });

  it('Dado que passe uma string valida', () => {
    const pipe = new PrimeiraLetraMaiusculaPipe();
    let resul = pipe.transform('teste');
    expect(resul).toEqual('Teste');
  });

  it('Dado que passe uma string valida com maisculas misturado', () => {
    const pipe = new PrimeiraLetraMaiusculaPipe();
    let resul = pipe.transform('tESTE');
    expect(resul).toEqual('TESTE');
  });
});
