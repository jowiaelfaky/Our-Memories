import { TestBed } from '@angular/core/testing';

import { Memory } from './memory';

describe('Memory', () => {
  let service: Memory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Memory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
