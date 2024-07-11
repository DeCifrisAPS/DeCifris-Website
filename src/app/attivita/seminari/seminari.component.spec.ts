import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariComponent } from './seminari.component';

describe('SeminariLocaliComponent', () => {
  let component: SeminariComponent;
  let fixture: ComponentFixture<SeminariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
