import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sum(liczba1:number, liczba2:number) :number { 
     return liczba1 + liczba2;
    }

  sub(liczba1:number, liczba2:number) :number { 
      return liczba1 - liczba2;
    }

  mul( liczba1:number, liczba2:number) :number { 
      return liczba1 * liczba2;
    }

  div( liczba1:number, liczba2:number) :number { 
    if(liczba2 != 0)
      return liczba1 / liczba2;
    else { 
      alert("Nie dziel przez 0!");
      return 0;
    }
  }
}
