/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-travelRequestDialog',
  templateUrl: './travelRequestDialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class travelRequestDialogComponent {
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
      this.sd_DkSmuciNKdrOH77u(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DkSmuciNKdrOH77u(bh) {
    try {
      bh = this.sd_dKR1CDYhHBtFp2Cu(bh);
      //appendnew_next_sd_DkSmuciNKdrOH77u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DkSmuciNKdrOH77u');
    }
  }

  date(currentDate: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentDate: currentDate };
      bh.local = {};
      bh = this.sd_ppAmTCAYbLaLSTaX(bh);
      //appendnew_next_date
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uWHq1Dp7Csd3aBiF');
    }
  }

  addNewRequestForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_evDNWZsHJfXOCRaM(bh);
      //appendnew_next_addNewRequestForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e7DOoTSFnpZdf0rD');
    }
  }

  dateChange(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_NfT0QW285F3ULrlr(bh);
      //appendnew_next_dateChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u1ttUNEAUx5QFPmN');
    }
  }

  removeNewRequestFormLeg(i = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { i: i };
      bh.local = {};
      bh = this.sd_SQ4jVKq0a9z9QQ05(bh);
      //appendnew_next_removeNewRequestFormLeg
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UCYiFWFzQseD0jRM');
    }
  }

  selectChangesFunction(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_xjdqwERfXI7cnMsA(bh);
      //appendnew_next_selectChangesFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R5NsX4bq7Abdda13');
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
      bh = this.sd_ZwfIuQKrmasydlhZ(bh);
      //appendnew_next_submit_clear_draft
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vHBUwGAsuiNp1qT9');
    }
  }

  resetForm(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_0RUidJjykP7OTPSg(bh);
      //appendnew_next_resetForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c0ARQOJr3ERIQNoo');
    }
  }

  requstedForHideandShow(element: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { element: element };
      bh.local = {};
      bh = this.sd_cUd8vpTDrDwNedMh(bh);
      //appendnew_next_requstedForHideandShow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FpSVUfAFGPuCgGeT');
    }
  }

  onSelectionChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_fzJp34GIv6oUdopb(bh);
      //appendnew_next_onSelectionChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1UTdGB9sCgtubUsj');
    }
  }

  requstedForFilter(element: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { element: element };
      bh.local = {};
      bh = this.sd_KmjZixvZ4izwdupr(bh);
      //appendnew_next_requstedForFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hs9LplnwwLonxV6Z');
    }
  }

  onFileChangeCovidCertificate(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_NaxqEzPfFReFUSoO(bh);
      //appendnew_next_onFileChangeCovidCertificate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_29njAULcoIfjcyW6');
    }
  }

  onFileChangePassport(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_3xt3Vv5VCln8qBf9(bh);
      //appendnew_next_onFileChangePassport
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EoiSx9rxclgOS4Rf');
    }
  }

  onFileChangeVISA(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_QuloaPWjRMdhjCSN(bh);
      //appendnew_next_onFileChangeVISA
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_idoOrI20tJYwW2dI');
    }
  }

  closeDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xbmjI6QOi3Utcox6(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1kbwyDGL1GaJuGCz');
    }
  }

  //appendnew_flow_travelRequestDialogComponent_start

  sd_dKR1CDYhHBtFp2Cu(bh) {
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
      bh = this.sd_p2jobIDNOPwMmWIv(bh);
      //appendnew_next_sd_dKR1CDYhHBtFp2Cu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dKR1CDYhHBtFp2Cu');
    }
  }

  sd_p2jobIDNOPwMmWIv(bh) {
    try {
      this.page.FormGroup = FormGroup;
      this.page.ReactiveFormsModule = ReactiveFormsModule;
      this.page.Fb = this.__page_injector__.get(FormBuilder);
      this.page.FormArray = FormArray;
      bh = this.selectData(bh);
      //appendnew_next_sd_p2jobIDNOPwMmWIv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p2jobIDNOPwMmWIv');
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
      return this.errorHandler(bh, e, 'sd_qiSMaI9iI9CnF6TZ');
    }
  }

  personalDetails(bh) {
    try {
      const page = this.page;
      page.personalDetailsForm = new FormGroup({
        // requester: new FormControl (''),
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
      return this.errorHandler(bh, e, 'sd_R9qC4c8FVuAuJn3k');
    }
  }

  formControlsCreation(bh) {
    try {
      const page = this.page;
      page.travelForm = new FormGroup({
        requestDetails: page.Fb.array([]),
      });
      bh = this.sd_tqA5pIlDHIwV3aKk(bh);
      //appendnew_next_formControlsCreation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iCXWSYCRWV3J74hy');
    }
  }

  sd_tqA5pIlDHIwV3aKk(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.getPersonalDetails(bh);
      //appendnew_next_sd_tqA5pIlDHIwV3aKk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tqA5pIlDHIwV3aKk');
    }
  }

  getPersonalDetails(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate =
        page.travelForm?.controls?.requestDetails?.controls[0]?.controls?.accommodationDetails?.controls?.checkOutDate;
      bh.endPoint =
        'genericGet/getPersonalDetails?email=' + page.currentUserDetails.email;
      bh.method = 'get';
      bh = this.sd_ub1Q1tUrQeMF1rdJ(bh);
      //appendnew_next_getPersonalDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YiPpV3vwZ0LMah9G');
    }
  }

  sd_ub1Q1tUrQeMF1rdJ(bh) {
    try {
      let outputVariables = this.addNewRequestForm();

      bh = this.fetchDetails(bh);
      //appendnew_next_sd_ub1Q1tUrQeMF1rdJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ub1Q1tUrQeMF1rdJ');
    }
  }

  fetchDetails(bh) {
    try {
      const page = this.page;
      bh.key = 'currentUserDetails';
      //page.personalDetailsForm.patchValue(page.personalDetails);
      bh = this.sd_AbJDxIpvNWing52Y(bh);
      //appendnew_next_fetchDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YsC9OHJcqI0z6xgD');
    }
  }

  sd_AbJDxIpvNWing52Y(bh) {
    try {
      this.page.requesterDetails = JSON.parse(sessionStorage.getItem(bh.key));
      bh = this.sd_mJTAUBsUUXyI6Bll(bh);
      //appendnew_next_sd_AbJDxIpvNWing52Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AbJDxIpvNWing52Y');
    }
  }

  sd_mJTAUBsUUXyI6Bll(bh) {
    try {
      const page = this.page;
      page.requester = `${page.requesterDetails.firstName} ${page.requesterDetails.lastName}`;
      //page.personalDetailsForm?.value?.requester?.patchValue(page.requester)
      //appendnew_next_sd_mJTAUBsUUXyI6Bll
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mJTAUBsUUXyI6Bll');
    }
  }

  sd_ppAmTCAYbLaLSTaX(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate = new Date(bh.input.currentDate - 1);

      //appendnew_next_sd_ppAmTCAYbLaLSTaX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ppAmTCAYbLaLSTaX');
    }
  }

  sd_evDNWZsHJfXOCRaM(bh) {
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
            visa: [''],
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
      //page.travelForm.requestDetails.patchValue();

      //appendnew_next_sd_evDNWZsHJfXOCRaM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_evDNWZsHJfXOCRaM');
    }
  }

  sd_NfT0QW285F3ULrlr(bh) {
    try {
      const page = this.page;
      page.futureDate = new Date(bh.input.date.value);

      //appendnew_next_sd_NfT0QW285F3ULrlr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NfT0QW285F3ULrlr');
    }
  }

  sd_SQ4jVKq0a9z9QQ05(bh) {
    try {
      const page = this.page;
      page.travelForm.get('requestDetails').removeAt(bh.input.i);
      //appendnew_next_sd_SQ4jVKq0a9z9QQ05
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SQ4jVKq0a9z9QQ05');
    }
  }

  sd_xjdqwERfXI7cnMsA(bh) {
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
      } else if (bh.input.event.value == 'On Behalf') {
        console.log('on behalf');
        page.requestedFor = true;
      } else if (bh.input.event.value == 'Self') {
        page.requestedFor = false;

        bh.endPoint =
          'genericGet/getPersonalDetails?email=' + page.requesterDetails.email;
        bh.method = 'get';
      }
      //appendnew_next_sd_xjdqwERfXI7cnMsA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xjdqwERfXI7cnMsA');
    }
  }

  sd_ZwfIuQKrmasydlhZ(bh) {
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
      let tempDetails = [];
      page.formObj.requestDetails.forEach((detail) => {
        detail['travelDetails']['passportDocument'] = page.passportBase64;
        detail['travelDetails']['covidCertificate'] = page.covidBase64;
        tempDetails.push(detail);
      });
      page.formObj.requestDetails = tempDetails;
      console.log(page.formObj, 'form');

      bh.endPoint =
        bh.input.event == 'Draft'
          ? 'addTravelRequest?type=draft'
          : 'addTravelRequest';
      bh.method = 'post';
      page.currentUserTravelDetails = page.formObj;

      bh = this.sd_h2n3H0SwiraKo0e4(bh);
      //appendnew_next_sd_ZwfIuQKrmasydlhZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZwfIuQKrmasydlhZ');
    }
  }

  sd_h2n3H0SwiraKo0e4(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.event,
          'Submit',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_SEqDdT4LGpkFP90j(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.event,
          'Draft',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_oxrXVLpBEz5UnCHc(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h2n3H0SwiraKo0e4');
    }
  }

  sd_SEqDdT4LGpkFP90j(bh) {
    try {
      const page = this.page;
      console.log('Submit');
      console.log('end', bh.endPoint);
      bh = this.sd_tXxtjaupvgy5tu7R(bh);
      //appendnew_next_sd_SEqDdT4LGpkFP90j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SEqDdT4LGpkFP90j');
    }
  }

  sd_tXxtjaupvgy5tu7R(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Form is submitted', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_nBaRWTRf8M3mIXDh(bh);
      //appendnew_next_sd_tXxtjaupvgy5tu7R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tXxtjaupvgy5tu7R');
    }
  }

  async sd_nBaRWTRf8M3mIXDh(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.formObj
      );
      bh.response = outputVariables.local.result;

      //appendnew_next_sd_nBaRWTRf8M3mIXDh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nBaRWTRf8M3mIXDh');
    }
  }

  sd_oxrXVLpBEz5UnCHc(bh) {
    try {
      const page = this.page;
      console.log('draft');
      console.log('end', bh.endPoint);
      bh = this.sd_pVcK3Rg7eLNIGS7p(bh);
      //appendnew_next_sd_oxrXVLpBEz5UnCHc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oxrXVLpBEz5UnCHc');
    }
  }

  sd_pVcK3Rg7eLNIGS7p(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Form is saved as draft', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_nBaRWTRf8M3mIXDh(bh);
      //appendnew_next_sd_pVcK3Rg7eLNIGS7p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pVcK3Rg7eLNIGS7p');
    }
  }

  sd_0RUidJjykP7OTPSg(bh) {
    try {
      const page = this.page;
      bh.input.form.reset();
      //appendnew_next_sd_0RUidJjykP7OTPSg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0RUidJjykP7OTPSg');
    }
  }

  sd_cUd8vpTDrDwNedMh(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.element.value,
          'Self',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Pf2zuzjAD1ISXrNp(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.element.value,
          'On Behalf',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_KmjZixvZ4izwdupr(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cUd8vpTDrDwNedMh');
    }
  }

  sd_Pf2zuzjAD1ISXrNp(bh) {
    try {
      const page = this.page;
      console.log('self');
      page.requestedFor = false;

      bh.endPoint =
        'genericGet/getPersonalDetails?email=' + page.requesterDetails.email;
      bh.method = 'get';
      bh = this.sd_Wqi1RIaHcnKWF9IZ(bh);
      //appendnew_next_sd_Pf2zuzjAD1ISXrNp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pf2zuzjAD1ISXrNp');
    }
  }

  async sd_Wqi1RIaHcnKWF9IZ(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      bh.local.selfDetails = outputVariables.local.result;

      bh = this.sd_PAMTEUw5zOJq0gf3(bh);
      //appendnew_next_sd_Wqi1RIaHcnKWF9IZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Wqi1RIaHcnKWF9IZ');
    }
  }

  sd_PAMTEUw5zOJq0gf3(bh) {
    try {
      const page = this.page;
      bh.local.selfDetails['dateOfBirth'] = new Date(
        bh.local.selfDetails['dateOfBirth']
      );
      page.personalDetailsForm.patchValue(bh.local.selfDetails);
      //appendnew_next_sd_PAMTEUw5zOJq0gf3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PAMTEUw5zOJq0gf3');
    }
  }

  sd_KmjZixvZ4izwdupr(bh) {
    try {
      const page = this.page;
      console.log('on behalf');
      page.requestedFor = true;
      bh.emitValue = bh.input.element?.target?.value;
      bh.endPoint = 'genericGet/getPersonalDetails';
      bh.method = 'get';
      bh = this.sd_k8XsTz0zseEBFDU8(bh);
      //appendnew_next_sd_KmjZixvZ4izwdupr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KmjZixvZ4izwdupr');
    }
  }

  async sd_k8XsTz0zseEBFDU8(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.allPersonalDetails = outputVariables.local.result;

      bh = this.sd_06sUGUfBsL0CeLLy(bh);
      //appendnew_next_sd_k8XsTz0zseEBFDU8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k8XsTz0zseEBFDU8');
    }
  }

  sd_06sUGUfBsL0CeLLy(bh) {
    try {
      const page = this.page;
      page.filterPersonalDetail = page.allPersonalDetails;
      let tempArr = page.filterPersonalDetail.filter((obj) =>
        obj.email?.toLowerCase().includes(bh?.emitValue?.toLowerCase())
      );
      page.allPersonalDetails = tempArr;
      //appendnew_next_sd_06sUGUfBsL0CeLLy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_06sUGUfBsL0CeLLy');
    }
  }

  sd_fzJp34GIv6oUdopb(bh) {
    try {
      const page = this.page;
      let personalDetails = page.allPersonalDetails.find(
        (el) => bh.input.event.option.value == el.email
      );
      if (personalDetails) {
        personalDetails['dateOfBirth'] = new Date(
          personalDetails['dateOfBirth']
        );
        page.personalDetailsForm.patchValue(personalDetails);
      }
      //appendnew_next_sd_fzJp34GIv6oUdopb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fzJp34GIv6oUdopb');
    }
  }

  sd_NaxqEzPfFReFUSoO(bh) {
    try {
      const page = this.page;
      if (bh.input.event.target.files.length > 0) {
        const file = bh.input.event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          page.covidBase64 = reader.result;
          console.log(page.covidBase64);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
      //appendnew_next_sd_NaxqEzPfFReFUSoO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NaxqEzPfFReFUSoO');
    }
  }

  sd_3xt3Vv5VCln8qBf9(bh) {
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
      //appendnew_next_sd_3xt3Vv5VCln8qBf9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3xt3Vv5VCln8qBf9');
    }
  }

  sd_QuloaPWjRMdhjCSN(bh) {
    try {
      const page = this.page;
      if (bh.input.event.target.files.length > 0) {
        const file = bh.input.event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          page.visa64 = reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
      //appendnew_next_sd_QuloaPWjRMdhjCSN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QuloaPWjRMdhjCSN');
    }
  }

  sd_xbmjI6QOi3Utcox6(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.res);

      //appendnew_next_sd_xbmjI6QOi3Utcox6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xbmjI6QOi3Utcox6');
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
  //appendnew_flow_travelRequestDialogComponent_Catch
}
