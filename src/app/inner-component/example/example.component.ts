import { Component, OnInit } from '@angular/core';
// import { $ } from 'protractor';
import { from } from 'rxjs';
import { ApplicationServiesService } from 'src/app/application-servies.service';

declare var $: any; 

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  getMyname: string = '';
  getEmployeeData: any = '';

  constructor(private callServices: ApplicationServiesService) { }

  ngOnInit(): void {

    $(document).ready(function () {
      $('#clickHide').click(function () {
        $('#boxBlock').slideUp(200);
      });
      $('#clickShow').click(function () {
        $('#boxBlock').slideDown(200);
      });
      $('#clickToggle').click(function () {
        $('#boxBlock').slideToggle(200);
      });
    });

    


    this.getMyname = this.callServices.myName;
    this.getEmployeeData = this.callServices.employeeData;

  }

  // Interpolation
  fname: string = 'muhammad';
  lname: string = 'waqas';
  num1: number = 15;
  num2: number = 20;
  date = new Date();

  // Property Binding 
  para1: string = 'set name';
  hide: boolean = true;

  // Attribute Binding
  colsValue: number = 2;

  // Event Binding
  val: string = 'hello world';
  myfunc1() {
    this.val = 'update hello world';
  }

  // Two Way Data Binding
  para2: string = 'change value';

  // Template Reference Variable
  getName: any = '';
  getEmail: any = '';
  getGender: any = '';
  myfunc2(userName: string, userEmail: string, userGender: string) {
    this.getName = userName;
    this.getEmail = userEmail;
    this.getGender = userGender;
  }

  // NgIf
  department: string = 'student';

  // ngfor
  students: any[] = [
    {
      id: 0,
      sName: 'ali',
      sEmail: 'ali.khan@avanzasolutions.com',
      sGender: 'male',
      sAddress: 'center',
      sCalss: '12th',
      sStatus: 'active',
    },
    {
      id: 1,
      sName: 'waqas',
      sEmail: 'm.waqas@avanzasolutions.com',
      sGender: 'male',
      sAddress: 'west',
      sCalss: '10th',
      sStatus: 'deactive',
    },
    {
      id: 2,
      sName: 'waseem',
      sEmail: 'waseem.khan@avanzasolutions.com',
      sGender: 'male',
      sAddress: 'east',
      sCalss: '8th',
      sStatus: 'active',
    },
    {
      id: 3,
      sName: 'saad',
      sEmail: 'saad.abid@avanzasolutions.com',
      sGender: 'male',
      sAddress: 'south',
      sCalss: '9th',
      sStatus: 'deactive',
    },
    {
      id: 4,
      sName: 'alber',
      sEmail: 'alber.khan@avanzasolutions.com',
      sGender: 'male',
      sAddress: 'center',
      sCalss: '7th',
      sStatus: 'active',
    },
    {
      id: 5,
      sName: 'junaid',
      sEmail: 'junaid.khan@avanzasolutions.com',
      sGender: 'male',
      sAddress: 'west',
      sCalss: '6th',
      sStatus: 'deactive',
    }
  ];

  // Ng switch
  checkSwitch: any = 'ali';

  getSwitch: any = '';
  myfunc3(checkSwitch: string) {
    this.getSwitch = checkSwitch;
  }

  pipeValue: string = 'data value';

}
