import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class TesisService {
    api:string = 'http://localhost:8000/api/'
    constructor(private http:HttpClient){

    }

    /**
     * ! OBTENER TODAS LAS TESIS
     */
    getAllTesis(Estatus:string="", Estatus_presentacion:string=""):Observable<any>{

        return this.http.get<any>(`${this.api}tesis?Estatus_tema[eq]=${Estatus}&Estatus_presentacion[eq]=${Estatus_presentacion}`)

    }

    /**
     * ! AGREGAR TESIS
     */
    addTesis(data:any):Observable<any>{
      return this.http.post<any>(`${this.api}tesis` ,data)
    }

    gettesis(id:any):Observable<any>{
      return this.http.get<any>(`${this.api}tesis/${id}`)
    }

    /**
     * ! BORRAR TESIS
     */
    deleteTesis(id:any):Observable<any>{
        return this.http.delete<any>(`${this.api}tesis/${id}`)
    }
    
    /**
     * ! MODIFICAR TESIS
     */
    updateTesis(id:any,data:any):Observable<any>{
        return this.http.put<any>(`${this.api}tesis/${id}`,data)
      }

    
}