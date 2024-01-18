import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForWorkshopsComponent24 } from './call-for-workshops.component';

describe('CallForWorkshopsComponent24', () => {
  let component: CallForWorkshopsComponent;
  let fixture: ComponentFixture<CallForWorkshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallForWorkshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
