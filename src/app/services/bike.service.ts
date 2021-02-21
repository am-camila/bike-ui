import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  //importa e inyecta http client para hacer request http
  constructor(private http: HttpClient) { }

  //GET
  //retorna todas las bicicletas del API REST
  getBikes(){
    return this.http.get('/server/api/v1/bikes');
  }

  //este metodo nos retorna una bike por id

  getBike(id:number){
    return this.http.get('/server/api/v1/bikes/'+id)
  }
  
  createdBikeRegistration(bike : any){
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes/', body, httpOptions)
  }

}
