import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-deposit',
  templateUrl: './start-deposit.page.html',
  styleUrls: ['./start-deposit.page.scss'],
})
export class StartDepositPage implements OnInit {
  Deposit=true;
  pa=false;
  constructor() { 
    this.Deposit=true;
  }

  ngOnInit() {
    this.Deposit=true;
  }
  timePlanClick(){
   this.Deposit=false;
   this.pa=true
  }
}
