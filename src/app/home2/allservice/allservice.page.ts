import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allservice',
  templateUrl: './allservice.page.html',
  styleUrls: ['./allservice.page.scss'],
})
export class AllservicePage implements OnInit {
   recharge:boolean=true;
   utility:boolean=false;
   fashion:boolean=false;
   electronics:boolean=false;
   ecommerce:boolean=false;
   
  public Electronics = [
    { title: 'JBL', url: 'assets/icon/home/jbl.svg',group:'ele'},
    { title: 'Acer', url: 'assets/icon/electronics/Acer.svg',group:'ele'}
  ];
  public Fashion = [
    { title: "Levi's", url: 'assets/icon/home/levis.svg',group:'fashion'},
    { title: "Myntra", url: 'assets/icon/home/myntra.svg',group:'fashion'}
    ]
    public Ecommernce = [
      { title: "Flipkart", url: 'assets/icon/home/flipkart.svg',group:'ecommerce'},
      { title: "Amazon", url: 'assets/icon/home/amazon.svg',group:'ecommerce'}
    ]
   
  constructor() { }

  ngOnInit() {
  }
  rechargeClick(){
    console.log("rechargeClick")
    this.ecommerce=false;
    this.recharge=true;
    this.utility=false;
    this.fashion=false;
    this.electronics=false;
  }
  utilityClick(){
  console.log(" utilityClick")
  this.ecommerce=false;
  this.recharge=false;
  this.utility=true;
  this.fashion=false;
  this.electronics=false;
  }
  fashionClick(){
  console.log("fashionClick(")
  this.ecommerce=false;
  this.recharge=false;
  this.utility=false;
  this.fashion=true;
  this.electronics=false;
  }

  electronicsClick(){
    console.log( "electronicsClick") 
  this.ecommerce=false;
  this.recharge=false;
  this.utility=false;
  this.fashion=false;
  this.electronics=true;
  }

  ecommerceClick(){
    console.log( "ecommerceClick") 
  this.ecommerce=true;
  this.recharge=false;
  this.utility=false;
  this.fashion=false;
  this.electronics=false;
  }
}
