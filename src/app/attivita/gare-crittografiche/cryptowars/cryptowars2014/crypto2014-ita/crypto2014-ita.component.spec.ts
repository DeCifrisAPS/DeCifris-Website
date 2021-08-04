import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2014ItaComponent } from './crypto2014-ita.component';

describe('Crypto2014ItaComponent', () => {
  let component: Crypto2014ItaComponent;
  let fixture: ComponentFixture<Crypto2014ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2014ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2014ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
