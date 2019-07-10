import { TestBed, inject } from '@angular/core/testing';

import { BacHaitienService } from './bac-haitien.service';

describe('BacHaitienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BacHaitienService]
    });
  });

  it('should be created', inject([BacHaitienService], (service: BacHaitienService) => {
    expect(service).toBeTruthy();
  }));
});
