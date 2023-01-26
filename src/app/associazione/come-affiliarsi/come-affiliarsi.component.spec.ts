import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeAffiliarsiComponent } from './come-affiliarsi.component';

describe('ComeAffiliarsiComponent', () => {
  let component: ComeAffiliarsiComponent;
  let fixture: ComponentFixture<ComeAffiliarsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeAffiliarsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeAffiliarsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
