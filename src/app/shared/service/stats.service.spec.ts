import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StatsService } from './stats.service';

describe('StatsService', () => {
  let service: StatsService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [StatsService]
  }));

  it('should be created', () => {
    service = TestBed.inject(StatsService);
    expect(service).toBeTruthy();
  });


  it('should have find function', () => {
    service = TestBed.inject(StatsService);
    expect(service.stats).toBeTruthy();
  });

});
