import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensourceStatementComponent } from './opensource-statement.component';

describe('OpensourceStatementComponent', () => {
  let component: OpensourceStatementComponent;
  let fixture: ComponentFixture<OpensourceStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpensourceStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpensourceStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
