import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mange-notification',
  templateUrl: './mange-notification.page.html',
  styleUrls: ['./mange-notification.page.scss'],
})
export class MangeNotificationPage implements OnInit {
  public Notification = [
    { title: "Off"},
    { title: "For 8 Hour"},
    { title: "For 24 Hour"},
    { title: "Indefinitely"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
