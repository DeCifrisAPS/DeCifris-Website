import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centotesi20172024Component } from './centotesi20172024.component';

describe('Centotesi20172024Component', () => {
  let component: Centotesi20172024Component;
  let fixture: ComponentFixture<Centotesi20172024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Centotesi20172024Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Centotesi20172024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
