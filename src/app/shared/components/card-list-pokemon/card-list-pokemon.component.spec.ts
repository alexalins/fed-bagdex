import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListPokemonComponent } from './card-list-pokemon.component';
import { FiltroPorNomePipe } from '../../pipes/filtro-por-nome.pipe';

describe('CardListPokemonComponent', () => {
  let component: CardListPokemonComponent;
  let fixture: ComponentFixture<CardListPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListPokemonComponent ],
      providers: [FiltroPorNomePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
