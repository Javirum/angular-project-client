import { TestBed, inject } from '@angular/core/testing';

import { RequireAmonGuardService } from './require-amon-guard.service';

describe('RequireAmonGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAmonGuardService]
    });
  });

  it('should be created', inject([RequireAmonGuardService], (service: RequireAmonGuardService) => {
    expect(service).toBeTruthy();
  }));
});
