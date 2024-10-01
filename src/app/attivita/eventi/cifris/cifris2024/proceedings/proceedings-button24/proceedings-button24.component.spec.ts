import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedingsButton24Component } from './proceedings-button24.component';

describe('ProceedingsButton24Component', () => {
  let component: ProceedingsButton24Component;
  let fixture: ComponentFixture<ProceedingsButton24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceedingsButton24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedingsButton24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
