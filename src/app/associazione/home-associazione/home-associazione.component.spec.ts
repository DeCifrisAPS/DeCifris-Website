import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAssociazioneComponent } from './home-associazione.component';

describe('HomeAssociazioneComponent', () => {
  let component: HomeAssociazioneComponent;
  let fixture: ComponentFixture<HomeAssociazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAssociazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAssociazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
