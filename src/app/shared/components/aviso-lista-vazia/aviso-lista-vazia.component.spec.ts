import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoListaVaziaComponent } from './aviso-lista-vazia.component';

describe('AvisoListaVaziaComponent', () => {
  let component: AvisoListaVaziaComponent;
  let fixture: ComponentFixture<AvisoListaVaziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoListaVaziaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoListaVaziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
