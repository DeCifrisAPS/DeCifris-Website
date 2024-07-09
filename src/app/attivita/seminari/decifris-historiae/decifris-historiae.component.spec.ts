import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecifrisHistoriaeComponent } from './decifris-historiae.component';

describe('DecifrisHistoriaeComponent', () => {
  let component: DecifrisHistoriaeComponent;
  let fixture: ComponentFixture<DecifrisHistoriaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecifrisHistoriaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecifrisHistoriaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
