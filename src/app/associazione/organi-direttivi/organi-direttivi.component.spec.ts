import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiDirettiviComponent } from './organi-direttivi.component';

describe('OrganiDirettiviComponent', () => {
  let component: OrganiDirettiviComponent;
  let fixture: ComponentFixture<OrganiDirettiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiDirettiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiDirettiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
