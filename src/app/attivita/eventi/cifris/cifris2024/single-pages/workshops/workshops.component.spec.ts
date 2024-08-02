import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsComponent24 } from './workshops.component';

describe('WorkshopsComponent', () => {
  let component: WorkshopsComponent24;
  let fixture: ComponentFixture<WorkshopsComponent24>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopsComponent24]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopsComponent24);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
