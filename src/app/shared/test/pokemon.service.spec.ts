import { TestBed } from '@angular/core/testing';

import { PokemonService } from '../services/pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DadosPokemonApiResponse } from '../model/response/dadosPokemonApi';
import { PokemonApiResponse } from '../model/response/pokemonApi';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getListPokemon', () => {
    it('deve retornar um Observable<DadosPokemonApiResponse>', () => {
      const dados: DadosPokemonApiResponse = {
        count: 0,
        next: '',
        previous: '',
        results: []
      };
      service.getListPokemon().subscribe(data => {
        expect(data).toEqual(dados);
      });
      const req = httpMock.expectOne(`${service.BASE_POKE_API}`);
      expect(req.request.method).toBe('GET');
      req.flush(dados);
    });
  });

  describe('getPokemon', () => {
    it('deve retornar um Observable<PokemonApiResponse>', () => {
      const pokemon: PokemonApiResponse = new PokemonApiResponse();
      const nomePokemon = 'pikachu';
      service.getPokemon(nomePokemon).subscribe(data => {
        expect(data).toEqual(pokemon);
      });
      const req = httpMock.expectOne(`${service.BASE_POKE_API}/${nomePokemon}`);
      expect(req.request.method).toBe('GET');
      req.flush(pokemon);
    });
  });

});
