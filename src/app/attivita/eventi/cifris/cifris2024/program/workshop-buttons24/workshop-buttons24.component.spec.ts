import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopButtons24Component } from './workshop-buttons24.component';

describe('WorkshopButtons24Component', () => {
  let component: WorkshopButtons24Component;
  let fixture: ComponentFixture<WorkshopButtons24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopButtons24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopButtons24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
