import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  allImages: any =[];

  //retorna todas las imagenes
  getImages(){
    return this.allImages = ImagesDetails.slice(0);
  }

  //retorna todas las imagenes
  getImage(id:number){
    return this.allImages = ImagesDetails.slice(0).find(i => i.id==id);
  }

  constructor() { }
}


const ImagesDetails = [
  { "id": 1, "brand": "juniorrc", "url": "assets/Images/bknenes1.jpg"},
  { "id": 2, "brand": "juniorrc", "url": "assets/Images/bknenes2.jpg" },
  { "id": 3, "brand": "juniorrc", "url": "assets/Images/bknenes3.jpg" },
  { "id": 4, "brand": "juniorrc", "url": "assets/Images/bknenes4.jpg" },
  { "id": 5, "brand": "bkeco", "url": "assets/Images/bkeco1.jpg" },
  { "id": 6, "brand": "bkeco", "url": "assets/Images/bkeco2.jpg" },
  { "id": 7, "brand": "bkeco", "url": "assets/Images/bkeco3.jpg" },
  { "id": 8, "brand": "bkeco", "url": "assets/Images/bkeco4.jpg" },
  { "id": 9, "brand": "bkmotor", "url": "assets/Images/bkmotor1.jpg" },
  { "id": 10, "brand": "bkmotor", "url": "assets/Images/bkmotor2.jpg" },
  { "id": 11, "brand": "bkmotor", "url": "assets/Images/bkmotor3.jpg" },
  { "id": 12, "brand": "bkmotor", "url": "assets/Images/bkmotor4.jpg" },
  { "id": 13, "brand": "bkmotor", "url": "assets/Images/bkmotor5.jpg" },
  { "id": 15, "brand": "adultosrc", "url": "assets/Images/bk1.jpg" },
  { "id": 16, "brand": "adultosrc", "url": "assets/Images/bk2.jpg" },
  { "id": 14, "brand": "adultosrc", "url": "assets/Images/bk3.jpg" },
  { "id": 17, "brand": "adultosrc", "url": "assets/Images/bk4.jpg" }
]