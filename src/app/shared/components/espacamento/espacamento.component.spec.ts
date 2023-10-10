import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacamentoComponent } from './espacamento.component';

describe('EspacamentoComponent', () => {
  let component: EspacamentoComponent;
  let fixture: ComponentFixture<EspacamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
