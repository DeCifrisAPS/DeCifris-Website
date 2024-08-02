import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrariInstitutionalSession24Component } from './orari-institutional-session24.component';

describe('OrariInstitutionalSession24Component', () => {
  let component: OrariInstitutionalSession24Component;
  let fixture: ComponentFixture<OrariInstitutionalSession24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrariInstitutionalSession24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrariInstitutionalSession24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
