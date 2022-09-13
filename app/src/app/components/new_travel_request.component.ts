/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormGroup,
  Validators,
  ValidationErrors,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { myformserviceService } from 'app/services/myformservice/myformservice.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-new_travel_request',
  templateUrl: './new_travel_request.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class new_travel_requestComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_SXnm4ototMyRWa27(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_SXnm4ototMyRWa27(bh) {
    try {
      bh = this.sd_MWBuy73tA0Xq4qCD(bh);
      //appendnew_next_sd_SXnm4ototMyRWa27
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SXnm4ototMyRWa27');
    }
  }

  date(currentDate: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentDate: currentDate };
      bh.local = {};
      bh = this.sd_p628PvB6Wft0W8cy(bh);
      //appendnew_next_date
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bdozh8xtjLzM0QiG');
    }
  }

  sd_ZDvpSClHAIgW1XKC(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_zFu2Iz2olSAWbMFK(bh);
      //appendnew_next_sd_ZDvpSClHAIgW1XKC
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZDvpSClHAIgW1XKC');
    }
  }

  pDetailsSubmit(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_zD555oDG8OrpYULW(bh);
      //appendnew_next_pDetailsSubmit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e8o3tkp7E56l98zC');
    }
  }

  sd_dQi0ZDxCALyvvKO5(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_L8dj6KHB0MWU3lHf(bh);
      //appendnew_next_sd_dQi0ZDxCALyvvKO5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dQi0ZDxCALyvvKO5');
    }
  }

  //appendnew_flow_new_travel_requestComponent_start

  sd_MWBuy73tA0Xq4qCD(bh) {
    try {
      this.page.personalDetailsForm = undefined;
      this.page.travelForm = undefined;
      this.page.date = undefined;
      this.page.futureDate = undefined;
      this.page.userInfo = undefined;
      this.page.showInternaionalTravel = 'false';
      this.page.showVISA = 'false';
      this.page.project = undefined;
      bh = this.sd_3vQvCLGHPR3YmnTB(bh);
      //appendnew_next_sd_MWBuy73tA0Xq4qCD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MWBuy73tA0Xq4qCD');
    }
  }

  sd_3vQvCLGHPR3YmnTB(bh) {
    try {
      this.page.FormGroup = FormGroup;
      this.page.ReactiveFormsModule = ReactiveFormsModule;
      this.page.Fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_0eXmcODK8qapuwUY(bh);
      //appendnew_next_sd_3vQvCLGHPR3YmnTB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3vQvCLGHPR3YmnTB');
    }
  }

  sd_0eXmcODK8qapuwUY(bh) {
    try {
      this.page.myformservice =
        this.__page_injector__.get(myformserviceService);
      bh = this.selectData(bh);
      //appendnew_next_sd_0eXmcODK8qapuwUY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0eXmcODK8qapuwUY');
    }
  }

  selectData(bh) {
    try {
      const page = this.page;
      page.user = page.myformservice.userInfo;
      console.log('user', page.user);
      page.city = [
        { viewvalue: 'Cape Town' },
        { viewvalue: 'Johnnesburg' },
        { viewvalue: 'Bangalore' },
        { viewvalue: 'New York' },
      ];
      page.project = [{ viewvalue: 'Woligo' }, { viewvalue: 'Assupol' }];
      page.travelMode = [
        { viewvalue: 'Uber' },
        { viewvalue: 'Flight' },
        { viewvalue: 'Bus' },
        { viewvalue: 'Train' },
      ];
      page.nationality = [
        { viewvalue: 'African' },
        { viewvalue: 'Coloured' },
        { viewvalue: 'White' },
        { viewvalue: 'Indian' },
        { viewvalue: 'Other' },
      ];
      page.gender = [
        { viewvalue: 'Male' },
        { viewvalue: 'Female' },
        { viewvalue: 'Other' },
      ];
      page.purposeOfTravel = [
        { viewvalue: 'Meeting' },
        { viewvalue: 'Shootout' },
        { viewvalue: 'Sales' },
      ];
      page.accomodationPreferance = [
        { viewvalue: 'hotel' },
        { viewvalue: 'B&B' },
      ];
      bh = this.pDetails(bh);
      //appendnew_next_selectData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z1HHAwxxPpAGr8z8');
    }
  }

  pDetails(bh) {
    try {
      const page = this.page;
      page.personalDetailsForm = new FormGroup({
        firstName: new FormControl(page.user.personalDetails, [
          Validators.minLength(3),
          Validators.required,
        ]),
        lastName: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
        dob: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        position: new FormControl('', [Validators.required]),
        idNumber: new FormControl('', [
          Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
          Validators.max(13),
          Validators.required,
        ]),
        panNumber: new FormControl('', [
          Validators.minLength(10),
          Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}'),
          Validators.required,
        ]),
        passportNumber: new FormControl('', [Validators.required]),
        nationality: new FormControl('', [Validators.required]),
        station: new FormControl('', [Validators.required]),
        lineManager: new FormControl('', [Validators.required]),
        lineManagerEmail: new FormControl('', [Validators.required]),
      });
      console.log('user', page.user);
      bh = this.tDeatils(bh);
      //appendnew_next_pDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XoSN8pKbkzY3VXRC');
    }
  }

  tDeatils(bh) {
    try {
      const page = this.page; // page.travelForm = new FormGroup({
      //        travelMode: new FormControl ('',[Validators.required]),
      //       travelType: new FormControl ('',[Validators.required]),
      //       travelRequestType : new FormControl ('',[Validators.required]),
      //       travelPurpose: new FormControl ('',[Validators.required]),
      //       projectID: new FormControl ('',[Validators.required]),
      //       fromCity: new FormControl ('',[Validators.required]),
      //       toCity: new FormControl ('',[Validators.required]),
      //       fromDate: new FormControl ('',[Validators.required]),
      //       toDate: new FormControl ('',[Validators.required]),
      //       localPreferredTime: new FormControl ('',[Validators.required]),
      //       locatoncomments: new FormControl ('',[Validators.required]),
      //       passportDocument: new FormControl ('',[Validators.required]),
      //       needShuttleLocal: new FormControl ('',[Validators.required]),
      //       hotelPreference: new FormControl('',[Validators.required]),
      //       city: new FormControl('',[Validators.required]),
      //       checkInDate: new FormControl ('',[Validators.required]),
      //       checkOutDate: new FormControl ('',[Validators.required]),
      //       accommodationType: new FormControl ('',[Validators.required]),
      //       checkInTime: new FormControl ('',[Validators.required]),
      //       checkOutTime: new FormControl ('',[Validators.required]),
      //       employeeComments: new FormControl ('',[Validators.required])

      // })
      // console.log(page.travelForm.travelDetails)

      // page.travelForm = new FormGroup({

      page.travelForm = new FormGroup({
        travelDetails: page.Fb.group({
          travelMode: ['', [Validators.required]],
          travelType: ['', [Validators.required]],
          travelRequestType: ['', [Validators.required]],
          travelPurpose: ['', [Validators.required]],
          projectID: ['', [Validators.required]],
          fromCity: ['', [Validators.required]],
          toCity: ['', [Validators.required]],
          fromDate: ['', [Validators.required]],
          toDate: ['', [Validators.required]],
          tripType: ['', [Validators.required]],
          requestedFor: ['', [Validators.required]],
          requestType: ['', [Validators.required]],
          preferredTime: ['', [Validators.required]],
          travelerComments: ['', [Validators.required]],
          passportDocument: ['', [Validators.required]],
          visaRequired: ['', [Validators.required]],
          covidCertificate: ['', [Validators.required]],
          needShuttleLocal: ['', [Validators.required]],
        }),
        accommodationDetails: page.Fb.group({
          hotelPreference: ['', [Validators.required]],
          city: ['', [Validators.required]],
          checkInDate: ['', [Validators.required]],
          checkOutDate: ['', [Validators.required]],
          accommodationType: ['', [Validators.required]],
          checkInTime: ['', [Validators.required]],
          checkOutTime: ['', [Validators.required]],
          // employeeComments: ['',[Validators.required]]
          //  status: [),
        }),
      });

      console.log(page.travelForm.travelDetails);
      // needVisa: [null,[Validators.required]],
      // },{

      //   //international Travel
      //       ,
      //       travelIntMode: ['',[Validators.required]],
      //       travelIntType: ['',[Validators.required]],
      //       travelIntPurpose: ['',[Validators.required]],
      //       projectIntID: ['',[Validators.required]],
      //       fromInternationCity: ['',[Validators.required]],
      //       toInternationalCity: ['',[Validators.required]],
      //       fromIntDate: ['',[Validators.required]],
      //       toIntDate: ['',[Validators.required]],
      //       preferredIntTime: ['',[Validators.required]],
      //       internationalcomments: ['',[Validators.required]],
      //       visaDocument: ['',[Validators.required]],
      //      // status: [
      //       needShuttleInternamtinal: ['',[Validators.required]],
      //Accomodation Details
      bh = this.sd_bvYvWg7Xv6GTK5wB(bh);
      //appendnew_next_tDeatils
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DFBceSl6hbfqJq3d');
    }
  }

  sd_bvYvWg7Xv6GTK5wB(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate = new Date(page.date - 1);
      //appendnew_next_sd_bvYvWg7Xv6GTK5wB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bvYvWg7Xv6GTK5wB');
    }
  }

  sd_p628PvB6Wft0W8cy(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate = new Date(bh.input.currentDate - 1);
      //console.log(page.futureDate)
      //appendnew_next_sd_p628PvB6Wft0W8cy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p628PvB6Wft0W8cy');
    }
  }

  sd_zFu2Iz2olSAWbMFK(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form);
      console.log('Form', page.travelDetails);
      //appendnew_next_sd_zFu2Iz2olSAWbMFK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zFu2Iz2olSAWbMFK');
    }
  }

  sd_zD555oDG8OrpYULW(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form);
      console.log('Form', page.travelDetails);
      page.user = page.myformservice.userInfo;
      console.log('user', page.user);
      //appendnew_next_sd_zD555oDG8OrpYULW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zD555oDG8OrpYULW');
    }
  }

  sd_L8dj6KHB0MWU3lHf(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form);
      console.log('Form', page.travelDetails);
      page.user = page.myformservice.userInfo;
      console.log('user', page.user);
      //appendnew_next_sd_L8dj6KHB0MWU3lHf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L8dj6KHB0MWU3lHf');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_new_travel_requestComponent_Catch
}
