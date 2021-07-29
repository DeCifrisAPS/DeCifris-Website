import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2019ItaComponent } from './crypto2019-ita.component';

describe('Crypto2019ItaComponent', () => {
  let component: Crypto2019ItaComponent;
  let fixture: ComponentFixture<Crypto2019ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2019ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2019ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
