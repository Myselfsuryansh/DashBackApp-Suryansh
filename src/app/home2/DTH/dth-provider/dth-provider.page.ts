import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dth-provider',
  templateUrl: './dth-provider.page.html',
  styleUrls: ['./dth-provider.page.scss'],
})
export class DthProviderPage implements OnInit {
  public DTH = [
    { title: "Airtel Digital TV", url: 'assets/icon/home/DTH/airtel.svg',class:"airtel"},
    { title: "Dish Tv", url: 'assets/icon/home/DTH/dish TV.svg',class:"dish"},
    { title: "Sun Direct", url: 'assets/icon/home/DTH/Sun Direct.svg',class:"sunDirect"},
    { title: "Tata Play(Formely Tatasky)", url: 'assets/icon/home/DTH/Tata.svg',class:"tataPlay"},
    { title: "D2H", url: 'assets/icon/home/DTH/d2h.svg',class:"d2h"},
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
 Next(url:any,title:any,css:any)
  {
    this.router.navigate(['airteldigital2',{url,title,css}])
  }


}
