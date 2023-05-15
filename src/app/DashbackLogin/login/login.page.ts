import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup; 
  mob: any | null;
  constructor(private router: Router,public formBuilder: FormBuilder,private route: ActivatedRoute) { 
    this.loginForm = this.formBuilder.group({
      mobile: ['', [Validators.required]],
      psd: ['', [Validators.required]],
    })
  }
  ngOnInit():void {
    this.mob = this.route.snapshot.paramMap.get('mobile');
    console.log("**",this.mob);
    this.loginForm.patchValue({
      mobile: this.mob
    });
  }
  register(){
    this.router.navigate(['register'])
  }

  home()
  {
    console.log(this.loginForm.value)
    this.router.navigate(['home'])
  }
  ngOnDestroy() {
    this.loginForm.reset(this.loginForm.value);
  }
}
