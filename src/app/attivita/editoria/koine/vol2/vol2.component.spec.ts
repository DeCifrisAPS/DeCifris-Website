import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vol2Component } from './vol2.component';

describe('Vol2Component', () => {
  let component: Vol2Component;
  let fixture: ComponentFixture<Vol2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vol2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
