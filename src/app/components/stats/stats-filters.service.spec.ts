import { TestBed, inject } from '@angular/core/testing';

import { StatsFiltersService } from './stats-filters.service';

describe('StatsFiltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatsFiltersService]
    });
  });

  it('should be created', inject([StatsFiltersService], (service: StatsFiltersService) => {
    expect(service).toBeTruthy();
  }));
});
