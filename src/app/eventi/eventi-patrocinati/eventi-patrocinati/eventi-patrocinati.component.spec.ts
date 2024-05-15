import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiPatrocinatiComponent } from './eventi-patrocinati.component';

describe('EventiPatrocinatiComponent', () => {
  let component: EventiPatrocinatiComponent;
  let fixture: ComponentFixture<EventiPatrocinatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventiPatrocinatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventiPatrocinatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
