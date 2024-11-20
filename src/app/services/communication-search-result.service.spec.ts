import { TestBed } from '@angular/core/testing';

import { CommunicationSearchResultService } from './communication-search-result.service';

describe('CommunicationSearchResultService', () => {
  let service: CommunicationSearchResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationSearchResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
