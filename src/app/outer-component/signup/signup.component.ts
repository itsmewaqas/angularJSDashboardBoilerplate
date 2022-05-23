import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  isselected:any = false;


  isChecked:any = false;

  onCH(chGet:string){
    console.log(chGet);
  }
  
  

  checkList: any[] = [
    {
      id: 0,
      value: 'metric',
      isselected:false,
    },
    {
      id: 1,
      value: 'inter',
      isselected:false,
    },
    {
      id: 2,
      value: 'bachelor',
      isselected:false,
    },
    {
      id: 3,
      value: 'mesters',
      isselected:false,
    },
    {
      id: 4,
      value: 'phd',
      isselected:false,
    },
  ];

  onChange(){
    console.log(this.checkList);
  }

  countryList: any[] = [
    {
      id: 0,
      value: 'Select Country',
    },
    {
      id: 1,
      value: 'pkaistan',
    },
    {
      id: 2,
      value: 'india',
    },
    {
      id: 3,
      value: 'srilanka',
    },
  ];

  ngOnInit(): void {
  }

  myFunc(tempRefVariable: any) {
    console.log(tempRefVariable);
    console.log(tempRefVariable.value.lname);
  }

  mname:any;

}
