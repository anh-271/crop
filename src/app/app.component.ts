import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crop_image';
  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  isCheck: boolean = false;

  onFileChanged(event: any) {
    this.imgChangeEvt = event;
  }

  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
  }

  imgLoad() {}

  initCropper() {}

  imgFailed() {}
}
