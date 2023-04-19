import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trends22Component } from './trends22.component';

describe('Trends22Component', () => {
  let component: Trends22Component;
  let fixture: ComponentFixture<Trends22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trends22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trends22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
