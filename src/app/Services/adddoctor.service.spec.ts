import { TestBed } from '@angular/core/testing';

import { AdddoctorService } from './adddoctor.service';

describe('AdddoctorService', () => {
  let service: AdddoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdddoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
