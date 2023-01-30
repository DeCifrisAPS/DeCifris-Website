import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageTirociniComponent } from './stage-tirocini.component';

describe('StageTirociniComponent', () => {
  let component: StageTirociniComponent;
  let fixture: ComponentFixture<StageTirociniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageTirociniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageTirociniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
