import { TestBed } from '@angular/core/testing';

import { BaseHttpClientService as BaseHttpClientService } from './base-http-client.service';

describe('BaseHttpClientServiceService', () => {
  let service: BaseHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
