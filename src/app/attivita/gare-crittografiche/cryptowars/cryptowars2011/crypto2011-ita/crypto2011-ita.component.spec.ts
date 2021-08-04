import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2011ItaComponent } from './crypto2011-ita.component';

describe('Crypto2011ItaComponent', () => {
  let component: Crypto2011ItaComponent;
  let fixture: ComponentFixture<Crypto2011ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2011ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2011ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
