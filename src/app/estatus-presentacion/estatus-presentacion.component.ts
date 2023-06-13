import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TesisService } from '../services/tesis.service';

@Component({
  selector: 'app-estatus-presentacion',
  templateUrl: './estatus-presentacion.component.html',
  styleUrls: ['./estatus-presentacion.component.css']
})
export class EstatusPresentacionComponent {
  id: string = ''
  Tesis = new FormGroup({
    Titulo_de_tesis: new FormControl('', [Validators.required]),
    Nombre_alumno: new FormControl('', [Validators.required]),
    Nombre_alumno2: new FormControl('', [Validators.required]),
    Nombre_alumno3: new FormControl('', [Validators.required]),
    Director: new FormControl('', [Validators.required]),
    Codirector: new FormControl('', [Validators.required]),
    Sinodal: new FormControl('', [Validators.required]),
    Sinoda2: new FormControl('', [Validators.required]),
    Estatus_presentacion: new FormControl('', [Validators.required])
  })
  constructor(private router: Router, private tesisService: TesisService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      this.id = params['id']
      this.BuscarTesis(this.id)
    });
  }
  BuscarTesis(id: any) {
    this.tesisService.gettesis(id).subscribe((data: any) => {
      this.Tesis.patchValue(data);
    });
  }
  ModificarPresentacion() {
    this.tesisService.updateTesis(this.id, this.Tesis.value).subscribe((data: any) => {
      alert("Se ha Modificado!!")
      this.router.navigate(['/solicitud_presentacion'])
    })
  }
}
