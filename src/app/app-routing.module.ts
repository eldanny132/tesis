import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarTesisComponent } from './agregar-tesis/agregar-tesis.component';
import { HistorialTesisComponent } from './historial-tesis/historial-tesis.component';
import { RegistroTesisComponent } from './registro-tesis/registro-tesis.component';
import { SolicitudPresentacionComponent } from './solicitud-presentacion/solicitud-presentacion.component';
import { PeticionPresentacionComponent } from './peticion-presentacion/peticion-presentacion.component';
import { EditarEstatusTemaComponent } from './editar-estatus-tema/editar-estatus-tema.component';
import { EstatusPresentacionComponent } from './estatus-presentacion/estatus-presentacion.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/principal' ,pathMatch:'full'},
  {path:"principal", component:PrincipalComponent}
  ,{path:"agregar_tesis", component:AgregarTesisComponent}
  ,{path:"historial_tesis", component:HistorialTesisComponent},
  {path:"registro_tesis", component:RegistroTesisComponent},
  {path:"solicitud_presentacion", component:SolicitudPresentacionComponent},
  {path:"peticion_presentacion", component:PeticionPresentacionComponent},
  {path:"editar_estatus_tema/:id", component:EditarEstatusTemaComponent},
  {path:"editar_estatus_presentacion/:id", component:EstatusPresentacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
