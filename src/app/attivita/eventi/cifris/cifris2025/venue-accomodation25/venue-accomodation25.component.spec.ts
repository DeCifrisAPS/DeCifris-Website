import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueAccomodationComponent24 } from './venue-accomodation.component';

describe('VenueAccomodationComponent', () => {
  let component: VenueAccomodationComponent24;
  let fixture: ComponentFixture<VenueAccomodationComponent24>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueAccomodationComponent24 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueAccomodationComponent24);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
