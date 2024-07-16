import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymcryptComponent } from './symcrypt.component';

describe('SymcryptComponent', () => {
  let component: SymcryptComponent;
  let fixture: ComponentFixture<SymcryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymcryptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymcryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
