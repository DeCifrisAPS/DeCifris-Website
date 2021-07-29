import { TestBed } from '@angular/core/testing';

import { CryptowarsServiceService } from './cryptowars-service.service';

describe('CryptowarsServiceService', () => {
  let service: CryptowarsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptowarsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
