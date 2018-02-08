import { TestBed, inject } from '@angular/core/testing';

import { NativeGuardService } from './native-guard.service';

describe('NativeGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeGuardService]
    });
  });

  it('should be created', inject([NativeGuardService], (service: NativeGuardService) => {
    expect(service).toBeTruthy();
  }));
});
