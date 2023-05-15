import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gas-bill',
  templateUrl: './gas-bill.page.html',
  styleUrls: ['./gas-bill.page.scss'],
})
export class GasBillPage implements OnInit {
  public DTH = [
    { id:1,title: "adani gas", url: 'assets/icon/home/gasBill/1_adani gas 1.svg'},
    { id:2,title: "aavantika gas ltd", url: 'assets/icon/home/gasBill/2_aavantika gas ltd 1.svg'},
    { id:3,title: "Bhagyanagar gas", url: 'assets/icon/home/gasBill/3_Bhagyanagar gas 1.svg'},
    { id:4,title: "Assam gas", url: 'assets/icon/home/gasBill/4_Assam gas 1.svg'},
    { id:5,title: "central up gas", url: 'assets/icon/home/gasBill/5_central up gas 1.svg'},
    { id:6,title: "Charotar gas sahakari mandai", url: 'assets/icon/home/gasBill/6_Charotar gas sahakari mandai 1.svg'},
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
 Next(url:any,title:any,id:any)
  {
    this.router.navigate(['gas-bill2',{url,title,id}])
  }

  


}
