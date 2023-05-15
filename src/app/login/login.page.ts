import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  SearchForm: FormGroup;
  regForm: FormGroup;
  loginForm:FormGroup
  isSubmitted: boolean = false;
  mob: any;
  searchf: boolean = true;
  loginf: boolean = false;
  registerf: boolean = false;
  searchObject:any;
  loginObject:any;
  registerObject:any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private bs: BackendService,
    private load : LoadingController,
    private alertc : AlertController
  ) {
    this.SearchForm = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[6789][0-9]{9}'),
      ]),
    });


    this.regForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        mobNum: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}'
            ),
          ],
        ],
        psd: [
          '',
          [
            Validators.required,
            Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        refcode: [],
        confpsd: ['', [Validators.required]],
      },
      {
        validator: this.MustMatch('psd', 'confpsd'),
      }
    );


    this.loginForm = this.formBuilder.group({
      mobile: ['', [Validators.required]],
      psd: ['', [Validators.required]],
    })
  }

  ngOnInit(

  ) {
    this.changeMobile();
  }

  get f() {
    return this.SearchForm.controls;
  }
  get errorControl() {
    this.SearchForm;
    return this.SearchForm.controls;
  }
  async search() {
    let loading = await this.load.create({

      message:'Please Wait....'
    }) 
    loading.present()
    
    let formData = this.SearchForm.getRawValue();
    let mobile = formData.mobile;
    let type = 'login_Search';
    

    this.bs.searchMobile(mobile, type).subscribe((res) => {
      console.log(res);
      this.searchObject=res;
      loading.dismiss()
      if(this.searchObject.err==2){

        this.searchf=false;
        this.registerf=true;
        this.regForm.patchValue({
          mobNum: mobile
          
        });
      

        
      }
      if(this.searchObject.err==0){
        this.loginf=true;
        this.registerf=false;
        this.searchf=false;
        this.loginForm.patchValue({
          mobile:mobile       
        });
      
      }
    });
  }
  home(){

  }

  async register() {
    let loading = await this.load.create({
      message:'Please Wait....'
    }) 
    loading.present()
    let formData = this.regForm.getRawValue();
  this.bs.register(formData).subscribe((res)=>{
    this.registerObject=res
    loading.dismiss()

  })
  }
  async login() {
    let loading = await this.load.create({
      message:'Please Wait....'
    })
    let formData = this.loginForm.getRawValue();
    this.bs.login(formData).subscribe((res)=>{
      this.loginObject=res;
      loading.dismiss();

    })
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
    };
  }
 


  async changeMobile(){
    await this.SearchForm.controls['mobile'].valueChanges.subscribe(value=>{
      let val = value.toString()
      if(val.length==10){
        console.log(true);
        this.search()

      }
    
     

    })

    
  }

}
