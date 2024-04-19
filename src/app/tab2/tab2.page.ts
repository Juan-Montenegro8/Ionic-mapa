import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  public miUbicacion: any[] = [];

  async obtenerPosition(){
    const coordinates= await Geolocation.getCurrentPosition();
    this.miUbicacion =[{
      name:'mi ubicacion',
      let: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
      descripcion: 'mi ubicacion'
    }];
  }

}
