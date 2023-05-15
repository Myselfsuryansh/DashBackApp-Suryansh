import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpsw',
  templateUrl: './newpsw.page.html',
  styleUrls: ['./newpsw.page.scss'],
})
export class NewpswPage implements OnInit {
  resetpswForm: FormGroup;
  isSubmitted: boolean=false;
  constructor(private router: Router,public formBuilder: FormBuilder) {
    this.resetpswForm = this.formBuilder.group({
      newpsw: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      conpsw: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    })
  }
  
  ngOnInit() {
  }
  sendOtp(){
    this.isSubmitted = true;
    if (this.resetpswForm.valid) 
    {
    console.log(this.resetpswForm)
    this.router.navigate(['psdchange'])
    }
  }
}
