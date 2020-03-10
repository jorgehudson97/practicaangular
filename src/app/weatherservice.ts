import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Weather } from './weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class weatherservice {

  constructor(private http: HttpClient) { 
    console.log("El Servicio funciona");
  }

  getData(){
    return this.http.get<Weather[]>('http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
    
  }
}
