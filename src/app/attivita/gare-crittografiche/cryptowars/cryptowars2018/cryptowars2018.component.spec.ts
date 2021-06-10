import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cryptowars2018Component } from './cryptowars2018.component';

describe('Cryptowars2018Component', () => {
  let component: Cryptowars2018Component;
  let fixture: ComponentFixture<Cryptowars2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cryptowars2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cryptowars2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
