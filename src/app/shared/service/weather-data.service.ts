import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { map, catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root',
  })

export class WeatherService {

    private endPoint = 'https://api.sunrise-sunset.org/json?lat=45.501689&lng=-73.567256&date=today';
    constructor(private http: HttpClient) { }

    public getDataService(api: string): Observable<any> {
        const fullUrl = this.endPoint + api;

        return this.http.get<any>(fullUrl).pipe(
            map(response => response), catchError(err => { throw(err); } )
        );
    }



}
