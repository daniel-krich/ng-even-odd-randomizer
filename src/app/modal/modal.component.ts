import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    public displayModal : string = 'none';
    public displayCaption : string | undefined;
    public displayMessage : string | undefined;

    constructor() { }

    ngOnInit(): void {
        
    }

    public showModal(caption: string, message: string): void {
        this.displayModal = 'block';
        this.displayCaption = caption;
        this.displayMessage = message;
    }

    public closeModal(): void {
        this.displayModal = 'none';
    }

}
