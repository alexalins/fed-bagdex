import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarBolsaComponent } from './salvar-bolsa.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BolsaService } from 'src/app/shared/services/bolsa.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BolsaRequest } from 'src/app/shared/model/request/bolsa';
import { of, throwError } from 'rxjs';
import { Constants } from 'src/app/shared/utils/constants';

describe('SalvarBolsaComponent', () => {
  let component: SalvarBolsaComponent;
  let fixture: ComponentFixture<SalvarBolsaComponent>;
  const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);
  let toastrServiceSpy: ToastrService;
  let bolsaServiceSpy: BolsaService;
  let routerSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarBolsaComponent ],
      providers: [BolsaService, { provide: ToastrService, useValue: toastrSpy }, ReactiveFormsModule, FormsModule],
      imports: [ RouterTestingModule, HttpClientModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarBolsaComponent);
    component = fixture.componentInstance;
    toastrServiceSpy = TestBed.inject(ToastrService);
    bolsaServiceSpy = TestBed.inject(BolsaService);
    routerSpy = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve salvar com sucesso', () => {
    const mockBolsa: BolsaRequest = {
      nome: 'teste',
      descricao: '',
      tipo: 0,
      treinador: {
        id: 1,
        nome: 'alexa',
        email: 'alexa@teste.com'
      }
    };
    spyOn(bolsaServiceSpy, 'salvar').and.returnValue(of(mockBolsa));
    spyOn(routerSpy, 'navigateByUrl').and.stub();

    component.salvar();

    expect(toastrServiceSpy.success).toHaveBeenCalled();
    expect(routerSpy.navigateByUrl).toHaveBeenCalled();
  });

  it('dado que retorne um erro no cadastrar', () => {
    jasmine.createSpy();
    const errorResponse = {
      status: Constants.CODE_UNAUTHORIZED
    };

    spyOn(bolsaServiceSpy, 'salvar').and.returnValue(throwError(errorResponse));

    component.salvar();

    expect(toastrServiceSpy.error).toHaveBeenCalledWith('Erro ao salvar bag!');
  });
});
