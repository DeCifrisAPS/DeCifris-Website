import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvegnoUmiComponent } from './convegno-umi.component';

describe('ConvegnoUmiComponent', () => {
  let component: ConvegnoUmiComponent;
  let fixture: ComponentFixture<ConvegnoUmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvegnoUmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvegnoUmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
