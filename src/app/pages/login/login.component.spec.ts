import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { LoginRequest } from 'src/app/shared/model/request/login';
import { LoginResponse } from 'src/app/shared/model/response/login';
import { Constants } from 'src/app/shared/utils/constants';
import { of, throwError } from 'rxjs';
import { TreinadorService } from 'src/app/shared/services/treinador.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let treinadorService: TreinadorService;
  let toastrService: ToastrService;
  let router: any;
  const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([]), HttpClientModule, ReactiveFormsModule],
      providers: [
        TreinadorService,
        ToastrService,
        { provide: ToastrService, useValue: toastrSpy }
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    treinadorService = TestBed.inject(TreinadorService);
    toastrService = TestBed.inject(ToastrService);
    router = TestBed.inject(Router);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('dado que inicie o formulario', () => {
    const formValues = component.formLogin.value;
    expect(formValues.email).toEqual('');
    expect(formValues.senha).toEqual('');
  });

  it('dado que valide email e senha com secesso', () => {
    const emailControl = component.formLogin.get(Constants.FORM_EMAIL);
    const senhaControl = component.formLogin.get(Constants.FORM_SENHA);

    expect(emailControl?.hasError('required')).toBeTruthy();
    expect(senhaControl?.hasError('required')).toBeTruthy();
  });

  it('dado que chame o login com sucesso', () => {
    const loginResponse: LoginResponse = {
      token: 'your-token',
      id: 1,
      nome: 'teste',
      email: 'teste@teste.com'
    };

    spyOn(treinadorService, 'login').and.returnValue(of(loginResponse));
    spyOn(sessionStorage, 'setItem');
    spyOn(router, 'navigateByUrl').and.stub();

    component.login();

    expect(sessionStorage.setItem).toHaveBeenCalledWith(Constants.KEY_TOKEN, 'your-token');
    expect(sessionStorage.setItem).toHaveBeenCalledWith(Constants.KEY_TREINADOR, JSON.stringify(loginResponse));
  });

  it('dado que retorne um erro no login', () => {
    jasmine.createSpy();
    const errorResponse = {
      status: Constants.CODE_UNAUTHORIZED
    };

    spyOn(treinadorService, 'login').and.returnValue(throwError(errorResponse));

    component.login();

    expect(toastrService.error).toHaveBeenCalledWith('Campo e-mail/senha inválido!');
  });

  it('dado que chame montarRequest passando um form valido', () => {
    component.formLogin.patchValue({
      email: 'test@example.com',
      senha: 'password',
    });

    const loginRequest: LoginRequest = component.montarRequest();
    expect(loginRequest.email).toEqual('test@example.com');
    expect(loginRequest.senha).toEqual('password');
  });
});
