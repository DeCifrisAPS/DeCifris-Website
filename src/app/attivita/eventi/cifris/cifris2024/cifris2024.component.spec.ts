import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cifris2024Component } from './cifris2024.component';

describe('Cifris2024Component', () => {
  let component: Cifris2024Component;
  let fixture: ComponentFixture<Cifris2024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cifris2024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cifris2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
