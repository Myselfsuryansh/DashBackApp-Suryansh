import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpsw',
  templateUrl: './forgetpsw.page.html',
  styleUrls: ['./forgetpsw.page.scss'],
})
export class ForgetpswPage implements OnInit {
  forgetpswForm:FormGroup;
  isSubmitted: boolean=false;
  constructor(private router: Router,public formBuilder: FormBuilder) { 
    this.forgetpswForm = this.formBuilder.group({
      mobile: ['', [Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}')]],
    })
  }
  ngOnInit() {
  }
  sendOtp(){
    this.isSubmitted = true;
    if (this.forgetpswForm.valid) {
    this.router.navigate(['email-mobile-otp'])
    }
  }
}
