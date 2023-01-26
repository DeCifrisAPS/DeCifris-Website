import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeAssociarsiComponent } from './come-associarsi.component';

describe('ComeAssociarsiComponent', () => {
  let component: ComeAssociarsiComponent;
  let fixture: ComponentFixture<ComeAssociarsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeAssociarsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeAssociarsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
