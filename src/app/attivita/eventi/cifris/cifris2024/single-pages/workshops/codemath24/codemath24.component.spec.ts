import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codemath24Component } from './codemath24.component';

describe('Codemath24Component', () => {
  let component: Codemath24Component;
  let fixture: ComponentFixture<Codemath24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codemath24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Codemath24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
