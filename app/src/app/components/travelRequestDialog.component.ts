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
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-travelRequestDialog',
  templateUrl: './travelRequestDialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class travelRequestDialogComponent {
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
      this.sd_FAXWHm6Bjo3xL5lG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_FAXWHm6Bjo3xL5lG(bh) {
    try {
      bh = this.sd_iR1pT2Lx7BhwEM6f(bh);
      //appendnew_next_sd_FAXWHm6Bjo3xL5lG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FAXWHm6Bjo3xL5lG');
    }
  }

  date(currentDate: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentDate: currentDate };
      bh.local = {};
      bh = this.sd_CjFSt36fOIu4lpDL(bh);
      //appendnew_next_date
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xBp5GVcL0SUmEbkv');
    }
  }

  onFileChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_UWVcKE6DXSDThuuQ(bh);
      //appendnew_next_onFileChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VaQV1paW98mBQ7Si');
    }
  }

  addNewRequestForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_EyGROgP57Iag2SiZ(bh);
      //appendnew_next_addNewRequestForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4lArJKLqH9rN9F8T');
    }
  }

  dateChange(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_45MJTDSsUv2Cms8M(bh);
      //appendnew_next_dateChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5wfKSR2eNpf5k2eI');
    }
  }

  removeNewRequestFormLeg(i = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { i: i };
      bh.local = {};
      bh = this.sd_ozsRL0vMPFEtFy6W(bh);
      //appendnew_next_removeNewRequestFormLeg
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yd8TbCwSCC3udYZv');
    }
  }

  selectChangesFunction(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_jLrIJvQAeV1CIFOj(bh);
      //appendnew_next_selectChangesFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IQb9gv2oxKg9rRFT');
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
      bh = this.sd_RhBQh2iGzuNZhh96(bh);
      //appendnew_next_submit_clear_draft
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yB68l2mQWEDoV83C');
    }
  }

  resetForm(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_WxZzRsXRLtx5CW9D(bh);
      //appendnew_next_resetForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hAygMGvE3HO8Wofa');
    }
  }

  requstedForHideandShow(element: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { element: element };
      bh.local = {};
      bh = this.sd_dBciEwXGsk85KDag(bh);
      //appendnew_next_requstedForHideandShow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ix0XtGpRID5SZSnG');
    }
  }

  onSelectionChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_rjmX3FoZOVch079a(bh);
      //appendnew_next_onSelectionChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hbfdq7MKlA4eo0Ji');
    }
  }

  //appendnew_flow_travelRequestDialogComponent_start

  sd_iR1pT2Lx7BhwEM6f(bh) {
    try {
      bh = this.sd_tpxLLA0VJSAReIPb(bh);
      //appendnew_next_sd_iR1pT2Lx7BhwEM6f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iR1pT2Lx7BhwEM6f');
    }
  }

  sd_tpxLLA0VJSAReIPb(bh) {
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
      bh = this.sd_20vnyMi21DWXFmOW(bh);
      //appendnew_next_sd_tpxLLA0VJSAReIPb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tpxLLA0VJSAReIPb');
    }
  }

  sd_20vnyMi21DWXFmOW(bh) {
    try {
      this.page.FormGroup = FormGroup;
      this.page.ReactiveFormsModule = ReactiveFormsModule;
      this.page.Fb = this.__page_injector__.get(FormBuilder);
      this.page.FormArray = FormArray;
      bh = this.selectData(bh);
      //appendnew_next_sd_20vnyMi21DWXFmOW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_20vnyMi21DWXFmOW');
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
      return this.errorHandler(bh, e, 'sd_42cvEYfMvhsur5aP');
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
      return this.errorHandler(bh, e, 'sd_ORdeL0S4nk4II7xN');
    }
  }

  formControlsCreation(bh) {
    try {
      const page = this.page;
      page.travelForm = new FormGroup({
        requestDetails: page.Fb.array([]),
      });
      bh = this.getPersonalDetails(bh);
      //appendnew_next_formControlsCreation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A5aFjCT7sHLrkHyC');
    }
  }

  getPersonalDetails(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate =
        page.travelForm?.controls?.requestDetails?.controls[0]?.controls?.accommodationDetails?.controls?.checkOutDate;
      page.email = 'neutrinostravellm@gmail.com';
      bh.endPoint = 'genericGet/getPersonalDetails?email=' + page.email;
      bh.method = 'get';
      bh = this.sd_tkvmhpvMQKejG2FK(bh);
      //appendnew_next_getPersonalDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_szxU6r9ResU7aQoy');
    }
  }

  sd_tkvmhpvMQKejG2FK(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_jE1nQHer344yEyYS(bh);
      //appendnew_next_sd_tkvmhpvMQKejG2FK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tkvmhpvMQKejG2FK');
    }
  }

  sd_jE1nQHer344yEyYS(bh) {
    try {
      const page = this.page; // page.date = new Date();
      // page.futureDate = page.travelForm?.controls?.requestDetails?.controls[0]?.controls?.accommodationDetails?.controls?.checkOutDate

      // bh.endPoint = 'genericGet/getPersonalDetails?email=' + "neo.thobela@neutrinos.co";
      // bh.method ="get";
      bh = this.sd_F0sOVcw7Yeo9PZig(bh);
      //appendnew_next_sd_jE1nQHer344yEyYS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jE1nQHer344yEyYS');
    }
  }

  async sd_F0sOVcw7Yeo9PZig(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.personalDetails = outputVariables.local.result;

      bh = this.sd_0GAHygRqlgrt9QR0(bh);
      //appendnew_next_sd_F0sOVcw7Yeo9PZig
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F0sOVcw7Yeo9PZig');
    }
  }

  sd_0GAHygRqlgrt9QR0(bh) {
    try {
      let outputVariables = this.addNewRequestForm();

      bh = this.patchPersonalDeatils(bh);
      //appendnew_next_sd_0GAHygRqlgrt9QR0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0GAHygRqlgrt9QR0');
    }
  }

  patchPersonalDeatils(bh) {
    try {
      const page = this.page;
      bh.key = 'currentUserDetails';
      page.personalDetailsForm.patchValue(page.personalDetails);
      bh = this.sd_N4CeRShqtAQKE4Os(bh);
      //appendnew_next_patchPersonalDeatils
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_90h21eoNafLgHzdI');
    }
  }

  sd_N4CeRShqtAQKE4Os(bh) {
    try {
      this.page.requesterDetails = JSON.parse(sessionStorage.getItem(bh.key));
      bh = this.sd_IzyGWphLXrSBTeUd(bh);
      //appendnew_next_sd_N4CeRShqtAQKE4Os
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N4CeRShqtAQKE4Os');
    }
  }

  sd_IzyGWphLXrSBTeUd(bh) {
    try {
      const page = this.page;
      page.requester = `${page.personalDetails.firstName} ${page.personalDetails.lastName}`;
      //appendnew_next_sd_IzyGWphLXrSBTeUd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IzyGWphLXrSBTeUd');
    }
  }

  sd_CjFSt36fOIu4lpDL(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate = new Date(bh.input.currentDate - 1);

      //appendnew_next_sd_CjFSt36fOIu4lpDL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CjFSt36fOIu4lpDL');
    }
  }

  sd_UWVcKE6DXSDThuuQ(bh) {
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
      //appendnew_next_sd_UWVcKE6DXSDThuuQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UWVcKE6DXSDThuuQ');
    }
  }

  sd_EyGROgP57Iag2SiZ(bh) {
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

      //appendnew_next_sd_EyGROgP57Iag2SiZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EyGROgP57Iag2SiZ');
    }
  }

  sd_45MJTDSsUv2Cms8M(bh) {
    try {
      const page = this.page;
      page.futureDate = new Date(bh.input.date.value);

      //appendnew_next_sd_45MJTDSsUv2Cms8M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_45MJTDSsUv2Cms8M');
    }
  }

  sd_ozsRL0vMPFEtFy6W(bh) {
    try {
      const page = this.page;
      page.travelForm.get('requestDetails').removeAt(bh.input.i);
      //appendnew_next_sd_ozsRL0vMPFEtFy6W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ozsRL0vMPFEtFy6W');
    }
  }

  sd_jLrIJvQAeV1CIFOj(bh) {
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
      //appendnew_next_sd_jLrIJvQAeV1CIFOj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jLrIJvQAeV1CIFOj');
    }
  }

  sd_RhBQh2iGzuNZhh96(bh) {
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

      bh = this.sd_hsdpV0QU2ovlZeKB(bh);
      //appendnew_next_sd_RhBQh2iGzuNZhh96
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RhBQh2iGzuNZhh96');
    }
  }

  sd_hsdpV0QU2ovlZeKB(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.event,
          'Submit',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_hTp6pH20FR1OwGka(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.event,
          'Draft',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_IgO49pGPJ0cKLev0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hsdpV0QU2ovlZeKB');
    }
  }

  sd_hTp6pH20FR1OwGka(bh) {
    try {
      const page = this.page;
      console.log('Submit');
      console.log('end', bh.endPoint);
      bh = this.sd_Ffw0CizztGpsYzbz(bh);
      //appendnew_next_sd_hTp6pH20FR1OwGka
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hTp6pH20FR1OwGka');
    }
  }

  sd_Ffw0CizztGpsYzbz(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Form is submitted', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_EGuZ2Z24W8XDNV98(bh);
      //appendnew_next_sd_Ffw0CizztGpsYzbz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ffw0CizztGpsYzbz');
    }
  }

  async sd_EGuZ2Z24W8XDNV98(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.formObj
      );
      bh.response = outputVariables.local.result;

      //appendnew_next_sd_EGuZ2Z24W8XDNV98
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EGuZ2Z24W8XDNV98');
    }
  }

  sd_IgO49pGPJ0cKLev0(bh) {
    try {
      const page = this.page;
      console.log('draft');
      console.log('end', bh.endPoint);
      bh = this.sd_xvkRkcQ3GFat07Ex(bh);
      //appendnew_next_sd_IgO49pGPJ0cKLev0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IgO49pGPJ0cKLev0');
    }
  }

  sd_xvkRkcQ3GFat07Ex(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Form is saved as draft', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_EGuZ2Z24W8XDNV98(bh);
      //appendnew_next_sd_xvkRkcQ3GFat07Ex
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xvkRkcQ3GFat07Ex');
    }
  }

  sd_WxZzRsXRLtx5CW9D(bh) {
    try {
      const page = this.page;
      bh.input.form.reset();
      //appendnew_next_sd_WxZzRsXRLtx5CW9D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WxZzRsXRLtx5CW9D');
    }
  }

  sd_dBciEwXGsk85KDag(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.element.value,
          'Self',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_HYmx0XMZt8RGn7F3(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.element.value,
          'On Behalf',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_UFhHtayfQypwUSay(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dBciEwXGsk85KDag');
    }
  }

  sd_HYmx0XMZt8RGn7F3(bh) {
    try {
      const page = this.page;
      console.log('self');
      page.requestedFor = true;

      bh.endPoint =
        'genericGet/getPersonalDetails?email=' + 'neutrinostravellm@gmail.com';
      bh.method = 'get';
      bh = this.sd_D1BziCUMtAzIIfwZ(bh);
      //appendnew_next_sd_HYmx0XMZt8RGn7F3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HYmx0XMZt8RGn7F3');
    }
  }

  async sd_D1BziCUMtAzIIfwZ(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.Personaldetails = outputVariables.local.result;

      bh = this.sd_nbo6BW7rjaEKUJNP(bh);
      //appendnew_next_sd_D1BziCUMtAzIIfwZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_D1BziCUMtAzIIfwZ');
    }
  }

  sd_nbo6BW7rjaEKUJNP(bh) {
    try {
      const page = this.page;
      page.personalDetails['dateOfBirth'] = new Date(
        page.personalDetails['dateOfBirth']
      );
      page.personalDetailsForm.patchValue(page.personalDetails);
      //appendnew_next_sd_nbo6BW7rjaEKUJNP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nbo6BW7rjaEKUJNP');
    }
  }

  sd_UFhHtayfQypwUSay(bh) {
    try {
      const page = this.page;
      console.log('on behalf');
      page.requestedFor = false;
      bh.emitValue = bh.input.element;
      bh.endPoint = 'genericGet/getPersonalDetails';
      bh.method = 'get';
      bh = this.sd_23bn7ricihdnES43(bh);
      //appendnew_next_sd_UFhHtayfQypwUSay
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UFhHtayfQypwUSay');
    }
  }

  async sd_23bn7ricihdnES43(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.personaldetails = outputVariables.local.result;

      //appendnew_next_sd_23bn7ricihdnES43
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_23bn7ricihdnES43');
    }
  }

  sd_rjmX3FoZOVch079a(bh) {
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
      //appendnew_next_sd_rjmX3FoZOVch079a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rjmX3FoZOVch079a');
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
