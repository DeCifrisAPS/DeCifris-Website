import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrariWorkshops24Component } from './orari-workshops24.component';

describe('OrariWorkshops24Component', () => {
  let component: OrariWorkshops24Component;
  let fixture: ComponentFixture<OrariWorkshops24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrariWorkshops24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrariWorkshops24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
