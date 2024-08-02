import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrariScientificSession24Component } from './orari-scientific-session24.component';

describe('OrariScientificSession24Component', () => {
  let component: OrariScientificSession24Component;
  let fixture: ComponentFixture<OrariScientificSession24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrariScientificSession24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrariScientificSession24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
