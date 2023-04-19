import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCifris23Component } from './home-cifris23.component';

describe('HomeCifris23Component', () => {
  let component: HomeCifris23Component;
  let fixture: ComponentFixture<HomeCifris23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCifris23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCifris23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
