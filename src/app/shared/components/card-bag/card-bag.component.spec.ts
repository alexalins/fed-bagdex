import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBagComponent } from './card-bag.component';

describe('CardBagComponent', () => {
  let component: CardBagComponent;
  let fixture: ComponentFixture<CardBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
