import { TestBed, inject } from '@angular/core/testing';

import { HttpBaseService } from './http-base.service';

describe('HttpBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBaseService]
    });
  });

  it('should be created', inject([HttpBaseService], (service: HttpBaseService) => {
    expect(service).toBeTruthy();
  }));
});
