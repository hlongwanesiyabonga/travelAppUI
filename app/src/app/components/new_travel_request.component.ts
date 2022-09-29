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
  FormArray,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-new_travel_request',
  templateUrl: './new_travel_request.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class new_travel_requestComponent {
  @Output('outputVar')
  public outputVar: any = new EventEmitter<any>();
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

  onFileChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_L8dj6KHB0MWU3lHf(bh);
      //appendnew_next_onFileChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dQi0ZDxCALyvvKO5');
    }
  }

  addNewRequestForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_LYJcmnJwoRoJ6qQz(bh);
      //appendnew_next_addNewRequestForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vIyeD3TDlSiq1fsw');
    }
  }

  dateChange(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_7E0kFOs0S0LoIGyd(bh);
      //appendnew_next_dateChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nQp7Ok4Ni2vmpKyc');
    }
  }

  removeNewRequestFormLeg(i = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { i: i };
      bh.local = {};
      bh = this.sd_95E59tpBNueqjcTi(bh);
      //appendnew_next_removeNewRequestFormLeg
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_67aOoRf2YhdTaSXA');
    }
  }

  selectChangesFunction(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_KSMim0D7ZZLU1qV0(bh);
      //appendnew_next_selectChangesFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hKIdGwv5EY1dYacv');
    }
  }

  submit_clear_draft(
    event: any = undefined,
    form: any = undefined,
    personalDetailsForm: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {
        event: event,
        form: form,
        personalDetailsForm: personalDetailsForm,
      };
      bh.local = {};
      bh = this.sd_Tyw2L65nU6abERyb(bh);
      //appendnew_next_submit_clear_draft
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kwd7KJtk5BkZ9WYJ');
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
      this.page.showVISA = false;
      this.page.project = undefined;
      this.page.requestDetails = undefined;
      this.page.requestDetailsForm = undefined;
      this.page.showHideElement = false;
      this.page.showHideButton = false;
      this.page.showID = false;
      this.page.showPan = false;
      this.page.get = undefined;
      this.page.personalDetails = undefined;
      this.page.fetchedRequestForm = undefined;
      this.page.formObj = undefined;
      this.page.key = undefined;
      this.page.other = false;
      this.page.otherToCity = false;
      this.page.newRequestButtons = true;
      this.page.managerButtons = false;
      this.page.dialogData = undefined;
      this.page.filterPersonalDetail = [];
      this.page.tempArr = undefined;
      this.page.travelRequestType = undefined;
      this.page.addLeg = false;
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
      this.page.FormArray = FormArray;
      bh = this.selectData(bh);
      //appendnew_next_sd_3vQvCLGHPR3YmnTB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3vQvCLGHPR3YmnTB');
    }
  }

  selectData(bh) {
    try {
      const page = this.page;
      page.identification = [
        { viewvalue: 'ID Number' },
        { viewvalue: 'PAN Number' },
        { viewvalue: 'Passoprt Number' },
      ];
      page.options = [
        { viewvalue: 'Yes' },
        { viewvalue: 'No' },
        { viewvalue: 'Unsure' },
      ];
      page.city = [
        { viewvalue: 'Cape Town' },
        { viewvalue: 'Johnnesburg' },
        { viewvalue: 'Bangalore' },
        { viewvalue: 'New York' },
        { viewvalue: 'Other' },
      ];
      page.travelType = [
        { viewvalue: 'International' },
        { viewvalue: 'Domestic' },
      ];
      page.travelMode = [
        { viewvalue: 'Road' },
        { viewvalue: 'Airway' },
        { viewvalue: 'Railway' },
      ];
      page.nationality = [
        { viewvalue: 'South African' },
        { viewvalue: 'Asian' },
        { viewvalue: 'Eurpoean' },
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
      bh = this.personalDetails(bh);
      //appendnew_next_selectData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z1HHAwxxPpAGr8z8');
    }
  }

  personalDetails(bh) {
    try {
      const page = this.page;
      page.personalDetailsForm = new FormGroup({
        requestedFor: new FormControl(''),
        requestType: new FormControl(''),
        firstName: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
        lastName: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
        dateOfBirth: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        designation: new FormControl('', [Validators.required]),
        idNumber: new FormControl(false, [Validators.required]),
        panNumber: new FormControl(null, [
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

      bh = this.formControlsCreation(bh);
      //appendnew_next_personalDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XoSN8pKbkzY3VXRC');
    }
  }

  formControlsCreation(bh) {
    try {
      const page = this.page;
      page.travelForm = new FormGroup({
        requestDetails: page.Fb.array([]),
      });
      bh = this.sd_bvYvWg7Xv6GTK5wB(bh);
      //appendnew_next_formControlsCreation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DFBceSl6hbfqJq3d');
    }
  }

  sd_bvYvWg7Xv6GTK5wB(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate =
        page.travelForm?.controls?.requestDetails?.controls[0]?.controls?.accommodationDetails?.controls?.checkOutDate;
      page.email = 'neutrinostravellm@gmail.com';
      bh.endPoint = 'genericGet/getPersonalDetails?email=' + page.email;
      bh.method = 'get';
      bh = this.sd_eYkVAuOfjYx8O61u(bh);
      //appendnew_next_sd_bvYvWg7Xv6GTK5wB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bvYvWg7Xv6GTK5wB');
    }
  }

  sd_eYkVAuOfjYx8O61u(bh) {
    try {
      let outputVariables = this.addNewRequestForm();

      //appendnew_next_sd_eYkVAuOfjYx8O61u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eYkVAuOfjYx8O61u');
    }
  }

  sd_p628PvB6Wft0W8cy(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate = new Date(bh.input.currentDate - 1);

      //appendnew_next_sd_p628PvB6Wft0W8cy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p628PvB6Wft0W8cy');
    }
  }

  sd_L8dj6KHB0MWU3lHf(bh) {
    try {
      const page = this.page;
      if (bh.input.event.target.files.length > 0) {
        const file = bh.input.event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          page.passportBase64 = reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
      //appendnew_next_sd_L8dj6KHB0MWU3lHf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L8dj6KHB0MWU3lHf');
    }
  }

  sd_LYJcmnJwoRoJ6qQz(bh) {
    try {
      const page = this.page;
      page.travelForm.get('requestDetails').push(
        new FormGroup({
          travelDetails: page.Fb.group({
            travelMode: ['', [Validators.required]],
            travelType: ['', [Validators.required]],
            travelPurpose: ['', [Validators.required]],
            projectID: ['', [Validators.required]],
            fromCity: ['', [Validators.required]],
            toCity: ['', [Validators.required]],
            fromDate: ['', [Validators.required]],
            toDate: ['', [Validators.required]],
            tripType: ['', [Validators.required]],
            preferredTime: ['', [Validators.required]],
            travelerComments: [''],
            passportDocument: [''],
            visaRequired: ['', []],
            covidCertificate: [''],
            passport: [''],
            needvehicle: ['', [Validators.required]],
            needAccommodation: ['', [Validators.required]],
          }),
          accommodationDetails: page.Fb.group({
            accommodationPreference: [''],
            city: [''],
            checkInDate: [''],
            checkOutDate: [''],
            checkInTime: [''],
            checkOutTime: [''],
            employeeComments: [''],
          }),
        })
      );

      //appendnew_next_sd_LYJcmnJwoRoJ6qQz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LYJcmnJwoRoJ6qQz');
    }
  }

  sd_7E0kFOs0S0LoIGyd(bh) {
    try {
      const page = this.page;
      page.futureDate = new Date(bh.input.date.value);

      //appendnew_next_sd_7E0kFOs0S0LoIGyd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7E0kFOs0S0LoIGyd');
    }
  }

  sd_95E59tpBNueqjcTi(bh) {
    try {
      const page = this.page;
      page.travelForm.get('requestDetails').removeAt(bh.input.i);
      //appendnew_next_sd_95E59tpBNueqjcTi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_95E59tpBNueqjcTi');
    }
  }

  sd_KSMim0D7ZZLU1qV0(bh) {
    try {
      const page = this.page;
      if (bh.input.event.value == 'International') {
        page.showVISA = true;
      } else if (bh.input.event.value == 'Domestic') {
        page.showVISA = false;
      } else if (bh.input.event.value == 'one-way') {
        page.addLeg = true;
      } else if (bh.input.event.value == 'Return') {
        page.addLeg = false;
      }
      //appendnew_next_sd_KSMim0D7ZZLU1qV0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KSMim0D7ZZLU1qV0');
    }
  }

  sd_Tyw2L65nU6abERyb(bh) {
    try {
      const page = this.page; //combine the 2 forms
      console.log(page.travelRequestType, 'retype');
      page.formObj = {
        personalDetails: bh.input.personalDetailsForm,
        requestDetails: bh.input.form.requestDetails,
        status: null,
        managerApproval: {
          approvedRequest: null,
          comments: '',
        },
        owner: bh.input.personalDetailsForm.email,
        dateCreated: new Date(),
        travelRequestType: page.travelRequestType,
      };
      console.log(page.formObj, 'page.formObj');
      //     let tempDetails = []
      // page.formObj.requestDetails.forEach(detail => {
      //     detail['travelDetails']['passportDocument'] = page.passportBase64;
      //     detail['travelDetails']['covidCertificate'] = page.covidBase64;
      //     tempDetails.push(detail);
      // })
      // page.formObj.requestDetails = tempDetails;
      // console.log(page.formObj, 'form');

      bh.endPoint =
        bh.input.event == 'Draft'
          ? 'addTravelRequest?type=draft'
          : 'addTravelRequest';
      bh.method = 'post';
      // page.currentUserTravelDetails = page.formObj
      console.log('end', bh.endPoint);
      bh = this.sd_hzlAOioSF7sfAnch(bh);
      //appendnew_next_sd_Tyw2L65nU6abERyb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tyw2L65nU6abERyb');
    }
  }

  sd_hzlAOioSF7sfAnch(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.event,
          'Submit',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_NtmVgjxzgfE27lTh(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.event,
          'Draft',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_lB67lzj3szt8sQDn(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hzlAOioSF7sfAnch');
    }
  }

  sd_NtmVgjxzgfE27lTh(bh) {
    try {
      const page = this.page;
      console.log('Submit');
      //appendnew_next_sd_NtmVgjxzgfE27lTh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NtmVgjxzgfE27lTh');
    }
  }

  sd_lB67lzj3szt8sQDn(bh) {
    try {
      const page = this.page;
      console.log('draft');
      //appendnew_next_sd_lB67lzj3szt8sQDn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lB67lzj3szt8sQDn');
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
