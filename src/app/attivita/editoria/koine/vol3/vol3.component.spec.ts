import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vol3Component } from './vol3.component';

describe('Vol3Component', () => {
  let component: Vol3Component;
  let fixture: ComponentFixture<Vol3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vol3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vol3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
