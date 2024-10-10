import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ixh24Component } from './ixh24.component';

describe('Ixh24Component', () => {
  let component: Ixh24Component;
  let fixture: ComponentFixture<Ixh24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ixh24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ixh24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
