import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';
import { TreinadorService } from 'src/app/shared/services/treinador.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TreinadorRequest } from 'src/app/shared/model/request/treinador';
import { Constants } from 'src/app/shared/utils/constants';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreinadorResponse } from 'src/app/shared/model/response/treinador';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  let treinadorService: TreinadorService;
  let router: any;
  let toastrService: ToastrService;
  const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroComponent ],
      providers: [TreinadorService, { provide: ToastrService, useValue: toastrSpy }, ReactiveFormsModule, FormsModule],
      imports: [ RouterTestingModule, HttpClientModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    treinadorService = TestBed.inject(TreinadorService);
    router = TestBed.inject(Router);
    toastrService = TestBed.inject(ToastrService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dado que chame montarRequest passando um form valido', () => {
    component.formCadastro.patchValue({
      nome: 'teste',
      email: 'test@example.com',
      senha: 'password',
    });

    const loginRequest: TreinadorRequest = component.montarRequest();
    expect(loginRequest.nome).toEqual('teste');
    expect(loginRequest.email).toEqual('test@example.com');
    expect(loginRequest.senha).toEqual('password');
  });

  it('dado que chame formPreenchido passando um form invalido', () => {
    component.formCadastro.controls[Constants.FORM_NOME].setValue('');
    component.formCadastro.controls[Constants.FORM_EMAIL].setValue('test@example.com');
    component.formCadastro.controls[Constants.FORM_SENHA].setValue('password');

    const result = component.formPreenchido;

    expect(result).toBeFalsy();
  })

  it('dado que chame formPreenchido passando marcado como tocado', () => {
    component.formCadastro.controls[Constants.FORM_NOME].markAsTouched();
    component.formCadastro.controls[Constants.FORM_EMAIL].markAsTouched();
    component.formCadastro.controls[Constants.FORM_SENHA].markAsTouched();
    const result = component.formPreenchido;

    expect(result).toBeTruthy();
  });

  it('dado que chame formPreenchido passando sem toque e invalido', () => {
    const result = component.formPreenchido;

    expect(result).toBeFalsy();
  });

  it('dado que chame formPreenchidoComEspaco passando com toque e com espaço', () => {
    component.formCadastro.controls[Constants.FORM_NOME].markAsTouched();
    component.formCadastro.controls[Constants.FORM_EMAIL].markAsTouched();
    component.formCadastro.controls[Constants.FORM_SENHA].markAsTouched();

    component.formCadastro.controls[Constants.FORM_NOME].setErrors({ 'whitespace': true });
    component.formCadastro.controls[Constants.FORM_EMAIL].setErrors({ 'whitespace': true });
    component.formCadastro.controls[Constants.FORM_SENHA].setErrors({ 'whitespace': true });

    const result = component.formPreenchidoComEspaco;

    expect(result).toBeTruthy();
  });

  it('dado que chame formPreenchidoComEspaco passando sem toque e com espaço', () => {
    component.formCadastro.controls[Constants.FORM_NOME].setErrors({ 'whitespace': true });
    component.formCadastro.controls[Constants.FORM_EMAIL].setErrors({ 'whitespace': true });
    component.formCadastro.controls[Constants.FORM_SENHA].setErrors({ 'whitespace': true });

    const result = component.formPreenchidoComEspaco;

    expect(result).toBeFalsy();
  });

  it('dado que chame formPreenchidoComEspaco passando com toque e sem espaço', () => {
    component.formCadastro.controls[Constants.FORM_NOME].markAsTouched();
    component.formCadastro.controls[Constants.FORM_EMAIL].markAsTouched();
    component.formCadastro.controls[Constants.FORM_SENHA].markAsTouched();

    const result = component.formPreenchidoComEspaco;

    expect(result).toBeFalsy();
  });

  it('dado que chame formPreenchidoComEspaco passando sem toque e sem espaço', () => {
    const result = component.formPreenchidoComEspaco;

    expect(result).toBeFalsy();
  });

  it('dado que chame o cadastrar com sucesso', () => {
    const treinadorResponse: TreinadorResponse = {
      nome: 'teste',
      email: 'teste@teste.com',
      senha: 'senha'
    };

    spyOn(treinadorService, 'cadastrar').and.returnValue(of(treinadorResponse));
    spyOn(router, 'navigateByUrl').and.stub();

    component.cadastrar();

    expect(toastrService.success).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalled();
  });

  it('dado que retorne um erro no cadastrar', () => {
    jasmine.createSpy();
    const errorResponse = {
      status: Constants.CODE_UNAUTHORIZED
    };

    spyOn(treinadorService, 'cadastrar').and.returnValue(throwError(errorResponse));

    component.cadastrar();

    expect(toastrService.error).toHaveBeenCalledWith('Erro ao realizar o cadastro!');
  });

  it('dado que retorne um erro 401 no cadastrar', () => {
    jasmine.createSpy();
    const errorResponse = {
      status: Constants.CODE_CONFLICT
    };

    spyOn(treinadorService, 'cadastrar').and.returnValue(throwError(errorResponse));

    component.cadastrar();

    expect(toastrService.error).toHaveBeenCalledWith('E-mail já cadastrado!');
  });
});
