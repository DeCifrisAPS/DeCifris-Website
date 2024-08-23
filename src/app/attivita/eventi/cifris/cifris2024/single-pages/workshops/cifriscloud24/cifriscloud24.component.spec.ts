import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cifriscloud24Component } from './cifriscloud24.component';

describe('Cifriscloud24Component', () => {
  let component: Cifriscloud24Component;
  let fixture: ComponentFixture<Cifriscloud24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cifriscloud24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cifriscloud24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
