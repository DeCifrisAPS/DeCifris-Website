import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2015EngComponent } from './crypto2015-eng.component';

describe('Crypto2015EngComponent', () => {
  let component: Crypto2015EngComponent;
  let fixture: ComponentFixture<Crypto2015EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2015EngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2015EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
