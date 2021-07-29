import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2020EngComponent } from './crypto2020-eng.component';

describe('Crypto2020EngComponent', () => {
  let component: Crypto2020EngComponent;
  let fixture: ComponentFixture<Crypto2020EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2020EngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2020EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
