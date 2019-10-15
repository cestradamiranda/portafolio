import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';

import { WeatherService } from './shared/service/weather-data.service';
import { MessageService } from './shared/service/message.service';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AboutComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [WeatherService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
