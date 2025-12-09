import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vol6Component } from './vol6.component';

describe('Vol6Component', () => {
  let component: Vol6Component;
  let fixture: ComponentFixture<Vol6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vol6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vol6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
