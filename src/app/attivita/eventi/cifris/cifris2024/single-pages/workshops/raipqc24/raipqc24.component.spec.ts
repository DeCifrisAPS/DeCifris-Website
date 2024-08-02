import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raipqc24Component } from './raipqc24.component';

describe('Raipqc24Component', () => {
  let component: Raipqc24Component;
  let fixture: ComponentFixture<Raipqc24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Raipqc24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raipqc24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
