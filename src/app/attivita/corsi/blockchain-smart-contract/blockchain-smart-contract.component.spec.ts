import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainSmartContractComponent } from './blockchain-smart-contract.component';

describe('BlockchainSmartContractComponent', () => {
  let component: BlockchainSmartContractComponent;
  let fixture: ComponentFixture<BlockchainSmartContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainSmartContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainSmartContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
