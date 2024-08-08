import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpsid24Component } from './cpsid24.component';

describe('Cpsid24Component', () => {
  let component: Cpsid24Component;
  let fixture: ComponentFixture<Cpsid24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cpsid24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cpsid24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
