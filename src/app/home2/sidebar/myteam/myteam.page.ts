import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.page.html',
  styleUrls: ['./myteam.page.scss'],
})
export class MyteamPage implements OnInit {
  teamSize=0;
  cashback=0;
  utilityCashback=0;
  ecommerceCashback=0;
  name="Raj chauhan"
  tierhidden:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  tierClick(){
  this.tierhidden=!this.tierhidden;
  }
}
