import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoineComponent } from './koine.component';

describe('KoineComponent', () => {
  let component: KoineComponent;
  let fixture: ComponentFixture<KoineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
