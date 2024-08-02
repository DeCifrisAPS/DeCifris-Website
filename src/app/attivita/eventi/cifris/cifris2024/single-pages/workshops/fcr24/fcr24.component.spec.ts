import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fcr24Component } from './fcr24.component';

describe('Fcr24Component', () => {
  let component: Fcr24Component;
  let fixture: ComponentFixture<Fcr24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fcr24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fcr24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
