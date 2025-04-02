import { TestBed } from '@angular/core/testing';

import { SpaceXApiService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let service: SpaceXApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
