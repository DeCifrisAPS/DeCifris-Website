import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamcComponent } from './yamc.component';

describe('YamcComponent', () => {
  let component: YamcComponent;
  let fixture: ComponentFixture<YamcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YamcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
