import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;

  constructor(private router: Router) { }
  
  
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
      }, 10000); //5s
      }
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string | undefined;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
 
  
  login(){
    this.router.navigate(['login'])
  }
}
