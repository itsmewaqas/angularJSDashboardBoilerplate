import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiesService {

   myName:string = 'muhammad zuhaib';
   employeeData: any[] = [
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

  constructor() { } 
}
