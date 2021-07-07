import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubblicaComponent } from './pubblica.component';

describe('PubblicaComponent', () => {
  let component: PubblicaComponent;
  let fixture: ComponentFixture<PubblicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubblicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubblicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
