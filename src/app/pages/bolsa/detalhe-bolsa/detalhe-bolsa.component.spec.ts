import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheBolsaComponent } from './detalhe-bolsa.component';
import { BolsaService } from 'src/app/shared/services/bolsa.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Constants } from 'src/app/shared/utils/constants';
import { of, throwError } from 'rxjs';
import { Bolsa } from 'src/app/shared/model/bolsa';

describe('DetalheBolsaComponent', () => {
  let component: DetalheBolsaComponent;
  let fixture: ComponentFixture<DetalheBolsaComponent>;
  const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);
  let bolsaServiceSpy: BolsaService;
  let activatedRoute: ActivatedRoute;
  let router: any;

  let mockBolsa: Bolsa = {
    id: 1,
    nome: 'Bolsa de teste',
    descricao: 'Bolsa de teste',
    tipo: 'Nenhum',
    pokemon: [
      {
        id: 1,
        nome: 'Bulbasaur',
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      },
      {
        id: 4,
        nome: 'Charmander',
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      },
      {
        id: 7,
        nome: 'Squirtle',
        foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
      },
    ],
    data: '16/01/2024',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheBolsaComponent],
      providers: [
        BolsaService,
        { provide: ToastrService, useValue: toastrSpy },
        ReactiveFormsModule,
        FormsModule,
      ],
      imports: [RouterTestingModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheBolsaComponent);
    component = fixture.componentInstance;
    bolsaServiceSpy = TestBed.inject(BolsaService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Dado que inicie o componente e recupere o id', () => {
    spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue('1');
    component.ngOnInit();
    expect(component.idBolsa).toEqual(1);
  });

  it('Dado que inicie o componente e não recupere o id', () => {
    spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue(null);
    component.ngOnInit();
    expect(component.idBolsa).toEqual(0);
  });

  it('Dado que chame o getTipo', () => {
    let result = component.tipo;
    expect(result).toEqual(Constants.BOTAO_INCLUIR_POKEMON);
  });

  it('dado que chame getDetalhesBolsa e retorne sucesso', async () => {
    spyOn(bolsaServiceSpy, 'getBolsaById').and.returnValue(of(mockBolsa));

    await component.getDetalhesBolsa();

    expect(bolsaServiceSpy.getBolsaById).toHaveBeenCalledWith(
      component.idBolsa
    );
    expect(component.bolsa).toEqual(mockBolsa);
  });

  it('Dado que chame getDetalhesBolsa e retorne mensagem de erro', async () => {
    const mockError = new Error('Test error');
    spyOn(bolsaServiceSpy, 'getBolsaById').and.returnValue(
      throwError(mockError)
    );

    await component.getDetalhesBolsa();

    expect(bolsaServiceSpy.getBolsaById).toHaveBeenCalledWith(
      component.idBolsa
    );
    expect(component.bolsa).toEqual(new Bolsa());
    expect(toastrSpy.error).toHaveBeenCalledWith(
      'Erro ao carregar dados da Bag!'
    );
  });

  it('dado que chame deletarBolsa e retorne sucesso', async () => {
    spyOn(bolsaServiceSpy, 'deletar').and.returnValue(of(null));
    spyOn(router, 'navigateByUrl').and.stub();
    component.idBolsa = 1;

    await component.deletarBolsa();
    expect(bolsaServiceSpy.deletar).toHaveBeenCalledWith(1);
    expect(toastrSpy.success).toHaveBeenCalledWith('Bag deletada com sucesso!');
  });

  it('Dado que chame deletarBolsa e retorne mensagem de erro', async () => {
    const mockError = new Error('Test error');
    spyOn(bolsaServiceSpy, 'deletar').and.returnValue(throwError(mockError));
    component.idBolsa = 100;
    await component.deletarBolsa();
    expect(toastrSpy.error).toHaveBeenCalledWith('Erro ao deletar Bag!');
  });
});
