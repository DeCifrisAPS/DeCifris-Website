import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cryptowars2011Component } from './cryptowars2011.component';

describe('Cryptowars2011Component', () => {
  let component: Cryptowars2011Component;
  let fixture: ComponentFixture<Cryptowars2011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cryptowars2011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cryptowars2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
