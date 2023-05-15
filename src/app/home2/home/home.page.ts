import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollDetail } from '@ionic/core/components';
// import { ScrollingHeaderModule } from 'ionic-scrolling-header';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild(Content) content: Content;
  ishidden:boolean=false;
  name:string="raj";
  public stores = [
    { title: "Levi's", url: 'assets/icon/home/stores/storesGroup 575.svg',group:'stores'},
    { title: "Myntra", url: 'assets/icon/home/stores/storesGroup 575.svg',group:'stores'},
    { title: "JBL", url: 'assets/icon/home/stores/storesGroup 575.svg',group:'stores'},
    { title: "Reebok", url: 'assets/icon/home/stores/Reebok.svg',group:'stores'},
    { title: "AJIO", url: 'assets/icon/home/stores/storesGroup 575.svg',group:'stores'},
    { title: "flipkart", url: 'assets/icon/home/stores/storesGroup 575.svg',group:'stores'},
    { title: "Amazon", url: 'assets/icon/home/stores/Reebok.svg',group:'stores'},
    { title: "View More", url: 'assets/icon/home/stores/storesGroup 575.svg',group:'stores'},
    ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleScrollStart() {
    console.log('scroll start');
    this.ishidden=true;
  }
  hide(){
    this.ishidden=!this.ishidden;
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', ev.detail);
  }

  handleScrollEnd() {
    console.log('scroll end');
  }
  // scrollHandler(event:any){
  //   this.hide=false;
  // }
  logout(){
    this.router.navigate(['login'])
  }
}
