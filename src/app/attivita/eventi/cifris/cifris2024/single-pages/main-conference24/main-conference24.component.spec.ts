import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConference24Component } from './main-conference24.component';

describe('MainConference24Component', () => {
  let component: MainConference24Component;
  let fixture: ComponentFixture<MainConference24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainConference24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainConference24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
