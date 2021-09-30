import { TestBed } from '@angular/core/testing';

import { SharedItemsDataService } from './shared-items-data.service';

describe('SharedItemsDataService', () => {
  let service: SharedItemsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedItemsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
