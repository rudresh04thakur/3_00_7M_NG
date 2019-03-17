import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,ValidationErrors, FormControl } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.css','login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private _fb:FormBuilder) {
    //var email = new FormControl('',Validators.required)
    this.loginForm = this._fb.group({
      email:['gopal04thakur@gmail.com',[Validators.required,Validators.pattern("[a-zA-Z0-9_]{3,}[@]{1}[a-zA-Z0-9]{2,}[.]{1}[a-zA-Z]{2,}")]],
      password:['123456789',[Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]]
    })
  }

  ngOnInit() {
  }

  login(data){
    if(this.getFormValidationErrors()){
      console.log(data);
    }
  }

  str ="";
  getFormValidationErrors() {
    this.str="";
    Object.keys(this.loginForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.loginForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          (this.str +=key +" : "+ keyError),controlErrors[keyError];
        }
        );
      }
    });
    if(this.str!=""){
      return false;
    }else{
      return true
    }
  }


  show() {
    //console.log($(this));
     if ($('#icon').hasClass("fa-eye")) {
       $("#pwd").attr("type", "text");
       $('#icon').removeClass("fa-eye");
       $('#icon').addClass("fa-eye-slash")
     } else {
       $("#pwd").attr("type", "password");
       $('#icon').removeClass("fa-eye-slash")
       $('#icon').addClass("fa-eye");
     }
  }
}
