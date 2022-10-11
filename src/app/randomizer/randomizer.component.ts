import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit {

    public generatedNum : number | undefined;

    public emittedMessage : boolean = false;

    @Output() generatedNumEvent : EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    public generateNum() : void {
        this.generatedNum = this.genNum(1000000, 9999999);
        this.showTempEmitMessage();
    }

    private showTempEmitMessage() : void {
        this.emittedMessage = true;
        setTimeout(() => {
            this.emittedMessage = false;
            this.generatedNumEvent.emit(this.generatedNum);
        }, 500);
    }

    private genNum(from : number, to : number) : number {
        return Math.round(Math.random() * (to - from) + from);
    }

}
