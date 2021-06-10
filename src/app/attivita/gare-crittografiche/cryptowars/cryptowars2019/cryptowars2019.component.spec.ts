import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cryptowars2019Component } from './cryptowars2019.component';

describe('Cryptowars2019Component', () => {
  let component: Cryptowars2019Component;
  let fixture: ComponentFixture<Cryptowars2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cryptowars2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cryptowars2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
