import { TestBed } from '@angular/core/testing';

import { BolsaService } from '../services/bolsa.service';
import { BolsaRequest } from '../model/request/bolsa';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TreinadorRequest } from '../model/request/treinador';
import { Bolsa } from '../model/bolsa';

describe('BolsaService', () => {
  let service: BolsaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BolsaService],
    });
    service = TestBed.inject(BolsaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar bolsa com sucesso', () => {
    const mockTreinador: TreinadorRequest = {
      nome: "Alexa",
      email: "alexa@teste.com",
      senha: "123"
    };

    const mockBolsa: Bolsa = {
      id: 1,
      nome: "teste",
      descricao: "",
      tipo: "nenhum",
      pokemon: [],
      data: "04/01/2024"
    };

    service.getBolsaDoTreinador(mockTreinador).subscribe(
      bolsa => {
        expect(bolsa).toEqual(mockBolsa);
      },
      () => {
        fail('A requisição não deveria ter falhado');
      }
    );

    const req = httpMock.expectOne(`${service.apiUrl}/treinador`);
    req.flush(mockBolsa);
  });

  it('deve lidar com erro ao obter bolsa do treinador', () => {
    const mockTreinador: TreinadorRequest = {nome: "Alexa",
      email: "alexa@teste.com",
      senha: "123"
    };

    const errorResponse = { status: 500, statusText: 'Erro interno do servidor' };

    service.getBolsaDoTreinador(mockTreinador).subscribe(
      () => {
        fail('A requisição não deveria ter sido bem-sucedida');
      },
      error => {
        expect(error.status).toBe(errorResponse.status);
        expect(error.statusText).toBe(errorResponse.statusText);
      }
    );

    const req = httpMock.expectOne(`${service.apiUrl}/treinador`);
    req.flush({}, errorResponse);
  });

  it('Dado que o usuario passe uma bolsa valida par salvar', () => {
    const bolsa: BolsaRequest = {
      nome: 'teste',
      descricao: 'teste',
      tipo: 1,
      treinador: {
        id: 1,
        nome: 'alexa',
        email: 'alexa@test.com'
      }
    };

    service.salvar(bolsa).subscribe((response) => {});

    const req = httpMock.expectOne(`${service.apiUrl}/salvar`);
    expect(req.request.method).toBe('POST');
  });


  it('Dado que o usuario passe uma bolsa invalida par salvar', () => {
    const errorResponse = { status: 401, statusText: 'Forbidden' };

    const mockBolsa: any = {
      nome: 'teste',
      descricao: 'teste',
      tipo: 1,
      treinador: null
    };

    service.salvar(mockBolsa).subscribe(
      () => {
        fail('A requisição não deveria ter sido bem-sucedida');
      },
      error => {
        console.log(error.status)
        expect(error.status).toBe(errorResponse.status);
      }
    );

    const req = httpMock.expectOne(`${service.apiUrl}/salvar`);
    req.flush({}, errorResponse);
  });
});
