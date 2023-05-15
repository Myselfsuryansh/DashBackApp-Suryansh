import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-airteldigital',
  templateUrl: './airteldigital.page.html',
  styleUrls: ['./airteldigital.page.scss'],
})
export class AirteldigitalPage implements OnInit {
  url:any;
  title:any;
  amountForm!: FormGroup; 
  CustmerName="Raj Chauhan"
  Money=500;
  css:any;
  account="XXXXXX3452";
  constructor(private router: Router,private route: ActivatedRoute,
    public formBuilder: FormBuilder) { }
   
  ngOnInit():void {
    this.url = this.route.snapshot.paramMap.get('url');
    this.title = this.route.snapshot.paramMap.get('title');
    this.css = this.route.snapshot.paramMap.get('css');
    console.log("**",this.url);
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
