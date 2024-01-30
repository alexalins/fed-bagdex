import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListApiComponent } from './card-list-api.component';

describe('CardListApiComponent', () => {
  let component: CardListApiComponent;
  let fixture: ComponentFixture<CardListApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
