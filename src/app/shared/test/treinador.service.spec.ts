import { TestBed } from '@angular/core/testing';

import { TreinadorService } from '../services/treinador.service';

describe('TeinadorServiceService', () => {
  let service: TreinadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreinadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
