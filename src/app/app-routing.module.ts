import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'info', component: InfoComponent },
  { path: 'weather', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}