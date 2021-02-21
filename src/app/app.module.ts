import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { FilterimagesPipe } from './filterimages.pipe';
import { ImagedetailsComponent } from './components/imagedetails/imagedetails.component';
import { BikeService } from './services/bike.service';
import { ImagesService } from './services/images.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AboutComponent,
    ViewRegistrationComponent,
    ImageGalleryComponent,
    FilterimagesPipe,
    ImagedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BikeService , ImagesService , FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
