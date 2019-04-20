import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private _http:HttpClient) { }
  register(data){
   return  this._http.post('http://localhost/client_api_5/register.php',data, httpOptions).pipe(map((res)=>{
      return res;
    }));
  }

  login(data){
    return  this._http.post('http://localhost/client_api_5/login.php',data, httpOptions).pipe(map((res)=>{
       return res;
     }));
   }

   getUsers(){
    return  this._http.post('http://localhost/client_api_5/getUsers.php',null, httpOptions).pipe(map((res)=>{
       return res;
     }));
   }



  logout(data){
    return  this._http.get('http://localhost/client_api_5/logout.php?id='+data).pipe(map((res)=>{
       return res;
     }));
   }

  heartBit(){
    return  this._http.get('http://localhost/client_api_5/checkLife.php?id='+localStorage.getItem('sessionId'), httpOptions).pipe(map((res)=>{
       return res;
     }));
   }

   delete(id){
     return this._http.get("http://localhost/client_api_5/delete.php?id="+id).pipe(map((res)=>{
       return res;
     }))
   }

   getUser(id){
    return this._http.get("http://localhost/client_api_5/getUser.php?id="+id).pipe(map((res)=>{
      return res;
    }))
  }

  update(data){
    return  this._http.post('http://localhost/client_api_5/update.php',data).pipe(map((res)=>{
      return res;
    }));
  }

}
