import { TestBed } from '@angular/core/testing';

import { AgeCalculatorService } from './age-calculator.service';

describe('AgeCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgeCalculatorService = TestBed.get(AgeCalculatorService);
    expect(service).toBeTruthy();
  });
});
