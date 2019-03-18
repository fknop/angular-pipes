import { Injectable } from '@angular/core';

import { AgeFromDate } from "./age-from-date-string";


@Injectable({
  providedIn: 'root'
})
export class AgeCalculatorService {

  constructor() { }

  getAge(dt: Date): number {

    let ageFromDate = new AgeFromDate(dt).age;
    return ageFromDate;
  }
}
