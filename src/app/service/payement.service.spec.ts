import { TestBed, inject } from '@angular/core/testing';

import { PayementService } from './payement.service';

describe('PayementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayementService]
    });
  });

  it('should be created', inject([PayementService], (service: PayementService) => {
    expect(service).toBeTruthy();
  }));
});
