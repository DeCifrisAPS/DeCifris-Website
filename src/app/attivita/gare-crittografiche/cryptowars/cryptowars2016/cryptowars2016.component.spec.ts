import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cryptowars2016Component } from './cryptowars2016.component';

describe('Cryptowars2016Component', () => {
  let component: Cryptowars2016Component;
  let fixture: ComponentFixture<Cryptowars2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cryptowars2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cryptowars2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
