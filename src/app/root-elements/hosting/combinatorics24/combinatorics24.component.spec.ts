import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combinatorics24Component } from './combinatorics24.component';

describe('Combinatorics24Component', () => {
  let component: Combinatorics24Component;
  let fixture: ComponentFixture<Combinatorics24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combinatorics24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combinatorics24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
