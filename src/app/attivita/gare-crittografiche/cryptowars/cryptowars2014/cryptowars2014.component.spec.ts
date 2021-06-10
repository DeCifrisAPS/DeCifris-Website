import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cryptowars2014Component } from './cryptowars2014.component';

describe('Cryptowars2014Component', () => {
  let component: Cryptowars2014Component;
  let fixture: ComponentFixture<Cryptowars2014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cryptowars2014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cryptowars2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
