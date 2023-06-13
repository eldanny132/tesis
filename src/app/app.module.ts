import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarTesisComponent } from './agregar-tesis/agregar-tesis.component';
import { HistorialTesisComponent } from './historial-tesis/historial-tesis.component';
import { RegistroTesisComponent } from './registro-tesis/registro-tesis.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SolicitudPresentacionComponent } from './solicitud-presentacion/solicitud-presentacion.component';
import { PeticionPresentacionComponent } from './peticion-presentacion/peticion-presentacion.component';
import { FormatosComponent } from './formatos/formatos.component';
import { EditarEstatusTemaComponent } from './editar-estatus-tema/editar-estatus-tema.component';
import { EstatusPresentacionComponent } from './estatus-presentacion/estatus-presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AgregarTesisComponent,
    HistorialTesisComponent,
    RegistroTesisComponent,
    SolicitudPresentacionComponent,
    PeticionPresentacionComponent,
    FormatosComponent,
    EditarEstatusTemaComponent,
    EstatusPresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
