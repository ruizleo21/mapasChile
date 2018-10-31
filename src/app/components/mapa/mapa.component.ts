import { Component, OnInit } from '@angular/core';
import { ComunasService } from '../../services/comunas.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  title: string = 'Mapas comunas Chile';
  lat: number;
  lng: number;
  zoom:number = 9;

  geoJson: any;
  constructor(private comunas: ComunasService) { }

  ngOnInit() {
    this.getGeoJsonComunas();
  }

  getGeoJsonComunas(){
    this.comunas.getGeoJsonComunas().subscribe(comunas =>{
      this.geoJson=comunas;
      const coordinates = this.geoJson.features[0].geometry.coordinates;
      this.lng=coordinates[0][0][0];
      this.lat=coordinates[0][0][1];
    });
  }

  

}
