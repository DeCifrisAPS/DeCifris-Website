import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshops24Component } from './workshops24.component';

describe('WorkshopsComponent', () => {
  let component: Workshops24Component;
  let fixture: ComponentFixture<Workshops24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workshops24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workshops24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
