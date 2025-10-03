import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ixh25Component } from './ixh25.component';

describe('Ixh25Component', () => {
  let component: Ixh25Component;
  let fixture: ComponentFixture<Ixh25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ixh25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ixh25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
