import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-airteldigital2',
  templateUrl: './airteldigital2.page.html',
  styleUrls: ['./airteldigital2.page.scss'],
})
export class Airteldigital2Page implements OnInit {
  url: any | null;
  title:any |null;
  css:any |null;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit():void {
    this.url = this.route.snapshot.paramMap.get('url');
    this.title = this.route.snapshot.paramMap.get('title');
    this.css = this.route.snapshot.paramMap.get('css');
    console.log("**",this.url);
  }
  
  Confirm(){
    this.router.navigate(['airteldigital',{url:this.url,title:this.title,css:this.css}]);
}

}
