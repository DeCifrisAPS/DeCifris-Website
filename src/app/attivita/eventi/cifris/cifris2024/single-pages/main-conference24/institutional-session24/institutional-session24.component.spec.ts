import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalSession24Component } from './institutional-session24.component';

describe('InstitutionalSession24Component', () => {
  let component: InstitutionalSession24Component;
  let fixture: ComponentFixture<InstitutionalSession24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalSession24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionalSession24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
