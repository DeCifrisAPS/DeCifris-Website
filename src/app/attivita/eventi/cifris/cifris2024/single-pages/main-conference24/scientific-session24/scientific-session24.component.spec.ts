import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificSession24Component } from './scientific-session24.component';

describe('ScientificSession24Component', () => {
  let component: ScientificSession24Component;
  let fixture: ComponentFixture<ScientificSession24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScientificSession24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientificSession24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
