import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2014EngComponent } from './crypto2014-eng.component';

describe('Crypto2014EngComponent', () => {
  let component: Crypto2014EngComponent;
  let fixture: ComponentFixture<Crypto2014EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2014EngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2014EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
