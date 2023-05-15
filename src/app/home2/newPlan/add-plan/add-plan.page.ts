import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.page.html',
  styleUrls: ['./add-plan.page.scss'],
})
export class AddPlanPage implements OnInit {
  amountForm!: FormGroup; 
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.amountForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
    })
  }
  addAmount(amount:any){
    this.amountForm.patchValue({
      amount: amount
    });
  }

}
