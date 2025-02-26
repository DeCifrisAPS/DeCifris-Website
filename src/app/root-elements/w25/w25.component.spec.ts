import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W25Component } from './w25.component';

describe('W25Component', () => {
  let component: W25Component;
  let fixture: ComponentFixture<W25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [W25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(W25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
