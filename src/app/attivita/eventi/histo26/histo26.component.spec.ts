import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Histo26Component } from './histo26.component';

describe('Histo26Component', () => {
  let component: Histo26Component;
  let fixture: ComponentFixture<Histo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Histo26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Histo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
