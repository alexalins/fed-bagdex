import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TreinadorService } from '../services/treinador.service';
import { LoginRequest } from '../model/request/login';
import { LoginResponse } from '../model/response/login';
import { TreinadorRequest } from '../model/request/treinador';

describe('TreinadorService', () => {
  let service: TreinadorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TreinadorService],
    });
    service = TestBed.inject(TreinadorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request for login', () => {
    const loginRequest: LoginRequest = {
      email: 'teste@teste.com',
      senha: 'teste123'
    };

    const loginResponse: LoginResponse = {
      token: 'teste',
      id: 1,
      email: 'teste@teste.com',
      nome: 'teste'
    };

    service.login(loginRequest).subscribe((response) => {});

    const req = httpMock.expectOne(`${service.apiUrl}/login`);
    expect(req.request.method).toBe('POST');
  });

  it('should send a POST request for cadastrar', () => {
    const treinadorRequest: TreinadorRequest = {
      nome: 'teste',
      email: 'teste@teste.com',
      senha: 'teste123'
    };

    service.cadastrar(treinadorRequest).subscribe((response) => {});

    const req = httpMock.expectOne(`${service.apiUrl}/treinador/cadastro`);
    expect(req.request.method).toBe('POST');
  });
});

