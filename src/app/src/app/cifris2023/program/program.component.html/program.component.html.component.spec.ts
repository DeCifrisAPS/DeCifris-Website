import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Program.Component.HtmlComponent } from './program.component.html.component';

describe('Program.Component.HtmlComponent', () => {
  let component: Program.Component.HtmlComponent;
  let fixture: ComponentFixture<Program.Component.HtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Program.Component.HtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Program.Component.HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
