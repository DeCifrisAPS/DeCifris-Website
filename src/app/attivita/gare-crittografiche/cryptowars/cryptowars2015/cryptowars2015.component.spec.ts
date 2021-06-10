import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cryptowars2015Component } from './cryptowars2015.component';

describe('Cryptowars2015Component', () => {
  let component: Cryptowars2015Component;
  let fixture: ComponentFixture<Cryptowars2015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cryptowars2015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cryptowars2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
