import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trends23Component } from './trends23.component';

describe('Trends23Component', () => {
  let component: Trends23Component;
  let fixture: ComponentFixture<Trends23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trends23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trends23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
