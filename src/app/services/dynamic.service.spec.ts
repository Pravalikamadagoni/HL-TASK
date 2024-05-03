import { TestBed } from '@angular/core/testing';

import { DynamicserviceService } from './dynamic.service';

describe('DynamicserviceService', () => {
  let service: DynamicserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
