import { Component, OnInit } from '@angular/core';
import{ WeatherService } from '../shared/service/weather-data.service';

@Component({
    selector: 'app-weather',
    template: `
    <p>{{textWeather}}</p>
    `
})

export class WeatherComponent implements OnInit {

    public textWeather: string = 'No data'
    public errorText: string = 'Some Error';
    constructor(private serviceProvider: WeatherService) { }

    ngOnInit() {
        this.getDataFromService();
     }

     getDataFromService(){
         this.serviceProvider.getDataService("")
            .subscribe( data => {
                this.textWeather = JSON.stringify(data);
            }, (error) => {
                this.errorText = error;
            }

         );
     }
}
