import { Component } from '@angular/core';

//Permite tomar fotos
import { PhotoCameraService } from '../services/photo-camera.service';





@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public photoService: PhotoCameraService,
  ) {

  }

  async ngOnInit(){
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
