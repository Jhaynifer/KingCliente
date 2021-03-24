import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { NgxSmartModalService } from 'ngx-smart-modal';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  [x: string]: any;
  @ViewChild(ImageCropperComponent)
  imageCropper!: ImageCropperComponent;


  constructor() { }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  imagemCorte: any;
  imagem = 'assets/img/profile.png';

  ngOnInit(): void {
  }

  AlterarImagemPessoa(event: any): void {
    this.ngxSmartModalService.getModal('ModalCortarImagem').open();
    this.imageChangedEvent = event;
  }
  // LimpaCampoFile() {
  //   document.getElementById('imageperfilusuario')['value'] = '';
  // }
  CortarImagem() {
    this.ngxSmartModalService.getModal('ModalCortarImagem').close()
    this.imagem = this.imagemCorte
  }
  imageCropped(event: ImageCroppedEvent) {
    this.imagemCorte = event.base64;
    console.log(event);
  }
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded')
  }
  cropperReady() {
    console.log('Cropper ready')
  }
  loadImageFailed() {
    console.log('Load failed');
  }
  

  LimparCampos() {
    this.imagem = 'assets/img/profile.png';

  }

}
