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
    password: ""
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
}
