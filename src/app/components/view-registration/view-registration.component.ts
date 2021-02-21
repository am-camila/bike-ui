import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeReg : any ;

  constructor(private bikeservice: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    // leemos el parametro que viene en la ruta 
    this.getOneBike(this.route.snapshot.params.id);
}

getOneBike(id: number){
  this.bikeservice.getBike(id).subscribe(
    data => {
          this.bikeReg = data ;
    }
  );
}

}
export interface IBike {
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