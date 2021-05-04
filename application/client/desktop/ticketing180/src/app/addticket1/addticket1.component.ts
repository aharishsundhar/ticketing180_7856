import { Component, OnInit } from '@angular/core';
import { Addticket1Service } from './addticket1.service';

@Component({
  selector: 'app-addticket1',
  templateUrl: './addticket1.component.html',
  styleUrls: ['./addticket1.component.scss'],
})

export class Addticket1Component implements OnInit {
    public tickets1 = {
        name: '',
        description: '',
        groups: '',
        types: '',
        severity: '',
    }

    constructor (
        private addticket1Service: Addticket1Service,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addticket1Service.GpCreate(this.tickets1).subscribe(data => {
            this.tickets1.name = ''
 	 	this.tickets1.description = ''
 	 	this.tickets1.groups = ''
 	 	this.tickets1.types = ''
 	 	this.tickets1.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}