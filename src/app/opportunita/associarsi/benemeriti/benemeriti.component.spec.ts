import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenemeritiComponent } from './benemeriti.component';

describe('BenemeritiComponent', () => {
  let component: BenemeritiComponent;
  let fixture: ComponentFixture<BenemeritiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenemeritiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenemeritiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
