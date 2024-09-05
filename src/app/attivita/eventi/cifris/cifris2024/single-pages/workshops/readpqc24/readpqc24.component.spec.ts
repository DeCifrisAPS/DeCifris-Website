import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Readpqc24Component } from './readpqc24.component';

describe('Readpqc24Component', () => {
  let component: Readpqc24Component;
  let fixture: ComponentFixture<Readpqc24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Readpqc24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Readpqc24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
