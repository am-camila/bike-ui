import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {

  image: any;
  constructor(private imagesService: ImagesService , private route: ActivatedRoute ) { }

  ngOnInit(): void {
    console.log('Recibimos el siguiente id de imagen : ' + this.route.snapshot.params['id']);
    this.image = this.imagesService.getImage(
      this.route.snapshot.params['id']
    );
    // console.log('el servicio me trajo esta image : ' + this.image);

  }

}
