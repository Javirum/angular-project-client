import { TestBed, inject } from '@angular/core/testing';

import { SearchEventsService } from './search-events.service';

describe('SearchEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchEventsService]
    });
  });

  it('should be created', inject([SearchEventsService], (service: SearchEventsService) => {
    expect(service).toBeTruthy();
  }));
});
