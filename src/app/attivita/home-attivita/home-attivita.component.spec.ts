import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAttivitaComponent } from './home-attivita.component';

describe('HomeAttivitaComponent', () => {
  let component: HomeAttivitaComponent;
  let fixture: ComponentFixture<HomeAttivitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAttivitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAttivitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
