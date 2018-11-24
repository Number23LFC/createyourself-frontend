import { TestBed } from '@angular/core/testing';

import { CelebrationService } from './celebration.service';

describe('CelebrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelebrationService = TestBed.get(CelebrationService);
    expect(service).toBeTruthy();
  });
});
