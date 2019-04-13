import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Router } from '@angular/router'
@Component({
  selector: 'gb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = null;
  constructor(private _ser:AllService, private _r:Router) { }
  ngOnInit() {
    this._ser.heartBit().subscribe((res)=>{
      if(res['logut']=="true")
        this._r.navigate(['/login'])
      else
        this.user = res;
    })
    this._r.events.subscribe(()=>{
      this._ser.heartBit().subscribe((res)=>{
        if(res['logut']=="true")
        this._r.navigate(['/login'])
      else
        this.user = res;
     })
    })
  }
  logout(){
    this._ser.logout(localStorage.getItem('sessionId')).subscribe((res)=>{
      console.log(res);
      if(res['logout']=="true"){
        localStorage.removeItem('sessionId')
        this._r.navigate(['/login'])
      }
    })
  }

}
