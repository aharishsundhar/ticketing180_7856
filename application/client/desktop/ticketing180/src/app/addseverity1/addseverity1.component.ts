import { Component, OnInit } from '@angular/core';
import { Addseverity1Service } from './addseverity1.service';

@Component({
  selector: 'app-addseverity1',
  templateUrl: './addseverity1.component.html',
  styleUrls: ['./addseverity1.component.scss'],
})

export class Addseverity1Component implements OnInit {
    public severity1 = {
        name: '',
        description: '',
    }

    constructor (
        private addseverity1Service: Addseverity1Service,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addseverity1Service.GpCreate(this.severity1).subscribe(data => {
            this.severity1.name = ''
 	 	this.severity1.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}