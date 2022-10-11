import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { NumbersService } from './numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @ViewChild('modal') modal : ModalComponent | undefined;
    public evenNumArray : number[];
    public oddNumArray : number[];

    constructor(private numbersService : NumbersService) {
        this.evenNumArray = numbersService.evenNumbers;
        this.oddNumArray = numbersService.oddNumbers;
    }

    public onNumberGenerate(num : number) : void {
        this.numbersService.addNumber(num);

        this.modal?.showModal('Generated a new number', `Result - ${num}`);
    }
}
