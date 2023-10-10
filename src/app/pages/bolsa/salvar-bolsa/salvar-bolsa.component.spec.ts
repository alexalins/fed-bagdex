import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarBolsaComponent } from './salvar-bolsa.component';

describe('SalvarBolsaComponent', () => {
  let component: SalvarBolsaComponent;
  let fixture: ComponentFixture<SalvarBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarBolsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
