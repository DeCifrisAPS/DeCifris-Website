import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosizioniRicercaComponent } from './posizioni-ricerca.component';

describe('PosizioniRicercaComponent', () => {
  let component: PosizioniRicercaComponent;
  let fixture: ComponentFixture<PosizioniRicercaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosizioniRicercaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosizioniRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
