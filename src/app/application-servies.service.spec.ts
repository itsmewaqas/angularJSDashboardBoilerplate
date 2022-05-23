import { TestBed } from '@angular/core/testing';

import { ApplicationServiesService } from './application-servies.service';

describe('ApplicationServiesService', () => {
  let service: ApplicationServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
