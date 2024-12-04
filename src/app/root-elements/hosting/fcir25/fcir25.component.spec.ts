import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fcir25Component } from './fcir25.component';

describe('Fcir25Component', () => {
  let component: Fcir25Component;
  let fixture: ComponentFixture<Fcir25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fcir25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fcir25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
