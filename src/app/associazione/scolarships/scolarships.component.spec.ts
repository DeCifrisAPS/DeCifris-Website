import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolarshipsComponent } from './scolarships.component';

describe('ScolarshipsComponent', () => {
  let component: ScolarshipsComponent;
  let fixture: ComponentFixture<ScolarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScolarshipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScolarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
