import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2016EngComponent } from './crypto2016-eng.component';

describe('Crypto2016EngComponent', () => {
  let component: Crypto2016EngComponent;
  let fixture: ComponentFixture<Crypto2016EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2016EngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2016EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
