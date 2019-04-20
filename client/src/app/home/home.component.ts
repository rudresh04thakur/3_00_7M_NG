import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ser:AllService, private _r:Router) { }
  curentDate = new Date();
  date;
  regName = {
    fullname: "",
    email: "",
    mobile: "8181851703",
    password: "",
    id:''
  };
  demoJson = {
    "name":"Rudresh",
    "age":24,
    "mobile":1212
  }
  users;
  ngOnInit() {
    this._ser.getUsers().subscribe((res)=>{
      this.users  = res;
    })
    this._r.events.subscribe(()=>{
      this._ser.getUsers().subscribe((res)=>{
        this.users  = res;
      })
    })
    this.date = this.curentDate
  }
  delete(id){
    console.log("Id for Delete" , id);
    this._ser.delete(id).subscribe((res)=>{
      console.log(res);
      this._ser.getUsers().subscribe((res)=>{
        this.users  = res;
      })
    })
  }

  edit(id){
    this._ser.getUser(id).subscribe((res)=>{
      if(res['class']=='success'){
        this.regName = res['data'];
        $("#myModal").modal('show');
      }
    })

  }

  update(data){
    console.log(data)
    this._ser.update(data).subscribe((res)=>{
      console.log(res)
      if(res['class']=='success'){
        this._ser.getUsers().subscribe((res)=>{
          this.users  = res;
        })
        $("#myModal").modal('hide');
      }
    })
  }

}
