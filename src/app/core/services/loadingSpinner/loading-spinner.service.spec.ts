import { TestBed } from '@angular/core/testing';

import { LoadingSpinnerService } from './loading-spinner.service';

describe('LoadingSpinnerService', () => {
  let service: LoadingSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('state start', () => {
    service.start();
    expect(service.state.getValue()).toEqual(true);
  });
  it('state complete', () => {
    service.complete();
    expect(service.state.getValue()).toEqual(false);
  });
});
