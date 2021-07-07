import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicaComponent } from './classica.component';

describe('ClassicaComponent', () => {
  let component: ClassicaComponent;
  let fixture: ComponentFixture<ClassicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
