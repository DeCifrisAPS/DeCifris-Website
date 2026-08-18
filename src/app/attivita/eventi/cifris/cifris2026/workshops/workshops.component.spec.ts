import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDinner24Component } from './social-dinner24.component';

describe('SocialDinner24Component', () => {
  let component: SocialDinner24Component;
  let fixture: ComponentFixture<SocialDinner24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialDinner24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialDinner24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
