import { Component } from '@angular/core';
import { TesisService } from '../services/tesis.service';

@Component({
  selector: 'app-solicitud-presentacion',
  templateUrl: './solicitud-presentacion.component.html',
  styleUrls: ['./solicitud-presentacion.component.css']
})
export class SolicitudPresentacionComponent {
  Tesis:any[]=[]
  TesisTemp:any[]=[]
  constructor(private tesisService:TesisService) {
    this.ObtenerTesis();
  }
  ObtenerTesis(Estatus:string = "", Estatus_presentacion:string = ""){

    this.tesisService.getAllTesis(Estatus, Estatus_presentacion).subscribe((data:any)=>{
      this.Tesis=data
      this.TesisTemp=data
    })
  }
  searchTesis(search:any ,event:any){
    const matchingPropiedades = this.TesisTemp.filter((u:any) => 
      u.Titulo_de_tesis.toLowerCase().includes(search.toLowerCase()) || 
      u.Nombre_alumno.toLowerCase().includes(search.toLowerCase())||
      u.Nombre_alumno2.toLowerCase().includes(search.toLowerCase())||
      u.Nombre_alumno3.toLowerCase().includes(search.toLowerCase())||
      u.Director.toLowerCase().includes(search.toLowerCase())||
      u.Codirector.toLowerCase().includes(search.toLowerCase())||
      u.Sinodal.toLowerCase().includes(search.toLowerCase())||
      u.Sinoda2.toLowerCase().includes(search.toLowerCase()));

    this.Tesis = matchingPropiedades
  }
  onSelectChangeEstatus(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;
    let valorseleccionado = ""
    if(selectedValue != "0") valorseleccionado = selectedValue
    this.ObtenerTesis("", valorseleccionado)
  }

  BuscarTesis(id: any) {
    this.tesisService.gettesis(id).subscribe((data: any) => {
      this.Tesis = data
    });
    this.ObtenerTesis();
  }
}
