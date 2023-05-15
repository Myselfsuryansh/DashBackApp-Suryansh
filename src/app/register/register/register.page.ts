import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  regForm: FormGroup;
  isSubmitted: boolean=false;
  constructor(private router: Router,public formBuilder: FormBuilder) { 
    this.regForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      mobNum: ['', [Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}')]],
      psd: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      email:['', [Validators.required, Validators.email]],
      refcode:[],
      confpsd: ['', [Validators.required]]
    }, {
      validator: this.MustMatch('psd', 'confpsd')
      });
      }

  ngOnInit() {
  }
  register(){
    this.isSubmitted = true;
    if (this.regForm.valid) 
    {
    console.log("regForm",this.regForm);
    this.router.navigate(['otp'])
    }
  }
  login(){
    this.router.navigate(['login'])
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
    return;
    }
    if (control.value !== matchingControl.value) {
    matchingControl.setErrors({ mustMatch: true });
    } else {
    matchingControl.setErrors(null);
    }
    }
    }
}
