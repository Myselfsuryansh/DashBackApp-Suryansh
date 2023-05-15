import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular/directives/proxies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage{
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides | undefined;

  sliderOne: any;
  msg:"Cash back refers to a credit card benefit that refunds the cardholder's account a small percentage of the sum spent on purchases"
  | undefined

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  
  constructor(
) {
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      imageUrl:[
       {
        image:"assets/icon/slide/slide1.svg",
        header:"Online Shopping",
        msg:"Vast selection of components, accessories, adapters, media drives & more from top brands. No Cost EMI Available. Top Brands. Huge Selection. Low Prices. Great Offers. Easy & Fast Delivery. Best Deals."
       },
       {
        image:"assets/icon/slide/slide2.svg",
        header:"Bill Payment!",
        msg:"Track Status,Upload Documents and Pay Charges; *Online Payment of Other Charges · *Register / Update Mobile number, Email,Aadhar number, TDS and PAN No."
       },
       {
        image:"assets/icon/slide/slide3.svg",
        header:"Cash Back and Best Offers!",
        msg:"Cash back refers to a credit card benefit that refunds the cardholder's account a small percentage of the sum spent on purchases"
       }
      ]  
   }
  }

  slideNext(object:any, slideView:any) {
    slideView.slideNext(600).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
  SlideDidChange(object:any, slideView:any) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object:any, slideView:any) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object:any, slideView:any) {
    slideView.isBeginning().then((istrue: any) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object:any, slideView:any) {
    slideView.isEnd().then((istrue:any) => {
      object.isEndSlide = istrue;
    });
  }

}
