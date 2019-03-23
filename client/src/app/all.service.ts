import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private _http:HttpClient) { }
  register(data){
   return  this._http.post('http://localhost/client_api_5/register.php',data).pipe(map((res)=>{
      return res;
    }));
  }
}
