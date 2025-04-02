import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCifris24Component } from './home-cifris24.component';

describe('HomeCifris24Component', () => {
  let component: HomeCifris24Component;
  let fixture: ComponentFixture<HomeCifris24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCifris24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCifris24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
