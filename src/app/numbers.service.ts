import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

    public evenNumbers: number[] = [];
    public oddNumbers: number[] = [];
    
    constructor() { }

    public addNumber(num: number) : void {
        if(num % 2 == 0) this.evenNumbers.push(num);
        else this.oddNumbers.push(num);
    }
}
