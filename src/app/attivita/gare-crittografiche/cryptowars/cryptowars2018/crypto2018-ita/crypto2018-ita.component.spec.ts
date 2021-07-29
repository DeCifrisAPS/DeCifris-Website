import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2018ItaComponent } from './crypto2018-ita.component';

describe('Crypto2018ItaComponent', () => {
  let component: Crypto2018ItaComponent;
  let fixture: ComponentFixture<Crypto2018ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2018ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2018ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
