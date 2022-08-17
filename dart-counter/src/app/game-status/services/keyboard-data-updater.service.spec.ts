import { TestBed } from '@angular/core/testing';

import { KeyboardDataUpdaterService } from './keyboard-data-updater.service';

describe('KeyboardDataUpdaterService', () => {
  let service: KeyboardDataUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardDataUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
