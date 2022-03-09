import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecifrisTrendComponent } from './decifris-trend.component';

describe('DecifrisTrendComponent', () => {
  let component: DecifrisTrendComponent;
  let fixture: ComponentFixture<DecifrisTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecifrisTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecifrisTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
