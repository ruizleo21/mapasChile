import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComunasService {
  public url = 'http://localhost:3000/Distrito8';
  constructor(private http: HttpClient) { }

  getGeoJsonComunas(){
    return this.http.get(this.url)
    .pipe(map(data=> data));
  }
}
