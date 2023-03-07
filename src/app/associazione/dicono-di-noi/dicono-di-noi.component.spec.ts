import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiconoDiNoiComponent } from './dicono-di-noi.component';

describe('DiconoDiNoiComponent', () => {
  let component: DiconoDiNoiComponent;
  let fixture: ComponentFixture<DiconoDiNoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiconoDiNoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiconoDiNoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
