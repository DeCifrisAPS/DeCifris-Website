import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modcrypto26Component } from './modcrypto26.component';

describe('Modcrypto26Component', () => {
  let component: Modcrypto26Component;
  let fixture: ComponentFixture<Modcrypto26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modcrypto26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modcrypto26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
