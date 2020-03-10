import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { weatherservice} from './weatherservice';
import { ApiWeatherComponent } from './weathercomponent/apiweather.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostApiService } from './postapi.service';
import { PostApiComponent } from './postcomponent/postapi.component';



@NgModule({
  declarations: [
    AppComponent,
    ApiWeatherComponent,
    PlantillasComponent,
    DashboardComponent,
    PostApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [weatherservice,PostApiService],
  bootstrap: [AppComponent,ApiWeatherComponent]
})
export class AppModule { }
