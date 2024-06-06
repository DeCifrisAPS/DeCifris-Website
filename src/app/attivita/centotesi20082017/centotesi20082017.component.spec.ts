import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Centotesi20082017Component } from './centotesi20082017.component';

describe('Centotesi20082017Component', () => {
  let component: Centotesi20082017Component;
  let fixture: ComponentFixture<Centotesi20082017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Centotesi20082017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Centotesi20082017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
