import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2018EngComponent } from './crypto2018-eng.component';

describe('Crypto2018EngComponent', () => {
  let component: Crypto2018EngComponent;
  let fixture: ComponentFixture<Crypto2018EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2018EngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2018EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
