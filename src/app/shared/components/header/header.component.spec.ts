import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Constants } from '../../utils/constants';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('caminhoImagem e titulo valores', () => {
    expect(component.caminhoImagem).toEqual('../../../../assets/image/pokebola.png');
    expect(component.titulo).toEqual('Bagdex');
  });

  it('dado que retorne url login em isTelaSemBotaoSair', () => {
    const router = TestBed.inject(Router);
    spyOnProperty(router, 'url', 'get').and.returnValue(Constants.URL_LOGIN);

    expect(component.isTelaSemBotaoSair).toBeTrue();
  });

  it('dado que retorne url cadastro em isTelaSemBotaoSair', () => {
    const router = TestBed.inject(Router);
    spyOnProperty(router, 'url', 'get').and.returnValue(Constants.URL_CADASTRO);

    expect(component.isTelaSemBotaoSair).toBeTrue();
  });

  it('dado que retorne false isTelaSemBotaoSair', () => {
    const router = TestBed.inject(Router);
    spyOnProperty(router, 'url', 'get').and.returnValue('/outrapagina');

    expect(component.isTelaSemBotaoSair).toBeFalse();
  });

  it('dado que remova items da sessionStorage e navegue pra  login()', () => {
    const router = TestBed.inject(Router);
    const sessionStorageSpy = spyOn(sessionStorage, 'removeItem');
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl');

    component.sair();

    expect(sessionStorageSpy).toHaveBeenCalledWith(Constants.KEY_TREINADOR);
    expect(sessionStorageSpy).toHaveBeenCalledWith(Constants.KEY_TOKEN);
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/login');
  });
});
