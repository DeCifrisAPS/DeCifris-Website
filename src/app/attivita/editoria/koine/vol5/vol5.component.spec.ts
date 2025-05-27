import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vol5Component } from './vol5.component';

describe('Vol5Component', () => {
  let component: Vol5Component;
  let fixture: ComponentFixture<Vol5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vol5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vol5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
