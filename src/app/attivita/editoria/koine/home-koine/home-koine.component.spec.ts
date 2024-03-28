import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKoineComponent } from './home-koine.component';

describe('HomeKoineComponent', () => {
  let component: HomeKoineComponent;
  let fixture: ComponentFixture<HomeKoineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKoineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKoineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
