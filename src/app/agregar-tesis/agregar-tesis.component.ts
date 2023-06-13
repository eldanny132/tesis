import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TesisService } from '../services/tesis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tesis',
  templateUrl: './agregar-tesis.component.html',
  styleUrls: ['./agregar-tesis.component.css']
})
export class AgregarTesisComponent {
  fileToUpload: File | null = null;
  tesis = new FormGroup({
    Titulo_de_tesis: new FormControl('', [Validators.required]),
    Nombre_alumno: new FormControl('', [Validators.required]),
    Nombre_alumno2: new FormControl('', [Validators.required]),
    Nombre_alumno3: new FormControl('', [Validators.required]),
    Director: new FormControl('', [Validators.required]),
    Codirector: new FormControl('', [Validators.required]),
    Sinodal: new FormControl('', [Validators.required]),
    Sinoda2: new FormControl('', [Validators.required]),
    Doc_soli_tema: new FormControl('', [Validators.required])
  });
  arraytesis: any[] = [];

  constructor(
    private router: Router,
    private tesisService: TesisService,
    private http: HttpClient
  ) {
    this.tesisService.getAllTesis().subscribe((data: any) => {
      this.arraytesis = data;
      console.log(this.tesis);
    });
  }

  agregartesis() {
    console.log(this.tesis.value);
    this.uploadFile()
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);
    console.log(this.fileToUpload)
  }

  uploadFile():any {
    if (this.fileToUpload) {
      const formData = new FormData();
      formData.append('file', this.fileToUpload);
      console.log(this.fileToUpload)
      console.log(formData)
      return false
      this.http.post('http://127.0.0.1:8000/api/upload', formData).subscribe(
        (response) => {
          /*this.tesisService.addTesis(this.tesis.value).subscribe((data: any) => {
            alert('Se ha registrado!!');
            //this.router.navigate(['/aulas']
          });*/
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
