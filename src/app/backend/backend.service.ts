import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
 urlbase="https://backend.dashback.in/";
  constructor(private http: HttpClient) { 

  }
  searchMobile(data1:any, data2:any){
    return this.http.get(this.urlbase + `searchMob/${data1}/${data2}`);
    

  }

  register(data1:any){
    return this.http.post(this.urlbase + 'register',data1)

  }

  login(data1:any){
    return this.http.post(this.urlbase + 'login', data1)

  }
}
