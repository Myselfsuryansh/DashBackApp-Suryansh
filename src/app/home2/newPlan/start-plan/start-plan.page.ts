import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-plan',
  templateUrl: './start-plan.page.html',
  styleUrls: ['./start-plan.page.scss'],
})
export class StartPlanPage implements OnInit {
  SearchForm: FormGroup;

  public Plan = [
    { title: "Start New Plan", url: 'assets/icon/home/sp1.svg'},
    { title: "End Existing Plan", url: 'assets/icon/home/sp1.svg'},
    { title: "Certificates & Taxes", url: 'assets/icon/home/sp2.svg'},
    { title: "Interest Rate", url: 'assets/icon/home/sp3.svg'},
  ]
  constructor() {
    this.SearchForm = new FormGroup({
      search: new FormControl('', [
        Validators.required
      ]),
    });

   }

  ngOnInit() {
  }
  search(){
    console.log(this.SearchForm.value)
  }
}
