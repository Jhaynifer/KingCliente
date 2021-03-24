import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';




@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProdutosComponent implements OnInit {
  size: string[] = [
    'PP', 'P', 'M', 'G', 'GG'
  ];
  genre: string[] = [
    'Masculino', 'Feminino', 'Unissex',
  ];
  age: string[] = [
    'Adulto', 'Infantil',
  ];
  clothes: string[] = [
    'Camiseta', 'Camisa', 'Blusa', 'Calça',
  ];



  constructor(config: NgbModalConfig, private modalService: NgbModal


  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  open(content: any) {
    this.modalService.open(content);
  }

  abrircatalogo(abrir: any) {
    this.modalService.open(abrir);
  }
  
  quant: any = 0;

  ngOnInit(): void {
  }

  addquantidade() {
    this.quant++
  }


  Diminuirquantidade() {
    if (this.quant == 0) return
    this.quant--
  }


}


