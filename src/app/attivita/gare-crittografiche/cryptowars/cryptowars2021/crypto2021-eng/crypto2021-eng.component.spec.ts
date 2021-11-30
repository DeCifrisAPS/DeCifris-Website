import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crypto2021EngComponent } from './crypto2021-eng.component';

describe('Crypto2021EngComponent', () => {
  let component: Crypto2021EngComponent;
  let fixture: ComponentFixture<Crypto2021EngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crypto2021EngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crypto2021EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
