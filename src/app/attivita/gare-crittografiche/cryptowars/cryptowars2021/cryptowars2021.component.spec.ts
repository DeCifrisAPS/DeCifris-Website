import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cryptowars2021Component } from './cryptowars2021.component';

describe('Cryptowars2021Component', () => {
  let component: Cryptowars2021Component;
  let fixture: ComponentFixture<Cryptowars2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cryptowars2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cryptowars2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
