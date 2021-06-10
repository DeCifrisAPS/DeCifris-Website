import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptowarsComponent } from './cryptowars.component';

describe('CryptowarsComponent', () => {
  let component: CryptowarsComponent;
  let fixture: ComponentFixture<CryptowarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptowarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptowarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
