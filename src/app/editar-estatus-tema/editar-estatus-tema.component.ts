import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TesisService } from '../services/tesis.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-estatus-tema',
  templateUrl: './editar-estatus-tema.component.html',
  styleUrls: ['./editar-estatus-tema.component.css']
})
export class EditarEstatusTemaComponent implements OnInit {
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
    Estatus_tema: new FormControl('', [Validators.required])
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
  ModificarTesis() {
    this.tesisService.updateTesis(this.id, this.Tesis.value).subscribe((data: any) => {
      alert("Se ha Modificado!!")
      this.router.navigate(['/registro_tesis'])
    })
  }

}
