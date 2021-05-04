import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class Addticket1Service {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(tickets1): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/tickets1', tickets1);
    }
    types1GpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/types1');
    }
    severity1GpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severity1');
    }
}