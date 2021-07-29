import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2020ItaComponent } from './crypto2020-ita.component';

describe('Crypto2020ItaComponent', () => {
  let component: Crypto2020ItaComponent;
  let fixture: ComponentFixture<Crypto2020ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2020ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2020ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
