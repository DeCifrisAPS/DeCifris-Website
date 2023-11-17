import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opera24Component } from './opera24.component';

describe('Opera24Component', () => {
  let component: Opera24Component;
  let fixture: ComponentFixture<Opera24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opera24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opera24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
