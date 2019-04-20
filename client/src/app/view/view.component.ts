import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _ser: AllService,private _ar:ActivatedRoute) { }
  demoJson = "";
  ngOnInit() {
    let id = this._ar.snapshot.params.id
    this._ser.getUser(id).subscribe((res) => {
      this.demoJson = res['data'];
    })

  }

}
