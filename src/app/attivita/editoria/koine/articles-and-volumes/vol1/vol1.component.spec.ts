import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vol1Component } from './vol1.component';

describe('Vol1Component', () => {
  let component: Vol1Component;
  let fixture: ComponentFixture<Vol1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vol1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vol1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
