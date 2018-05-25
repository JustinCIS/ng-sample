import { TestBed, inject } from '@angular/core/testing';

import { AppComponentService } from './app.component.service';

describe('AppComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponentService]
    });
  });

  it('should be created', inject([AppComponentService], (service: AppComponentService) => {
    expect(service).toBeTruthy();
  }));
});
