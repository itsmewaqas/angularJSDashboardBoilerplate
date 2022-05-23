import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  myDataLable:string = 'muhammad bilal';

  constructor() { }
 
  ngOnInit(): void {
  }


}
