import { Component, OnInit, Input } from '@angular/core';
import { weatherservice } from '../weatherservice';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent{
  
  @Input() template;

  datos = [];

  constructor(private weatherservice: weatherservice) {
    this.weatherservice.getData().subscribe(data => {
      this.datos = data;
    });
}
}
