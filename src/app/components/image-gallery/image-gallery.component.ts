import { Component, OnChanges, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class ImageGalleryComponent implements OnChanges {

  images: any[] | undefined;
  filterBy: string ='all';
  allImages: any[] = [];

  constructor(private imagesService : ImagesService) { 
    this.allImages = this.imagesService.getImages();
  }

  ngOnChanges(): void {
    
  }

}
