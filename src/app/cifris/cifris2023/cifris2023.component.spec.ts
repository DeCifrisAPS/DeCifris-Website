import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cifris2023Component } from './cifris2023.component';

describe('Cifris2023Component', () => {
  let component: Cifris2023Component;
  let fixture: ComponentFixture<Cifris2023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cifris2023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cifris2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
