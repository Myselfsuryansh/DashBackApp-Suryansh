import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gas-bill2',
  templateUrl: './gas-bill2.page.html',
  styleUrls: ['./gas-bill2.page.scss'],
})
export class GasBill2Page implements OnInit {

  url: any | null;
  title:any |null;
  id:any |null;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit():void {
    this.url = this.route.snapshot.paramMap.get('url');
    this.title = this.route.snapshot.paramMap.get('title');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("**",this.url);
  }
  
  Confirm(){
    this.router.navigate(['gas-bill3',{url:this.url,title:this.title,id:this.id}]);
}
}
