import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MutantService } from './mutant.service';

describe('MutantService', () => {
  let service: MutantService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MutantService]
  }));

  it('should be created', () => {
    service = TestBed.inject(MutantService);
    expect(service).toBeTruthy();
  });


  it('should have find function', () => {
    service = TestBed.inject(MutantService);
    expect(service.mutant).toBeTruthy();
  });

});
