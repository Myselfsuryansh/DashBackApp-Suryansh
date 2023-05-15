import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.page.html',
  styleUrls: ['./mobile-login.page.scss'],
})
export class MobileLoginPage implements OnInit {
  loginForm: FormGroup; 
  isSubmitted: boolean=false;
  mob: any;
  
  constructor(private router: Router,public formBuilder: FormBuilder) { 
    this.loginForm = new FormGroup({
        'mobile': new FormControl('', [Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}')]),
    })
  }

  ngOnInit() {
  }

  get f(){
    return this.loginForm.controls;
  }
  get errorControl() {
    return this.loginForm.controls;
  }

  login(){
    this.isSubmitted = true;
    this.mob=this.loginForm.value.mobile;
    if (this.loginForm.valid) 
    {
    this.router.navigate(['login',{mobile:this.mob}])
  }
  }
}

