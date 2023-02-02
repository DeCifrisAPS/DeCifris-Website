import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociarsiComponent } from './associarsi.component';

describe('AssociarsiComponent', () => {
  let component: AssociarsiComponent;
  let fixture: ComponentFixture<AssociarsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociarsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociarsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
