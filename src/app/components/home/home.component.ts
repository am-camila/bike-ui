import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Globo MIB Full Suspension',
    'Globo MIB Carbon Race',
    'Globo 590',
    'Globo Magic Bike'
  ];

  booleans: string [] = ['false','true']

  bikeForm : any;

  validMessage: string = '';

  constructor(private bikeService : BikeService) {
}

  ngOnInit(): void {//se puede validar aca o en el html
    this.bikeForm = new FormGroup({

      name: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]{7,15}$/)]),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]),
      purchasePrice: new FormControl('', [Validators.required, Validators.pattern(/^\d{0,10}(\.\d{1,})?$/)]),
      purchaseDate: new FormControl('', [Validators.required, Validators.pattern(/^(((0[1-9]|[12]\d|3[01])-(0[13578]|1[02])-((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)-(0[13456789]|1[012])-((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])-02-((19|[2-9]\d)\d{2}))|(29-02-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/)]),
      contact: new FormControl()
    }
    );
  }

  get name(){ return this.bikeForm.get('name');}
  get email(){ return this.bikeForm.get('email');}
  get phone(){ return this.bikeForm.get('phone');}
  get model(){ return this.bikeForm.get('model');}
  get serialNumber(){ return this.bikeForm.get('serialNumber');}
  get purchasePrice(){ return this.bikeForm.get('purchasePrice');}
  get purchaseDate(){ return this.bikeForm.get('purchaseDate');}




  submitRegistration(): void {
    console.log('enviaste el formulario')
    if (this.bikeForm.valid) {
      this.validMessage = 'su Garantia de Bicicleta Fue registrada Correctamente';
      this.bikeService.createdBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        }
      )

    } else {
      this.validMessage = 'Por favor completa el formulario ';
    }
  }


}
