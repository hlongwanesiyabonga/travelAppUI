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
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
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
      this.sd_6WYmtVhU7l8X4POJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6WYmtVhU7l8X4POJ(bh) {
    try {
      bh = this.sd_P2VT6lPYUkxBIGR8(bh);
      //appendnew_next_sd_6WYmtVhU7l8X4POJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6WYmtVhU7l8X4POJ');
    }
  }

  date(currentDate: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentDate: currentDate };
      bh.local = {};
      bh = this.sd_xHwnWGVuzjtXDqcG(bh);
      //appendnew_next_date
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AmCxfqogxppJZBe7');
    }
  }

  addNewRequestForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_hScwS1juTjWPuqEC(bh);
      //appendnew_next_addNewRequestForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w5pOesW14XfzzbJ7');
    }
  }

  dateChange(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_Tc5hFe7RoVqPR5t3(bh);
      //appendnew_next_dateChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rKVJJlFehEAzwwdp');
    }
  }

  removeNewRequestFormLeg(i = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { i: i };
      bh.local = {};
      bh = this.sd_9Y5mWui7juXMovzf(bh);
      //appendnew_next_removeNewRequestFormLeg
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_24IXOHlEpLZ8T9kN');
    }
  }

  selectChangesFunction(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_PXvWVGAeFdz006cx(bh);
      //appendnew_next_selectChangesFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TGuWYOJrciJo3Dgz');
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
      bh = this.sd_3BSYymrgOaMoS0L7(bh);
      //appendnew_next_submit_clear_draft
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cdn3EtXQ3YnIyRL5');
    }
  }

  requstedForHideandShow(element: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { element: element };
      bh.local = {};
      bh = this.sd_CqJFOYokZlzXnhSZ(bh);
      //appendnew_next_requstedForHideandShow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mlhXh4dnquQkKec9');
    }
  }

  onSelectionChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_WJgvwj5HOKqEGRwF(bh);
      //appendnew_next_onSelectionChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bks6mZY0IJvLl0Ve');
    }
  }

  requstedForFilter(element: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { element: element };
      bh.local = {};
      bh = this.sd_xvacI53RCqKmdIgZ(bh);
      //appendnew_next_requstedForFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I2UgL6nBjpqJ6txa');
    }
  }

  onFileChangeCovidCertificate(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_gdbVfeNm2A4NOU7n(bh);
      //appendnew_next_onFileChangeCovidCertificate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7MI8LoTVZD5GeyLl');
    }
  }

  onFileChangePassport(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_eSdPlGjxGZR6ryaK(bh);
      //appendnew_next_onFileChangePassport
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n0rhmOmGuRPIvpqy');
    }
  }

  onFileChangeVISA(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_NJDEhlDtAQH2soW2(bh);
      //appendnew_next_onFileChangeVISA
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NlorzulJd2B2daak');
    }
  }

  toCityFunction(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_8wTh1q6GCcKXFE27(bh);
      //appendnew_next_toCityFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tB7Z8H9N0Avikteq');
    }
  }

  closeDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ekAUZaEpB7sWNNPr(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ezoaygaWeGwsmasO');
    }
  }

  prepopulateDialogData(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Yd93VALldmBZL9nt(bh);
      //appendnew_next_prepopulateDialogData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8IG9kIoXhgq3PLMJ');
    }
  }

  changeRequestStatus(
    personalDetailsForm: any = undefined,
    form: any = undefined,
    status: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {
        personalDetailsForm: personalDetailsForm,
        form: form,
        status: status,
      };
      bh.local = {};
      bh = this.sd_y9vlZQis7lSv62t7(bh);
      //appendnew_next_changeRequestStatus
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EFqi8sYgMWZKikYj');
    }
  }

  submitQuote(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_6rpztMIMTheUCgHP(bh);
      //appendnew_next_submitQuote
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SqiOu03c1MIgMpeg');
    }
  }

  changeQuoteStatus(quoteStatus: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { quoteStatus: quoteStatus };
      bh.local = {};
      bh = this.sd_8uLa6zbDYq5f2Hu6(bh);
      //appendnew_next_changeQuoteStatus
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dvssffiSBQPubuzh');
    }
  }

  updateForm(
    form: any = undefined,
    personalDetailsForm: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form, personalDetailsForm: personalDetailsForm };
      bh.local = {};
      bh = this.sd_W3spsxyROsNc9uRj(bh);
      //appendnew_next_updateForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CZesLa44rIG0sO7y');
    }
  }

  //appendnew_flow_travelRequestDialogComponent_start

  sd_P2VT6lPYUkxBIGR8(bh) {
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
      bh = this.sd_53I9agaPXi6pjczn(bh);
      //appendnew_next_sd_P2VT6lPYUkxBIGR8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P2VT6lPYUkxBIGR8');
    }
  }

  sd_53I9agaPXi6pjczn(bh) {
    try {
      this.page.FormGroup = FormGroup;
      this.page.ReactiveFormsModule = ReactiveFormsModule;
      this.page.Fb = this.__page_injector__.get(FormBuilder);
      this.page.FormArray = FormArray;
      bh = this.selectData(bh);
      //appendnew_next_sd_53I9agaPXi6pjczn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_53I9agaPXi6pjczn');
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
      return this.errorHandler(bh, e, 'sd_TyXwwhOxvrSauDid');
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
      return this.errorHandler(bh, e, 'sd_CgNBfs4CGMJQbeUV');
    }
  }

  formControlsCreation(bh) {
    try {
      const page = this.page;
      page.travelForm = new FormGroup({
        requestDetails: page.Fb.array([]),
      });
      bh = this.sd_uBhaJPDfMPLkFt3H(bh);
      //appendnew_next_formControlsCreation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WmTYo4smXsId7aP4');
    }
  }

  sd_uBhaJPDfMPLkFt3H(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.getPersonalDetails(bh);
      //appendnew_next_sd_uBhaJPDfMPLkFt3H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uBhaJPDfMPLkFt3H');
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
      bh = this.fetchDetails(bh);
      //appendnew_next_getPersonalDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CZGt9E2Y3qaPzkSX');
    }
  }

  fetchDetails(bh) {
    try {
      const page = this.page;
      bh.key = 'currentUserDetails';
      //page.personalDetailsForm.patchValue(page.personalDetails);
      bh = this.sd_F45A77cIGanDczTn(bh);
      //appendnew_next_fetchDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AbtojIch8izcS2He');
    }
  }

  sd_F45A77cIGanDczTn(bh) {
    try {
      this.page.requesterDetails = JSON.parse(sessionStorage.getItem(bh.key));
      bh = this.sd_tSte3OpGPIhzRDnX(bh);
      //appendnew_next_sd_F45A77cIGanDczTn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F45A77cIGanDczTn');
    }
  }

  sd_tSte3OpGPIhzRDnX(bh) {
    try {
      const page = this.page;
      page.requester = `${page.requesterDetails.firstName} ${page.requesterDetails.lastName}`;
      //page.personalDetailsForm?.value?.requester?.patchValue(page.requester)

      bh = this.sd_URlPiFkFJorKKLLm(bh);
      //appendnew_next_sd_tSte3OpGPIhzRDnX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tSte3OpGPIhzRDnX');
    }
  }

  sd_URlPiFkFJorKKLLm(bh) {
    try {
      let outputVariables = this.prepopulateDialogData();

      bh = this.sd_OTQGYEVaD9R5IRGe(bh);
      //appendnew_next_sd_URlPiFkFJorKKLLm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_URlPiFkFJorKKLLm');
    }
  }

  sd_OTQGYEVaD9R5IRGe(bh) {
    try {
      const page = this.page;
      console.log(page.showDrafts, 'showDrafts');

      //appendnew_next_sd_OTQGYEVaD9R5IRGe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OTQGYEVaD9R5IRGe');
    }
  }

  sd_xHwnWGVuzjtXDqcG(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate = new Date(bh.input.currentDate - 1);

      //appendnew_next_sd_xHwnWGVuzjtXDqcG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xHwnWGVuzjtXDqcG');
    }
  }

  sd_hScwS1juTjWPuqEC(bh) {
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

      //appendnew_next_sd_hScwS1juTjWPuqEC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hScwS1juTjWPuqEC');
    }
  }

  sd_Tc5hFe7RoVqPR5t3(bh) {
    try {
      const page = this.page;
      page.futureDate = new Date(bh.input.date.value);

      //appendnew_next_sd_Tc5hFe7RoVqPR5t3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tc5hFe7RoVqPR5t3');
    }
  }

  sd_9Y5mWui7juXMovzf(bh) {
    try {
      const page = this.page;
      page.travelForm.get('requestDetails').removeAt(bh.input.i);
      //appendnew_next_sd_9Y5mWui7juXMovzf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Y5mWui7juXMovzf');
    }
  }

  sd_PXvWVGAeFdz006cx(bh) {
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
      } else if (bh.input.event.value == 'Other') {
        page.other = true;
      }

      //appendnew_next_sd_PXvWVGAeFdz006cx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PXvWVGAeFdz006cx');
    }
  }

  sd_3BSYymrgOaMoS0L7(bh) {
    try {
      const page = this.page; //combine the 2 forms
      console.log(page.travelRequestType, 'retype');
      page.formObj = {
        _id: page.dialogData._id,
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

      bh.endPoint = 'addTravelRequest';
      bh.method = 'post';
      page.currentUserTravelDetails = page.formObj;

      bh = this.sd_NXB4LhhwZJ1NvJ1z(bh);
      //appendnew_next_sd_3BSYymrgOaMoS0L7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3BSYymrgOaMoS0L7');
    }
  }

  sd_NXB4LhhwZJ1NvJ1z(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Form is submitted', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_YxHp4AR89CMJ5Z47(bh);
      //appendnew_next_sd_NXB4LhhwZJ1NvJ1z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NXB4LhhwZJ1NvJ1z');
    }
  }

  sd_YxHp4AR89CMJ5Z47(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.res);

      bh = this.sd_TKLDBEVAFwcgxPM5(bh);
      //appendnew_next_sd_YxHp4AR89CMJ5Z47
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YxHp4AR89CMJ5Z47');
    }
  }

  async sd_TKLDBEVAFwcgxPM5(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.formObj
      );
      this.page.res = outputVariables.local.result;

      bh = this.sd_gKvGm16UtX58kUU8(bh);
      //appendnew_next_sd_TKLDBEVAFwcgxPM5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TKLDBEVAFwcgxPM5');
    }
  }

  sd_gKvGm16UtX58kUU8(bh) {
    try {
      const page = this.page;
      this.outputVar.emit(page.showDashboard);
      //appendnew_next_sd_gKvGm16UtX58kUU8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gKvGm16UtX58kUU8');
    }
  }

  sd_CqJFOYokZlzXnhSZ(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.element.value,
          'Self',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zshWVVTuup9rE1Cl(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.element.value,
          'On Behalf',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_xvacI53RCqKmdIgZ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CqJFOYokZlzXnhSZ');
    }
  }

  sd_zshWVVTuup9rE1Cl(bh) {
    try {
      const page = this.page;
      console.log('self');
      page.requestedFor = false;

      bh.endPoint =
        'genericGet/getPersonalDetails?email=' + page.requesterDetails.email;
      bh.method = 'get';
      bh = this.sd_Y1NuKdDpFbhlqd7l(bh);
      //appendnew_next_sd_zshWVVTuup9rE1Cl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zshWVVTuup9rE1Cl');
    }
  }

  async sd_Y1NuKdDpFbhlqd7l(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      bh.local.selfDetails = outputVariables.local.result;

      bh = this.sd_OVHPZK7w2svoRY64(bh);
      //appendnew_next_sd_Y1NuKdDpFbhlqd7l
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y1NuKdDpFbhlqd7l');
    }
  }

  sd_OVHPZK7w2svoRY64(bh) {
    try {
      const page = this.page;
      bh.local.selfDetails['dateOfBirth'] = new Date(
        bh.local.selfDetails['dateOfBirth']
      );
      page.personalDetailsForm.patchValue(bh.local.selfDetails);
      //appendnew_next_sd_OVHPZK7w2svoRY64
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OVHPZK7w2svoRY64');
    }
  }

  sd_xvacI53RCqKmdIgZ(bh) {
    try {
      const page = this.page;
      console.log('on behalf');
      page.requestedFor = true;
      bh.emitValue = bh.input.element?.target?.value;
      bh.endPoint = 'genericGet/getPersonalDetails';
      bh.method = 'get';
      bh = this.sd_V8MdJQRFEcAJSGhf(bh);
      //appendnew_next_sd_xvacI53RCqKmdIgZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xvacI53RCqKmdIgZ');
    }
  }

  async sd_V8MdJQRFEcAJSGhf(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.allPersonalDetails = outputVariables.local.result;

      bh = this.sd_OlzTqwUY2HWVsU27(bh);
      //appendnew_next_sd_V8MdJQRFEcAJSGhf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V8MdJQRFEcAJSGhf');
    }
  }

  sd_OlzTqwUY2HWVsU27(bh) {
    try {
      const page = this.page;
      page.filterPersonalDetail = page.allPersonalDetails;
      let tempArr = page.filterPersonalDetail.filter((obj) =>
        obj.email?.toLowerCase().includes(bh?.emitValue?.toLowerCase())
      );
      page.allPersonalDetails = tempArr;
      //appendnew_next_sd_OlzTqwUY2HWVsU27
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OlzTqwUY2HWVsU27');
    }
  }

  sd_WJgvwj5HOKqEGRwF(bh) {
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
      //appendnew_next_sd_WJgvwj5HOKqEGRwF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WJgvwj5HOKqEGRwF');
    }
  }

  sd_gdbVfeNm2A4NOU7n(bh) {
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
      //appendnew_next_sd_gdbVfeNm2A4NOU7n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gdbVfeNm2A4NOU7n');
    }
  }

  sd_eSdPlGjxGZR6ryaK(bh) {
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
      //appendnew_next_sd_eSdPlGjxGZR6ryaK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eSdPlGjxGZR6ryaK');
    }
  }

  sd_NJDEhlDtAQH2soW2(bh) {
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
      //appendnew_next_sd_NJDEhlDtAQH2soW2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NJDEhlDtAQH2soW2');
    }
  }

  sd_8wTh1q6GCcKXFE27(bh) {
    try {
      const page = this.page;
      if (bh.input.event.value == 'Other') {
        page.otherToCity = true;
      }
      //appendnew_next_sd_8wTh1q6GCcKXFE27
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8wTh1q6GCcKXFE27');
    }
  }

  sd_ekAUZaEpB7sWNNPr(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.res);

      //appendnew_next_sd_ekAUZaEpB7sWNNPr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ekAUZaEpB7sWNNPr');
    }
  }

  sd_Yd93VALldmBZL9nt(bh) {
    try {
      this.page.dialogData = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_wMYU8X4lRNJtGwOu(bh);
      //appendnew_next_sd_Yd93VALldmBZL9nt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yd93VALldmBZL9nt');
    }
  }

  sd_wMYU8X4lRNJtGwOu(bh) {
    try {
      const page = this.page;
      page.dialogData['dateOfBirth'] = new Date(page.dialogData['dateOfBirth']);
      page.personalDetailsForm.patchValue(page.dialogData.personalDetails);

      page.travelForm.patchValue(
        page.dialogData.requestDetails[0].travelDetails
      );
      page.travelRequestType = page.dialogData['travelRequestType'];
      page.dialogData.requestDetails.forEach((requestDetail) => {
        page.travelForm.get('requestDetails').push(
          new FormGroup({
            travelDetails: page.Fb.group({
              travelMode: [
                requestDetail.travelDetails.travelMode,
                [Validators.required],
              ],
              travelType: [
                requestDetail.travelDetails.travelType,
                [Validators.required],
              ],
              travelRequestType: [false, [Validators.required]],
              travelPurpose: [
                requestDetail.travelDetails.travelPurpose,
                [Validators.required],
              ],
              projectID: [
                requestDetail.travelDetails.projectID,
                [Validators.required],
              ],
              fromCity: [
                requestDetail.travelDetails.fromCity,
                [Validators.required],
              ],
              toCity: [
                requestDetail.travelDetails.toCity,
                [Validators.required],
              ],
              fromDate: [
                requestDetail.travelDetails.fromDate,
                [Validators.required],
              ],
              toDate: [
                requestDetail.travelDetails.toDate,
                [Validators.required],
              ],
              tripType: [
                requestDetail.travelDetails.tripType,
                [Validators.required],
              ],
              // requestedFor: [requestDetail.travelDetails.requestedFor],
              //requestType: [requestDetail.travelDetails.requestType],
              preferredTime: [
                requestDetail.travelDetails.preferredTime,
                [Validators.required],
              ],
              travelerComments: [requestDetail.travelDetails.travelerComments],
              passportDocument: [requestDetail.travelDetails.passportDocument],
              visaRequired: [
                requestDetail.travelDetails.visaRequired,
                [Validators.required],
              ],
              covidCertificate: [
                requestDetail.travelDetails.covidCertificate,
                page.showVisa ? [Validators.required] : [],
              ],
              passport: [requestDetail.travelDetails.passport],
              needvehicle: [
                requestDetail.travelDetails.needvehicle,
                [Validators.required],
              ],
              needAccommodation: [
                requestDetail.travelDetails.needAccommodation,
                [Validators.required],
              ],
            }),
            accommodationDetails: page.Fb.group({
              accommodationPreference: [
                requestDetail.accommodationDetails.accommodationPreference,
                [Validators.required],
              ],
              city: [
                requestDetail.accommodationDetails.city,
                [Validators.required],
              ],
              checkInDate: [requestDetail.accommodationDetails.checkInDate],
              checkOutDate: [requestDetail.accommodationDetails.checkOutDate],
              checkInTime: [
                requestDetail.accommodationDetails.checkInTime,
                [Validators.required],
              ],
              checkOutTime: [requestDetail.accommodationDetails.checkOutTime],
              employeeComments: [
                requestDetail.accommodationDetails.employeeComments,
              ],
            }),
          })
        );
      });

      //appendnew_next_sd_wMYU8X4lRNJtGwOu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wMYU8X4lRNJtGwOu');
    }
  }

  sd_y9vlZQis7lSv62t7(bh) {
    try {
      const page = this.page;
      page.formObj = {
        personalDetails: bh.input.personalDetailsForm,
        requestDetails: bh.input.form.requestDetails,
        status: page.dialogData.status,
        managerApproval: {
          approvedRequest: bh.input.status,
          comments: '',
        },
        owner: bh.input.personalDetailsForm.email,
        dateCreated: page.dialogData.dateCreated,
      };
      bh.method = 'put';
      bh.endPoint = 'updateRequestStatus/' + page.dialogData._id;
      bh = this.sd_ZSXmvr6fjl6MgmV1(bh);
      //appendnew_next_sd_y9vlZQis7lSv62t7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y9vlZQis7lSv62t7');
    }
  }

  sd_ZSXmvr6fjl6MgmV1(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Quote status successfully changed', 'Close', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_Sm2obKZqcdW8Yidf(bh);
      //appendnew_next_sd_ZSXmvr6fjl6MgmV1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZSXmvr6fjl6MgmV1');
    }
  }

  async sd_Sm2obKZqcdW8Yidf(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.formObj
      );
      bh.local.result = outputVariables.local.result;

      bh = this.sd_OtssZMzdCWndEOlS(bh);
      //appendnew_next_sd_Sm2obKZqcdW8Yidf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Sm2obKZqcdW8Yidf');
    }
  }

  sd_OtssZMzdCWndEOlS(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.result);

      //appendnew_next_sd_OtssZMzdCWndEOlS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OtssZMzdCWndEOlS');
    }
  }

  sd_6rpztMIMTheUCgHP(bh) {
    try {
      const page = this.page;
      page.quoteForm.owner = page.dialogData._id;
      page.quoteForm.tempObj = page.dialogData;
      console.log('page.quoteForm', page.quoteForm);
      bh.method = 'put';
      bh.endPoint = 'uploadQuote';

      bh = this.sd_WKuJdhSg92YSliE9(bh);
      //appendnew_next_sd_6rpztMIMTheUCgHP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6rpztMIMTheUCgHP');
    }
  }

  sd_WKuJdhSg92YSliE9(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Quote status successfully changed', 'Close', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_mhsxhNaNNWIp4Xpv(bh);
      bh = this.sd_OtssZMzdCWndEOlS(bh);
      //appendnew_next_sd_WKuJdhSg92YSliE9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WKuJdhSg92YSliE9');
    }
  }

  async sd_mhsxhNaNNWIp4Xpv(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.quoteForm
      );
      bh.result = outputVariables.local.result;

      //appendnew_next_sd_mhsxhNaNNWIp4Xpv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mhsxhNaNNWIp4Xpv');
    }
  }

  sd_8uLa6zbDYq5f2Hu6(bh) {
    try {
      const page = this.page;
      console.log(bh.input.quoteStatus, 'ssss');
      bh.body = {
        managerApproval: {
          approvedRequest: page.dialogData.managerApproval.approvedRequest,
          comments: '',
          quoteApproved: bh.input.quoteStatus,
          quoteComments: '',
        },
        personalDetails: page.dialogData,
        owner: page.dialogData.email,
        status: bh.input.quoteStatus,
      };
      bh.method = 'put';
      bh.endPoint = 'updateQuoteStatus/' + page.dialogData._id;
      bh = this.sd_ZMCWukq9Nat0FeZW(bh);
      bh = this.sd_MFl57GZUZpvQZPwK(bh);
      //appendnew_next_sd_8uLa6zbDYq5f2Hu6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8uLa6zbDYq5f2Hu6');
    }
  }

  async sd_ZMCWukq9Nat0FeZW(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        bh.body
      );
      bh.result = outputVariables.local.result;

      bh = this.sd_ZngVljrbmTSgDzVA(bh);
      //appendnew_next_sd_ZMCWukq9Nat0FeZW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZMCWukq9Nat0FeZW');
    }
  }

  sd_ZngVljrbmTSgDzVA(bh) {
    try {
      const page = this.page;
      console.log(bh.result, 'status');
      bh = this.sd_mtwXryArY7EL8Q3c(bh);
      //appendnew_next_sd_ZngVljrbmTSgDzVA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZngVljrbmTSgDzVA');
    }
  }

  sd_mtwXryArY7EL8Q3c(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.res);

      bh = this.sd_C8KiWwUgpBWklLzB(bh);
      //appendnew_next_sd_mtwXryArY7EL8Q3c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mtwXryArY7EL8Q3c');
    }
  }

  sd_C8KiWwUgpBWklLzB(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Quote status successfully changed', 'Close', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_C8KiWwUgpBWklLzB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C8KiWwUgpBWklLzB');
    }
  }

  sd_MFl57GZUZpvQZPwK(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.res);

      //appendnew_next_sd_MFl57GZUZpvQZPwK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MFl57GZUZpvQZPwK');
    }
  }

  sd_W3spsxyROsNc9uRj(bh) {
    try {
      const page = this.page;
      page.formObj = {
        personalDetails: bh.input.personalDetailsForm.value,
        requestDetails: bh.input.form.requestDetails,
        status: page.dialogData.status,
        managerApproval: {
          approvedRequest: page.dialogData.managerApproval.approvedRequest,
          comments: page.dialogData.managerApproval.comments,
        },
        owner: page.personalDetailsForm.value.email,
        dateCreated: page.dialogData.dateCreated,
      };

      bh.method = 'put';
      bh.endPoint = 'updateTravelRequest/' + page.dialogData._id;
      bh = this.sd_X57X06SUAD6WyGtg(bh);
      //appendnew_next_sd_W3spsxyROsNc9uRj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W3spsxyROsNc9uRj');
    }
  }

  sd_X57X06SUAD6WyGtg(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Request successfully updated', 'Close', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_0o99E73yxJviz1Me(bh);
      //appendnew_next_sd_X57X06SUAD6WyGtg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X57X06SUAD6WyGtg');
    }
  }

  async sd_0o99E73yxJviz1Me(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.formObj
      );
      bh.local.result = outputVariables.local.result;

      bh = this.sd_IXOssdlObdvDGDDh(bh);
      //appendnew_next_sd_0o99E73yxJviz1Me
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0o99E73yxJviz1Me');
    }
  }

  sd_IXOssdlObdvDGDDh(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.res);

      //appendnew_next_sd_IXOssdlObdvDGDDh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IXOssdlObdvDGDDh');
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
