import { Component } from '@angular/core';
import { TesisService } from '../services/tesis.service';

@Component({
  selector: 'app-registro-tesis',
  templateUrl: './registro-tesis.component.html',
  styleUrls: ['./registro-tesis.component.css']
})
export class RegistroTesisComponent {
  Tesis: any[] = []
  TesisTemp: any[] = []
  constructor(private tesisService: TesisService) {
    this.ObtenerTesis();
  }
  ObtenerTesis(Estatus: string = "") {

    this.tesisService.getAllTesis(Estatus).subscribe((data: any) => {
      this.Tesis = data
      this.TesisTemp = data
    })
  }
  searchTesis(search: any, event: any) {
    const matchingPropiedades = this.TesisTemp.filter((u: any) =>
      u.Titulo_de_tesis.toLowerCase().includes(search.toLowerCase()) ||
      u.Nombre_alumno.toLowerCase().includes(search.toLowerCase()) ||
      u.Nombre_alumno2.toLowerCase().includes(search.toLowerCase()) ||
      u.Nombre_alumno3.toLowerCase().includes(search.toLowerCase()) ||
      u.Director.toLowerCase().includes(search.toLowerCase()) ||
      u.Codirector.toLowerCase().includes(search.toLowerCase()) ||
      u.Sinodal.toLowerCase().includes(search.toLowerCase()) ||
      u.Sinoda2.toLowerCase().includes(search.toLowerCase()));

    //console.log(matchingUsers);

    this.Tesis = matchingPropiedades
  }
  onSelectChangeEstatus(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    let valorseleccionado = ""
    if (selectedValue != "0") valorseleccionado = selectedValue
    this.ObtenerTesis(valorseleccionado)
  }

  BuscarTesis(id: any) {
    this.tesisService.gettesis(id).subscribe((data: any) => {
      this.Tesis = data
    });
    this.ObtenerTesis();
  }

}
