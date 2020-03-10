import { TestBed } from '@angular/core/testing';

import { weatherservice } from './weatherservice';

describe('DataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: weatherservice = TestBed.get(weatherservice);
    expect(service).toBeTruthy();
  });
});
