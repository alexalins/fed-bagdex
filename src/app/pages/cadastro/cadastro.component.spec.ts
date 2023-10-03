import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';
import { TreinadorService } from 'src/app/shared/services/treinador.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TreinadorRequest } from 'src/app/shared/model/request/treinador';
import { Constants } from 'src/app/shared/utils/constants';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
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

  it('dado que chame formPreenchido passando um form valido', () => {
    component.formCadastro.controls[Constants.FORM_NOME].setValue('teste');
    component.formCadastro.controls[Constants.FORM_EMAIL].setValue('test@example.com');
    component.formCadastro.controls[Constants.FORM_SENHA].setValue('password');

    component.formCadastro.controls[Constants.FORM_NOME].markAsTouched();
    component.formCadastro.controls[Constants.FORM_EMAIL].markAsTouched();
    component.formCadastro.controls[Constants.FORM_SENHA].markAsTouched();

    const result = component.formPreenchido;

    expect(result).toBeTruthy();
  })

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
});
