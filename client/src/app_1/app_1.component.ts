import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app_1-root',
  templateUrl: './app_1.component.html',
  styleUrls: ['./app_1.component.css']
})
export class App_1Component implements OnInit {
  title = 'client';
  ngOnInit(){
    // $(document).ready(function(){
    //   alert("Hi")
    // })
  }
}
