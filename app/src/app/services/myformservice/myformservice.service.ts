/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class myformserviceService {

user : any;
constructor(){
this.user = this.userInfo();
}

 userInfo(){
  return {
  owner :'siya@neutrinos.co',
  personalDetails:{
       firstName: 'Test',
       lastName: 'Tester',
       dob: '12/Mar/1987',
       gender: 'Male',
       email: 'siya.bonga@neutrinos.co',
       position: 'Line Manager',
       iDNumber: '11043983587475',
       panNumber: 'A1038957',
       passportNumber: '11043983587475',
       nationality: '',
       station: 'Randburg',
       lineManager: 'Hilton ',
       lineManagerEmail:'siya.bonga@neutrinos.co'
    },
  travelDetails: [
    {
      'travelMode': 'Flight',
      'travelType': 'Domestic',
      'travelPurpose': 'Meeting',
      'projectID': 'Assupol',
      'fromCity': 'Johannesburg',
      'toCity': 'Randburg',
      'fromDate': '29/Jun/2022',
      'toDate': '05/Jul/2022',
      'preferredTime': '16:00',
      'comments': '',
      'file': '',
      'status': null,
      'needShuttle': false
    },
    {
      'visaRequired': true,
      'travelMode': 'Flight',
      'travelType': 'Domestic',
      'travelPurpose': 'Meeting',
      'projectID': 'Assupol',
      'fromCity': 'Johannesburg',
      'toCity': 'Randburg',
      'fromDate': '29/Jun/2022',
      'toDate': '05/Jul/2022',
      'preferredTime': '16:00',
      'comments': '',
      'file': '',
      'status': null,
      'needShuttle': false
      
    }
  ],
  'accommodationDetails': [
    {
      'hotelPreference': '',
      'city': 'Randburg',
      'checkInDate': '29/Jun/2022',
      'checkOutDate': '05/Jul/2022',
      'accommodationType': 'Hotel',
      'checkInTime': '5:30 PM',
      'checkOutTime': '09:00 AM',
      'employeeComments': 'Stay for the TIH shootout',
      'status': null,
      'vehicleRental': true
    }
  ]
};
}

}
