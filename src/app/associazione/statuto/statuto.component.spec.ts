import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutoComponent } from './statuto.component';

describe('StatutoComponent', () => {
  let component: StatutoComponent;
  let fixture: ComponentFixture<StatutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
