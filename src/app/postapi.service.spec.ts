import { TestBed } from '@angular/core/testing';
import { PostApiService } from './postapi.service';

describe('SegundaapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostApiService = TestBed.get(PostApiService);
    expect(service).toBeTruthy();
  });
});
