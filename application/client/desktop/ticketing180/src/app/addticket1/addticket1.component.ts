import { Component, OnInit } from '@angular/core';
import { Addticket1Service } from './addticket1.service';

@Component({
  selector: 'app-addticket1',
  templateUrl: './addticket1.component.html',
  styleUrls: ['./addticket1.component.scss'],
})

export class Addticket1Component implements OnInit {
    types1itemArray: any = [];
    severity1itemArray: any = [];
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
    types1GpGetAllValues() {
        this.addticket1Service.types1GpGetAllValues().subscribe(data => {
            this.types1itemArray = data;
        },
        error => {
            console.log('Error', error);
        });
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
    severity1GpGetAllValues() {
        this.addticket1Service.severity1GpGetAllValues().subscribe(data => {
            this.severity1itemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}