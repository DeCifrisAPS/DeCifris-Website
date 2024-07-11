import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecifrisEruditorumComponent } from './decifris-eruditorum.component';

describe('DecifrisEruditorumComponent', () => {
  let component: DecifrisEruditorumComponent;
  let fixture: ComponentFixture<DecifrisEruditorumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecifrisEruditorumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecifrisEruditorumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
