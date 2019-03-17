import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  regName = {
    fullname: "",
    email: "",
    mobile: "8181851703",
    password: "",
    //cpassword:''
  };
  constructor() {}

  ngOnInit() {}

  register(data) {
    console.log(data);
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
  // show2() {
  //   //console.log($(this));
  //    if ($('#icon_1').hasClass("fa-eye")) {
  //      $("#pwd_1").attr("type", "text");
  //      $('#icon_1').removeClass("fa-eye");
  //      $('#icon_1').addClass("fa-eye-slash")
  //    } else {
  //      $("#pwd_1").attr("type", "password");
  //      $('#icon_1').removeClass("fa-eye-slash")
  //      $('#icon_1').addClass("fa-eye");
  //    }
  // }
}
