import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes:any;
  //inyecto el servicio
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    
    this.getAllBikes();
  }

  //invoca al servicio REST y obtiene todas las bicicletas
  getAllBikes(){
    this.bikeService.getBikes().subscribe(
      data=> (this.bikes=data),
      err=>{ console.error(err)},
      ()=>console.log('Bikes obtenidas')
      )
  }

}

export interface RootObject {
  id: number;
  name: string;
  email: string;
  phone: string;
  model: string;
  serialNumber: string;
  purchasePrice: number;
  purchaseDate: string;
  contact: boolean;
}