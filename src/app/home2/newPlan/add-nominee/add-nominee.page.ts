import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-nominee',
  templateUrl: './add-nominee.page.html',
  styleUrls: ['./add-nominee.page.scss'],
})
export class AddNomineePage implements OnInit {
  nomineeForm: FormGroup;

  constructor() { 
    this.nomineeForm = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[6789][0-9]{9}')
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      relationship: new FormControl('', [
        Validators.required
      ]),
      DOB: new FormControl('', [
        Validators.required
      ]),
      nName: new FormControl('', [
        Validators.required
      ]),
      pincode: new FormControl('', [
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required
      ]),
      state: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl(''),
    });

  }

  ngOnInit() {
  }
  
  addNominee(){}
}
