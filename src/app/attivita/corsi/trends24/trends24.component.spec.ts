import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trends24Component } from './trends24.component';

describe('Trends24Component', () => {
  let component: Trends24Component;
  let fixture: ComponentFixture<Trends24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trends24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trends24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
