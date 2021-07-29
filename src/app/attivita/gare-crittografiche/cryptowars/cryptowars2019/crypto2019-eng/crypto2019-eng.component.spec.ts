import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2019EngComponent } from './crypto2019-eng.component';

describe('Crypto2019EngComponent', () => {
  let component: Crypto2019EngComponent;
  let fixture: ComponentFixture<Crypto2019EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2019EngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2019EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
