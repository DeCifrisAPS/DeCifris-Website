import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAndVolumesComponent } from './articles-and-volumes.component';

describe('ArticlesAndVolumesComponent', () => {
  let component: ArticlesAndVolumesComponent;
  let fixture: ComponentFixture<ArticlesAndVolumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesAndVolumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAndVolumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
