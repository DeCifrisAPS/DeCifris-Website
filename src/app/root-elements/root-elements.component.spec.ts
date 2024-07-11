import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootElementsComponent } from './root-elements.component';

describe('RootElementsComponent', () => {
  let component: RootElementsComponent;
  let fixture: ComponentFixture<RootElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
