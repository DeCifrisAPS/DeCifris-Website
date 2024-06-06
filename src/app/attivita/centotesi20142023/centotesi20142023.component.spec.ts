import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centotesi20142023Component } from './centotesi20142023.component';

describe('Centotesi20142023Component', () => {
  let component: Centotesi20142023Component;
  let fixture: ComponentFixture<Centotesi20142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Centotesi20142023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Centotesi20142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
