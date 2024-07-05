import { TestBed } from '@angular/core/testing';

import { HotellistService } from './hotellist.service';

describe('HotellistService', () => {
  let service: HotellistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotellistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
