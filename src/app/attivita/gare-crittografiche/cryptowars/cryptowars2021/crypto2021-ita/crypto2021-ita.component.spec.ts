import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2021ItaComponent } from './crypto2021-ita.component';

describe('Crypto2021ItaComponent', () => {
  let component: Crypto2021ItaComponent;
  let fixture: ComponentFixture<Crypto2021ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2021ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2021ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
