import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComitatiComponent } from './comitati.component';

describe('ComitatiComponent', () => {
  let component: ComitatiComponent;
  let fixture: ComponentFixture<ComitatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComitatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
