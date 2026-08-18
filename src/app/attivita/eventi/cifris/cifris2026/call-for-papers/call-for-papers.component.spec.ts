import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForPapersComponent24 } from './call-for-papers.component';

describe('CallForPapersComponent24', () => {
  let component: CallForPapersComponent;
  let fixture: ComponentFixture<CallForPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallForPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
