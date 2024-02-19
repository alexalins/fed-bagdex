import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDadosPokemonComponent } from './tabela-dados-pokemon.component';

describe('TabelaDadosPokemonComponent', () => {
  let component: TabelaDadosPokemonComponent;
  let fixture: ComponentFixture<TabelaDadosPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDadosPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDadosPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
