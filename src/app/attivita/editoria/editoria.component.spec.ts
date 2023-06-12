import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoriaComponent } from './editoria.component';

describe('EditoriaComponent', () => {
  let component: EditoriaComponent;
  let fixture: ComponentFixture<EditoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
