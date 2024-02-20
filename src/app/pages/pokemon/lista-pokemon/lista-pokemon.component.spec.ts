import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokemonComponent } from './lista-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListaPokemonComponent', () => {
  let component: ListaPokemonComponent;
  let fixture: ComponentFixture<ListaPokemonComponent>;
  const toastrSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPokemonComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{ provide: ToastrService, useValue: toastrSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
