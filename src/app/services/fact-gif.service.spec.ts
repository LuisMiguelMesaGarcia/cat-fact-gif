import { TestBed } from '@angular/core/testing';

import { FactGifService } from './fact-gif.service';

describe('FactGifService', () => {
  let service: FactGifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactGifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
