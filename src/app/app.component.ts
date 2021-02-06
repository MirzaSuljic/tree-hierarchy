import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testList = [
    {
      address: null,
      alias: "Jasmine Smith",
      birthDate: "01/01/0001",
      city: null,
      comment: null,
      country: null,
      department: "Brokerage",
      departmentId: 10,
      dialpad: "11111",
      firstName: "Jasmine",
      gender: "F",
      hireDate: null,
      id: 1,
      jobTitle: "Broker",
      jobTitleId: 5,
      lastName: "Smith",
      location: null,
      locationId: 0,
      manager: true,
      managerId: 2,
      personalEmail: "jasmine.smith@taylor-corp.net",
      personalPhone: "111111",
      picture: null,
      status: true,
      userCreated: true,
      userId: 1,
      userType: "Broker",
      userTypeId: 2,
      workEmail: "jasmine.s@taylor-corp.net",
      zip: null,
      zipId: 0,
      employees: [],
    },

    {
      address: "Add",
      alias: "Admin",
      birthDate: "01/01/0001",
      city: null,
      comment: null,
      country: null,
      department: "Unassigned",
      departmentId: 1,
      dialpad: "11111",
      firstName: "Admin",
      gender: null,
      hireDate: null,
      id: 2,
      jobTitle: "Admin",
      jobTitleId: 10,
      lastName: "Admin",
      location: null,
      locationId: 0,
      manager: true,
      managerId: null,
      personalEmail: null,
      personalPhone: "1111",
      picture: "http://77.77.220.74:8082/Media/1221shutterstock_35662648.jpg",
      status: false,
      userCreated: true,
      userId: 209,
      userType: "Admin",
      userTypeId: 1,
      workEmail: "admin@taylor-corp.net",
      zip: null,
      zipId: 0,
      employees: [],
    },

    {
      address: null,
      alias: "Ally Andersen",
      birthDate: "01/01/0001",
      city: "Sarajevo ",
      comment: null,
      country: "Bosnia and Herzegovina",
      department: "Brokerage",
      departmentId: 9,
      dialpad: "619-734-9766",
      firstName: "Azra",
      gender: "F",
      hireDate: null,
      id: 2157,
      jobTitle: "Branch Manager",
      jobTitleId: 7,
      lastName: "Crncevic",
      location: null,
      locationId: 0,
      manager: false,
      managerId: 2,
      personalEmail: null,
      personalPhone: "619-734-9766",
      picture: "http://77.77.220.74:8082/Media/0917_DRD9665.jpg",
      status: true,
      userCreated: true,
      userId: 2273,
      userType: "Admin",
      userTypeId: 1,
      workEmail: "ally@taylor-corp.net",
      zip: "71000",
      zipId: 413,
      employees: [],
    },
    {
      address: null,
      alias: "Jaden Palmer",
      birthDate: null,
      city: "Sarajevo ",
      comment: null,
      country: "Bosnia and Herzegovina",
      department: "Brokerage",
      departmentId: 2,
      dialpad: "(619) 719-5650",
      firstName: "Anes",
      gender: null,
      hireDate: null,
      id: 2158,
      jobTitle: "Broker",
      jobTitleId: 5,
      lastName: "Sestan",
      location: null,
      locationId: 0,
      manager: false,
      managerId: 1,
      personalEmail: null,
      personalPhone: "(619) 719-5650",
      picture: null,
      status: true,
      userCreated: true,
      userId: 2274,
      userType: "Broker",
      userTypeId: 2,
      workEmail: "jaden.p@taylor-corp.net",
      zip: "71000",
      zipId: 413,
      employees: [],
    }
  ]
  ngOnInit(): void {

this.getMangers();
}

getMangers(){
  const idMapping = this.testList.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {})


  let manager;
  this.testList.forEach(el => {
    if (el.managerId === null) {
      manager = el;
      return;
    }
    const managerEl = this.testList[idMapping[el.managerId]];
    managerEl.employees = [...(managerEl.employees || []), el];
  });
  console.log(manager);
}
}
