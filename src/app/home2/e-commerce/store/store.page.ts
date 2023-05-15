import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  public Electronics = [
    { title: 'JBL', url: 'assets/icon/home/jbl.svg',group:'ele'},
    { title: 'Acer', url: 'assets/icon/electronics/Acer.svg',group:'ele'},
    { title: 'BOAT', url: 'assets/icon/electronics/boat.svg',group:'ele'},
    { title: 'Chroma', url: 'assets/icon/electronics/croma.svg',group:'ele'},
    { title: 'DELL', url: 'assets/icon/electronics/dell.svg',group:'ele'},
    { title: 'Lenova', url: 'assets/icon/electronics/lenovo.svg',group:'ele'},
    { title: 'Noise', url: 'assets/icon/electronics/noise.svg',group:'ele'},
    { title: 'Oneplus', url: 'assets/icon/electronics/oneplus.svg',group:'ele'},
    { title: 'OPPO', url: 'assets/icon/electronics/oppo.svg',group:'ele'},
    { title: 'Philips', url: 'assets/icon/electronics/philips.svg',group:'ele'},
    { title: 'Realme', url: 'assets/icon/electronics/realme.svg',group:'ele'},
    { title: 'Sumsung', url: 'assets/icon/electronics/samsung.svg',group:'ele'}
  ];
  public Fashion = [
    { title: "Levi's", url: 'assets/icon/home/levis.svg',group:'fashion'},
    { title: "Myntra", url: 'assets/icon/home/myntra.svg',group:'fashion'},
    { title: "AJIO", url: 'assets/icon/home/ajio.svg',group:'fashion'},
    { title: "Reebok", url: 'assets/icon/home/reebok.svg',group:'fashion'},
    ]
    public Ecommernce = [
      { title: "Flipkart", url: 'assets/icon/home/flipkart.svg',group:'ecommerce'},
      { title: "Amazon", url: 'assets/icon/home/amazon.svg',group:'ecommerce'},
    ]
    constructor() { 
  
  }

  ngOnInit() {
  }
  

 
  
}
