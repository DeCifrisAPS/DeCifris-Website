import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trends25Component } from './trends25.component';

describe('Trends25Component', () => {
  let component: Trends25Component;
  let fixture: ComponentFixture<Trends25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trends25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trends25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
