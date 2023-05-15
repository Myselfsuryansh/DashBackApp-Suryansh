import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-mobile-otp',
  templateUrl: './email-mobile-otp.page.html',
  styleUrls: ['./email-mobile-otp.page.scss'],
})
export class EmailMobileOtpPage implements OnInit {

  timer:boolean=true;
  dis:boolean=true;
  count:number=1;
  time: number = 180;
  min: number=0;
  sec: number=0;
  interval:any;
  otpForm:FormGroup;
  constructor(private router: Router,public formBuilder: FormBuilder) { 
    this.otpForm = this.formBuilder.group({
      otp1: ['', [Validators.required]],
      otp2: ['', [Validators.required]],
      otp3: ['', [Validators.required]],
      otp4: ['', [Validators.required]]
    })
    this.startTimer();
  }

  ngOnInit() {
  }
  newpsw(){
    this.router.navigate(['newpsw'])
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.time==0){
      this.timer=false;  
      this.dis=false;  
      return;
      }
      this.time--;
     this.min=Math.floor(this.time/60);
      this.sec=this.time%60;
    },1000)
  }
  gotoNextField(nextElement:any){
  nextElement.setFocus();
}

}

