import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gas-bill3',
  templateUrl: './gas-bill3.page.html',
  styleUrls: ['./gas-bill3.page.scss'],
})
export class GasBill3Page implements OnInit {
  url:any;
  title:any;
  amountForm!: FormGroup; 
  CustmerName="Raj Chauhan"
  Money=500;
  id:any;
  account="XXXXXX3452";
  constructor(private router: Router,private route: ActivatedRoute,
    public formBuilder: FormBuilder) { }
   
  ngOnInit():void {
    this.url = this.route.snapshot.paramMap.get('url');
    this.title = this.route.snapshot.paramMap.get('title');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("**",this.id);
    this.amountForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
    })
  }
  addAmount(amount:any){
    this.amountForm.patchValue({
      amount: amount
    });
  }
  pay(){
  }
}

