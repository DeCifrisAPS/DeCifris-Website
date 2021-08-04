import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimmetricaComponent } from './simmetrica.component';

describe('SimmetricaComponent', () => {
  let component: SimmetricaComponent;
  let fixture: ComponentFixture<SimmetricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimmetricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimmetricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
