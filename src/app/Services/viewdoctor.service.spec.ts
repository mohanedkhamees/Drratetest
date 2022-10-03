import { TestBed } from '@angular/core/testing';

import { ViewdoctorService } from './viewdoctor.service';

describe('ViewdoctorService', () => {
  let service: ViewdoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewdoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
