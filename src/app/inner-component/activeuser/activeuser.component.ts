import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.css']
})
export class ActiveuserComponent implements OnInit {

  @Input() parentToChild: any;

  constructor() { }

  ngOnInit(): void {
  }

}
