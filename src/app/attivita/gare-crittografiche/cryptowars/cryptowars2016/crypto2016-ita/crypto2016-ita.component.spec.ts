import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2016ItaComponent } from './crypto2016-ita.component';

describe('Crypto2016ItaComponent', () => {
  let component: Crypto2016ItaComponent;
  let fixture: ComponentFixture<Crypto2016ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2016ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2016ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
