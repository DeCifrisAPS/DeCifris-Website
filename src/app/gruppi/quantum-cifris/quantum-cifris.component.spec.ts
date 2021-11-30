import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumCifrisComponent } from './quantum-cifris.component';

describe('QuantumCifrisComponent', () => {
  let component: QuantumCifrisComponent;
  let fixture: ComponentFixture<QuantumCifrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantumCifrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumCifrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
