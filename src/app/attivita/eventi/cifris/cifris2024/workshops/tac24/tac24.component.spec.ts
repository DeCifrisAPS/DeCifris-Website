import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tac24Component } from './tac24.component';

describe('Tac24Component', () => {
  let component: Tac24Component;
  let fixture: ComponentFixture<Tac24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tac24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tac24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
