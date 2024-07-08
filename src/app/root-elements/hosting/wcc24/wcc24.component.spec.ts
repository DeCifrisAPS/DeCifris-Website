import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WCC24Component } from './wcc24.component';

describe('WCC24Component', () => {
  let component: WCC24Component;
  let fixture: ComponentFixture<WCC24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WCC24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCC24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
