import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetalhesComponent } from './card-detalhes.component';

describe('CardDetalhesComponent', () => {
  let component: CardDetalhesComponent;
  let fixture: ComponentFixture<CardDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
