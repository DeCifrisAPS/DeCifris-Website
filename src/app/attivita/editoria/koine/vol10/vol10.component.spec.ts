import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vol10Component } from './vol10.component';

describe('Vol10Component', () => {
  let component: Vol10Component;
  let fixture: ComponentFixture<Vol10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vol10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vol10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
