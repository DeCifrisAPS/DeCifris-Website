import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2011EngComponent } from './crypto2011-eng.component';

describe('Crypto2011EngComponent', () => {
  let component: Crypto2011EngComponent;
  let fixture: ComponentFixture<Crypto2011EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2011EngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2011EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
