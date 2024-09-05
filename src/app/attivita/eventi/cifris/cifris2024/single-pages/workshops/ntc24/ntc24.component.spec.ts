import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ntc24Component } from './ntc24.component';

describe('NtcComponent', () => {
  let component: Ntc24Component;
  let fixture: ComponentFixture<Ntc24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ntc24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ntc24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
