import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cifris2025Component } from './cifris2025.component';

describe('Cifris2025Component', () => {
  let component: Cifris2025Component;
  let fixture: ComponentFixture<Cifris2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cifris2025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cifris2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
