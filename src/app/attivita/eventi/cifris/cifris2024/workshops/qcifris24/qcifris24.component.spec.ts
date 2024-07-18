import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qcifris24Component } from './qcifris24.component';

describe('Qcifris24Component', () => {
  let component: Qcifris24Component;
  let fixture: ComponentFixture<Qcifris24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qcifris24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qcifris24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
