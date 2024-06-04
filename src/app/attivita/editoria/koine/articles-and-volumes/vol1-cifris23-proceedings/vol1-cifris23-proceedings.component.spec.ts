import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vol1Cifris23ProceedingsComponent } from './vol1-cifris23-proceedings.component';

describe('Vol1Cifris23ProceedingsComponent', () => {
  let component: Vol1Cifris23ProceedingsComponent;
  let fixture: ComponentFixture<Vol1Cifris23ProceedingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vol1Cifris23ProceedingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vol1Cifris23ProceedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
