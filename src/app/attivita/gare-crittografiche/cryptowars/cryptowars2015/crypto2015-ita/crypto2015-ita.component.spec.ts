import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2015ItaComponent } from './crypto2015-ita.component';

describe('Crypto2015ItaComponent', () => {
  let component: Crypto2015ItaComponent;
  let fixture: ComponentFixture<Crypto2015ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2015ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2015ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
