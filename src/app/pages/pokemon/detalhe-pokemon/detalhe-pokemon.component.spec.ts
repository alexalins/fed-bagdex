import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePokemonComponent } from './detalhe-pokemon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { PrimeiraLetraMaiusculaPipe } from 'src/app/shared/pipes/primeira-letra-maiuscula.pipe';
import { BolsaService } from 'src/app/shared/services/bolsa.service';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

describe('DetalhePokemonComponent', () => {
  let component: DetalhePokemonComponent;
  let fixture: ComponentFixture<DetalhePokemonComponent>;
  const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhePokemonComponent, PrimeiraLetraMaiusculaPipe],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{ provide: ToastrService, useValue: toastrSpy }, BolsaService, PokemonService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
