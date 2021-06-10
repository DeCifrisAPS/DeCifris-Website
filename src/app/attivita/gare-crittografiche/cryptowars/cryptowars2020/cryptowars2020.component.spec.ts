import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cryptowars2020Component } from './cryptowars2020.component';

describe('Cryptowars2020Component', () => {
  let component: Cryptowars2020Component;
  let fixture: ComponentFixture<Cryptowars2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cryptowars2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cryptowars2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
