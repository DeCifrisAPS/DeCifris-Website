import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Magic2026Component } from './magic2026.component';

describe('Magic2026Component', () => {
  let component: Magic2026Component;
  let fixture: ComponentFixture<Magic2026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Magic2026Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Magic2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
