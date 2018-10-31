import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';

//modulo mapa
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAThJIlTkBgZUB4UiQJJ-MQJgfvAMKDk8A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
