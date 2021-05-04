import { Component, OnInit } from '@angular/core';
import { Addtypes1Service } from './addtypes1.service';

@Component({
  selector: 'app-addtypes1',
  templateUrl: './addtypes1.component.html',
  styleUrls: ['./addtypes1.component.scss'],
})

export class Addtypes1Component implements OnInit {
    public types1 = {
        name: '',
        description: '',
    }

    constructor (
        private addtypes1Service: Addtypes1Service,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addtypes1Service.GpCreate(this.types1).subscribe(data => {
            this.types1.name = ''
 	 	this.types1.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}