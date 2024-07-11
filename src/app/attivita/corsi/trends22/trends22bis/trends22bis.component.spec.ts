import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trends22bisComponent } from './trends22bis.component';

describe('Trends22bisComponent', () => {
  let component: Trends22bisComponent;
  let fixture: ComponentFixture<Trends22bisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trends22bisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trends22bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
