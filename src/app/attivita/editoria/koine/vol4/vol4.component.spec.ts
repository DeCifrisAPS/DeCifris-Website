import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vol4Component } from './vol4.component';

describe('Vol4Component', () => {
  let component: Vol4Component;
  let fixture: ComponentFixture<Vol4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vol4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vol4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
