import { TestBed, inject } from '@angular/core/testing';

import { App.ComponentService } from './app.component.service';

describe('App.ComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.ComponentService]
    });
  });

  it('should be created', inject([App.ComponentService], (service: App.ComponentService) => {
    expect(service).toBeTruthy();
  }));
});
