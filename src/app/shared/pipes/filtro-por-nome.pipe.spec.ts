import { FiltroPorNomePipe } from './filtro-por-nome.pipe';

describe('FiltroPorNomePipe', () => {
  let listaMock = [{nome: 'teste'}, {nome: 'pokemon'},{nome: 'pikachu'}];

  it('create an instance', () => {
    const pipe = new FiltroPorNomePipe();
    expect(pipe).toBeTruthy();
  });

  it('dado que passe uma lista vazia, deve retornar uma lista vazia', () => {
    const pipe = new FiltroPorNomePipe();
    let result = pipe.transform([], 'teste');
    expect(result).toEqual([])
  });

  it('dado que passe uma string vazia, deve rertonar a lista inteira', () => {
    const pipe = new FiltroPorNomePipe();
    let result = pipe.transform(listaMock, '');
    expect(result).toEqual(listaMock)
  });

  it('dado que passe uma lista, deve rertonar a lista filtrada', () => {
    const pipe = new FiltroPorNomePipe();
    let result = pipe.transform(listaMock, 'teste');
    expect(result).toEqual([{nome: 'teste'}])
  });
});
