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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
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
      this.sd_tR4WvSo9HNG7rWNT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_tR4WvSo9HNG7rWNT(bh) {
    try {
      bh = this.sd_0D94v0rlivWhVCrS(bh);
      //appendnew_next_sd_tR4WvSo9HNG7rWNT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tR4WvSo9HNG7rWNT');
    }
  }

  date(currentDate: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { currentDate: currentDate };
      bh.local = {};
      bh = this.sd_2KOEMq3MB70sBB4l(bh);
      //appendnew_next_date
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nT81NySbVt4MyRJv');
    }
  }

  onFileChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_1S9piHTRJIcloROD(bh);
      //appendnew_next_onFileChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iWRXkSMir3qk0Vcl');
    }
  }

  tdetails(
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
      bh = this.sd_V2rbLEg3Juf4Nfb1(bh);
      //appendnew_next_tdetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_94TkagMd1P2y25cC');
    }
  }

  addNewRequestForm(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_7DHYYk5w2BOia7tY(bh);
      //appendnew_next_addNewRequestForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C6UTeAxSvpv3VaYh');
    }
  }

  removeNewRequestForm(i = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { i: i };
      bh.local = {};
      bh = this.sd_fOHLLv9DbrD6t3PJ(bh);
      //appendnew_next_removeNewRequestForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wMJfLNN2yhnvjQ6o');
    }
  }

  showVisa(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_nPWjdfqIrvzPHjsn(bh);
      //appendnew_next_showVisa
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_934hydFQ9dxfKzlG');
    }
  }

  hideVisa(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lc8UguONHLnOF5di(bh);
      //appendnew_next_hideVisa
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BVH0FtfYCKx6CbgN');
    }
  }

  showButton(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_XVAYQd5o2sxuLgFj(bh);
      //appendnew_next_showButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pxNy9MEtIup5UToC');
    }
  }

  hideButton(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_USWdrfLZh2riubeC(bh);
      //appendnew_next_hideButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KVfO6NjlAsyJXdYp');
    }
  }

  showRequstedfor(filteredvalues: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filteredvalues: filteredvalues };
      bh.local = {};
      bh = this.sd_gLNPSgR1dCC5b2MZ(bh);
      //appendnew_next_showRequstedfor
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TC45UabBaDMlmEz1');
    }
  }

  hideRequstedfor(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_9O92w8jEA0JvIs3P(bh);
      //appendnew_next_hideRequstedfor
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZRO3ydycIQAsRNVF');
    }
  }

  resetForm(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_cegUeaWDbER1GKlf(bh);
      //appendnew_next_resetForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jrQif0HWd6HlUxVc');
    }
  }

  showID(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gZwY5sEtYN9aTphV(bh);
      //appendnew_next_showID
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QNEdIDShKwzG537i');
    }
  }

  hideID(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wXc3JeHmm3f1Phyt(bh);
      //appendnew_next_hideID
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_072Q56fBlCgqnQZW');
    }
  }

  dateChange(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_dcH2UmSxMGn8SNEc(bh);
      //appendnew_next_dateChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mczjChn3UvbFYKU5');
    }
  }

  saveAsDraft(form: any = undefined, reqType = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form, reqType: reqType };
      bh.local = {};
      bh = this.sd_V2rbLEg3Juf4Nfb1(bh);
      //appendnew_next_saveAsDraft
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6WwNHYZkRl9IvKif');
    }
  }

  select(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_X7KI3RFpexkBqtk3(bh);
      //appendnew_next_select
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kv3JVQzFjTM8VzoL');
    }
  }

  selectHide(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_qjGwUl0iEwZDQaIV(bh);
      //appendnew_next_selectHide
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ErqWhmTpSGgOJoWe');
    }
  }

  toCitySelect(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_9hDywdubEEBKkFRB(bh);
      //appendnew_next_toCitySelect
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PsojXwaaRfpmK7QH');
    }
  }

  onSelectionChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_lik2dSMHzcFJYXgR(bh);
      //appendnew_next_onSelectionChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7s7KelVdLFWYWtnt');
    }
  }

  cancelButton(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_zIFmQUzCvcoS3xgB(bh);
      //appendnew_next_cancelButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IoH4u7HtzR7dNTlX');
    }
  }

  prepopulateDialogData(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ub5bhbzwbngwdNfd(bh);
      //appendnew_next_prepopulateDialogData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fm6TtpRpIiyDeBY6');
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
      bh = this.sd_5F5jcmXlhCIMy6Bx(bh);
      //appendnew_next_changeRequestStatus
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TTcZy1sxoIQntYcf');
    }
  }

  closeDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_W6rsPbUeAuFcG4SJ(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_smLSsWyzNmOgkUu3');
    }
  }

  uploadQuote(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_wdMwi9ZbLAlxRxH8(bh);
      //appendnew_next_uploadQuote
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r41KO2mAGq6SKWF0');
    }
  }

  submitQuote(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_ncxKDlycwDA2XZ7r(bh);
      //appendnew_next_submitQuote
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DZ9EGXgcP0TVId8R');
    }
  }

  getQuote(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oG1Uf2X2x8G6qZa1(bh);
      //appendnew_next_getQuote
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0oCS5xYt5FlnnR4v');
    }
  }

  changeQuoteStatus(quoteStatus: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { quoteStatus: quoteStatus };
      bh.local = {};
      bh = this.sd_1MMz9HowfqKgZnsv(bh);
      //appendnew_next_changeQuoteStatus
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HCBAnIu14EoHzUNm');
    }
  }

  //appendnew_flow_travelRequestDialogComponent_start

  sd_0D94v0rlivWhVCrS(bh) {
    try {
      this.page.personalDetailsForm = undefined;
      this.page.travelForm = undefined;
      this.page.date = undefined;
      this.page.futureDate = undefined;
      this.page.userInfo = undefined;
      this.page.showInternaionalTravel = 'false';
      this.page.showVISA = 'false';
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
      this.page.status = undefined;
      this.page.quoteForm = {};
      this.page.quoteFromDB = '';
      this.page.quotes = [];
      bh = this.sd_zOe59wrgU7Wsi6yz(bh);
      //appendnew_next_sd_0D94v0rlivWhVCrS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0D94v0rlivWhVCrS');
    }
  }

  sd_zOe59wrgU7Wsi6yz(bh) {
    try {
      this.page.FormGroup = FormGroup;
      this.page.ReactiveFormsModule = ReactiveFormsModule;
      this.page.Fb = this.__page_injector__.get(FormBuilder);
      this.page.FormArray = FormArray;
      bh = this.selectData(bh);
      //appendnew_next_sd_zOe59wrgU7Wsi6yz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zOe59wrgU7Wsi6yz');
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
        { viewvalue: 'Johannesburg' },
        { viewvalue: 'Bangalore' },
        { viewvalue: 'New York' },
        { viewvalue: 'Brisbane' },
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
        { viewvalue: 'Project Continuation' },
      ];
      page.accomodationPreferance = [
        { viewvalue: 'hotel' },
        { viewvalue: 'B&B' },
      ];
      bh = this.pDetails(bh);
      //appendnew_next_selectData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QQGeDeEw3qQPqSSv');
    }
  }

  pDetails(bh) {
    try {
      const page = this.page;
      page.personalDetailsForm = new FormGroup({
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
      //appendnew_next_pDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CiBnsasWCOi6KmuI');
    }
  }

  formControlsCreation(bh) {
    try {
      const page = this.page;
      page.travelForm = new FormGroup({
        requestDetails: page.Fb.array([]),
      });
      bh = this.sd_x6hu49uNyfZxIuU1(bh);
      //appendnew_next_formControlsCreation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JJayNSqczuPKPDvf');
    }
  }

  sd_x6hu49uNyfZxIuU1(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate =
        page.travelForm?.controls?.requestDetails?.controls[0]?.controls?.accommodationDetails?.controls?.checkOutDate;
      page.email = 'neutrinostravellm@gmail.com';
      bh.endPoint = 'genericGet/getPersonalDetails?email=' + page.email;
      bh.method = 'get';
      bh = this.sd_JOZmL09ok2EgWdiJ(bh);
      //appendnew_next_sd_x6hu49uNyfZxIuU1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x6hu49uNyfZxIuU1');
    }
  }

  sd_JOZmL09ok2EgWdiJ(bh) {
    try {
      const page = this.page;
      bh.key = 'currentUserDetails';
      bh = this.sd_0DOZmwybf31sJ5yt(bh);
      //appendnew_next_sd_JOZmL09ok2EgWdiJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JOZmL09ok2EgWdiJ');
    }
  }

  sd_0DOZmwybf31sJ5yt(bh) {
    try {
      this.page.requesterDetails = JSON.parse(sessionStorage.getItem(bh.key));
      bh = this.sd_VX0RwVfFSie0PIxW(bh);
      //appendnew_next_sd_0DOZmwybf31sJ5yt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0DOZmwybf31sJ5yt');
    }
  }

  sd_VX0RwVfFSie0PIxW(bh) {
    try {
      const page = this.page;
      page.requester = `${page.requesterDetails.firstName} ${page.requesterDetails.lastName}`;
      bh = this.sd_IJNJRjjcU34jKDj1(bh);
      //appendnew_next_sd_VX0RwVfFSie0PIxW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VX0RwVfFSie0PIxW');
    }
  }

  sd_IJNJRjjcU34jKDj1(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_5JxqTFveX4y0jIsM(bh);
      //appendnew_next_sd_IJNJRjjcU34jKDj1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IJNJRjjcU34jKDj1');
    }
  }

  sd_5JxqTFveX4y0jIsM(bh) {
    try {
      let outputVariables = this.prepopulateDialogData();

      //appendnew_next_sd_5JxqTFveX4y0jIsM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5JxqTFveX4y0jIsM');
    }
  }

  sd_2KOEMq3MB70sBB4l(bh) {
    try {
      const page = this.page;
      page.date = new Date();
      page.futureDate = new Date(bh.input.currentDate - 1);

      //appendnew_next_sd_2KOEMq3MB70sBB4l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2KOEMq3MB70sBB4l');
    }
  }

  sd_1S9piHTRJIcloROD(bh) {
    try {
      const page = this.page;
      if (bh.input.event.target.files.length > 0) {
        const file = bh.input.event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {};
      }

      //appendnew_next_sd_1S9piHTRJIcloROD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1S9piHTRJIcloROD');
    }
  }

  sd_V2rbLEg3Juf4Nfb1(bh) {
    try {
      const page = this.page; //combine the 2 forms
      page.formObj = {
        personalDetails: page.personalDetailsForm.value,
        requestDetails: bh.input.form.requestDetails,
        status: null,
        managerApproval: {
          approvedRequest: null,
          comments: '',
        },
        owner: page.personalDetailsForm.value.email,
        dateCreated: page.dialogData.datecreated,
        travelRequestType: page.dialogData.travelRequestType,
      };

      bh.endPoint = 'addTravelRequest';
      bh.method = 'post';
      page.currentUserTravelDetails = page.formObj;
      bh = this.sd_ywPdeBxUVIpCOyJh(bh);
      //appendnew_next_sd_V2rbLEg3Juf4Nfb1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V2rbLEg3Juf4Nfb1');
    }
  }

  sd_ywPdeBxUVIpCOyJh(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Form Has Been Submitted', '', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_l9u4r2IwiXQumodY(bh);
      //appendnew_next_sd_ywPdeBxUVIpCOyJh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywPdeBxUVIpCOyJh');
    }
  }

  async sd_l9u4r2IwiXQumodY(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.formObj
      );
      bh.response = outputVariables.local.result;

      bh = this.sd_NQl5CPdzhPEPyrJB(bh);
      //appendnew_next_sd_l9u4r2IwiXQumodY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l9u4r2IwiXQumodY');
    }
  }

  sd_NQl5CPdzhPEPyrJB(bh) {
    try {
      localStorage.setItem(
        'currentUserTravelDetails',
        JSON.stringify(this.page.currentUserTravelDetails)
      );
      //appendnew_next_sd_NQl5CPdzhPEPyrJB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NQl5CPdzhPEPyrJB');
    }
  }

  sd_7DHYYk5w2BOia7tY(bh) {
    try {
      const page = this.page;
      page.travelForm.get('requestDetails').push(
        new FormGroup({
          travelDetails: page.Fb.group({
            travelMode: ['', [Validators.required]],
            travelType: ['', [Validators.required]],
            travelRequestType: [false, [Validators.required]],
            travelPurpose: ['', [Validators.required]],
            projectID: ['', [Validators.required]],
            fromCity: ['', [Validators.required]],
            toCity: ['', [Validators.required]],
            fromDate: ['', [Validators.required]],
            toDate: ['', [Validators.required]],
            tripType: ['', [Validators.required]],
            requestedFor: [''],
            requestType: [''],
            preferredTime: ['', [Validators.required]],
            travelerComments: [''],
            passportDocument: [''],
            visaRequired: [false, [Validators.required]],
            covidCertificate: ['', page.showVisa ? [Validators.required] : []],
            passport: [''],
            needvehicle: ['No', [Validators.required]],
            needAccommodation: ['', [Validators.required]],
          }),
          accommodationDetails: page.Fb.group({
            accommodationPreference: [false, [Validators.required]],
            city: [false, [Validators.required]],
            checkInDate: [''],
            checkOutDate: [''],
            checkInTime: [false, [Validators.required]],
            checkOutTime: [''],
            employeeComments: [''],
          }),
        })
      );

      //appendnew_next_sd_7DHYYk5w2BOia7tY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7DHYYk5w2BOia7tY');
    }
  }

  sd_fOHLLv9DbrD6t3PJ(bh) {
    try {
      const page = this.page;
      page.travelForm.get('requestDetails').removeAt(bh.input.i);
      //appendnew_next_sd_fOHLLv9DbrD6t3PJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fOHLLv9DbrD6t3PJ');
    }
  }

  sd_nPWjdfqIrvzPHjsn(bh) {
    try {
      const page = this.page;
      if (bh.input.event.value == 'International') {
        page.showVisa = true;
      } else {
        page.showVisa = false;
      }

      //appendnew_next_sd_nPWjdfqIrvzPHjsn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nPWjdfqIrvzPHjsn');
    }
  }

  sd_lc8UguONHLnOF5di(bh) {
    try {
      const page = this.page;
      page.showVisa = false;
      //appendnew_next_sd_lc8UguONHLnOF5di
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lc8UguONHLnOF5di');
    }
  }

  sd_XVAYQd5o2sxuLgFj(bh) {
    try {
      const page = this.page;
      page.showHideButton = true;
      //appendnew_next_sd_XVAYQd5o2sxuLgFj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XVAYQd5o2sxuLgFj');
    }
  }

  sd_USWdrfLZh2riubeC(bh) {
    try {
      const page = this.page;
      page.showHideButton = false;
      //appendnew_next_sd_USWdrfLZh2riubeC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_USWdrfLZh2riubeC');
    }
  }

  sd_gLNPSgR1dCC5b2MZ(bh) {
    try {
      const page = this.page;
      page.showHideElement = true;
      bh.emitValue = bh.input.filteredvalues?.target?.value;
      console.log(page.travelRequestType, 'shit!!!');
      bh = this.sd_Ml6PjdblZpS8q4rN(bh);
      //appendnew_next_sd_gLNPSgR1dCC5b2MZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gLNPSgR1dCC5b2MZ');
    }
  }

  sd_Ml6PjdblZpS8q4rN(bh) {
    try {
      const page = this.page;
      bh.endPoint = 'genericGet/getPersonalDetails';
      bh.method = 'get';
      bh = this.sd_RbSRoqKXETQMSP5p(bh);
      //appendnew_next_sd_Ml6PjdblZpS8q4rN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ml6PjdblZpS8q4rN');
    }
  }

  async sd_RbSRoqKXETQMSP5p(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.allPersonalDetails = outputVariables.local.result;

      bh = this.sd_dgaYMpAgMT9h5mNk(bh);
      //appendnew_next_sd_RbSRoqKXETQMSP5p
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RbSRoqKXETQMSP5p');
    }
  }

  sd_dgaYMpAgMT9h5mNk(bh) {
    try {
      const page = this.page;
      page.filterPersonalDetail = page.allPersonalDetails;
      let tempArr = page.filterPersonalDetail.filter((obj) =>
        obj.email?.toLowerCase().includes(bh?.emitValue?.toLowerCase())
      );
      page.allPersonalDetails = tempArr;

      bh = this.sd_SD5QMEswKeNOHyzF(bh);
      //appendnew_next_sd_dgaYMpAgMT9h5mNk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dgaYMpAgMT9h5mNk');
    }
  }

  sd_SD5QMEswKeNOHyzF(bh) {
    try {
      const page = this.page; //const filterValue = bh.input.filteredvalues;
      //page.filterPersonalDetail.filter(option => option.includes(filterValue));
      //console.log(bh.input.filteredvalues,"value")
      //appendnew_next_sd_SD5QMEswKeNOHyzF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SD5QMEswKeNOHyzF');
    }
  }

  sd_9O92w8jEA0JvIs3P(bh) {
    try {
      const page = this.page;
      page.showHideElement = false;
      bh.endPoint =
        'genericGet/getPersonalDetails?email=' + page.requesterDetails.email;
      bh.method = 'get';
      bh = this.sd_tEXYIVzf0emfxde5(bh);
      //appendnew_next_sd_9O92w8jEA0JvIs3P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9O92w8jEA0JvIs3P');
    }
  }

  async sd_tEXYIVzf0emfxde5(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      bh.local.selfDetails = outputVariables.local.result;

      bh = this.sd_TwA2eswjPYV5FyoI(bh);
      //appendnew_next_sd_tEXYIVzf0emfxde5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tEXYIVzf0emfxde5');
    }
  }

  sd_TwA2eswjPYV5FyoI(bh) {
    try {
      const page = this.page;
      bh.local.selfDetails['dateOfBirth'] = new Date(
        bh.local.selfDetails['dateOfBirth']
      );
      page.personalDetailsForm.patchValue(bh.local.selfDetails);
      //appendnew_next_sd_TwA2eswjPYV5FyoI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TwA2eswjPYV5FyoI');
    }
  }

  sd_cegUeaWDbER1GKlf(bh) {
    try {
      const page = this.page;
      bh.input.form.reset();
      //appendnew_next_sd_cegUeaWDbER1GKlf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cegUeaWDbER1GKlf');
    }
  }

  sd_gZwY5sEtYN9aTphV(bh) {
    try {
      const page = this.page;
      page.showID = true;
      page.showPan = false;
      //appendnew_next_sd_gZwY5sEtYN9aTphV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gZwY5sEtYN9aTphV');
    }
  }

  sd_wXc3JeHmm3f1Phyt(bh) {
    try {
      const page = this.page;
      page.showID = false;
      page.showPan = true;
      //appendnew_next_sd_wXc3JeHmm3f1Phyt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wXc3JeHmm3f1Phyt');
    }
  }

  sd_dcH2UmSxMGn8SNEc(bh) {
    try {
      const page = this.page;
      page.futureDate = new Date(bh.input.date.value);

      //appendnew_next_sd_dcH2UmSxMGn8SNEc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dcH2UmSxMGn8SNEc');
    }
  }

  sd_X7KI3RFpexkBqtk3(bh) {
    try {
      const page = this.page;
      if (bh.input.event.value == 'Other') {
        page.other = true;
      }

      //appendnew_next_sd_X7KI3RFpexkBqtk3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X7KI3RFpexkBqtk3');
    }
  }

  sd_qjGwUl0iEwZDQaIV(bh) {
    try {
      const page = this.page;
      if (bh.input.event.value != 'Other') {
        page.other = false;
      }

      //appendnew_next_sd_qjGwUl0iEwZDQaIV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qjGwUl0iEwZDQaIV');
    }
  }

  sd_9hDywdubEEBKkFRB(bh) {
    try {
      const page = this.page;
      if (bh.input.event.value == 'Other') {
        page.otherToCity = true;
      }

      //appendnew_next_sd_9hDywdubEEBKkFRB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9hDywdubEEBKkFRB');
    }
  }

  sd_lik2dSMHzcFJYXgR(bh) {
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
      //appendnew_next_sd_lik2dSMHzcFJYXgR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lik2dSMHzcFJYXgR');
    }
  }

  sd_zIFmQUzCvcoS3xgB(bh) {
    try {
      const page = this.page;
      bh.input.form.reset();
      this.outputVar.emit(page.showDashboard);
      //appendnew_next_sd_zIFmQUzCvcoS3xgB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zIFmQUzCvcoS3xgB');
    }
  }

  sd_ub5bhbzwbngwdNfd(bh) {
    try {
      this.page.dialogData = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_bcNXeTciGHvpGsHn(bh);
      //appendnew_next_sd_ub5bhbzwbngwdNfd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ub5bhbzwbngwdNfd');
    }
  }

  sd_bcNXeTciGHvpGsHn(bh) {
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
              requestedFor: [requestDetail.travelDetails.requestedFor],
              requestType: [requestDetail.travelDetails.requestType],
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

      console.log(page.dialogData, '_idddddd 333633');

      bh = this.sd_cJE31LAw8f5oCIgL(bh);
      //appendnew_next_sd_bcNXeTciGHvpGsHn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bcNXeTciGHvpGsHn');
    }
  }

  sd_cJE31LAw8f5oCIgL(bh) {
    try {
      let outputVariables = this.getQuote();

      //appendnew_next_sd_cJE31LAw8f5oCIgL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cJE31LAw8f5oCIgL');
    }
  }

  sd_5F5jcmXlhCIMy6Bx(bh) {
    try {
      const page = this.page;
      console.log(bh.input.status, 'ssss');
      page.formObj = {
        personalDetails: page.personalDetailsForm.value,
        requestDetails: bh.input.form.requestDetails,
        status: page.dialogData.status,
        managerApproval: {
          approvedRequest: bh.input.status,
          comments: '',
        },
        owner: page.personalDetailsForm.value.email,
        dateCreated: page.dialogData.dateCreated,
      };

      console.log(page.formObj, 'formmmmm');
      bh.method = 'put';
      bh.endPoint = 'updateRequestStatus/' + page.dialogData._id;
      bh = this.sd_Kn38dORwtYP26I1e(bh);
      //appendnew_next_sd_5F5jcmXlhCIMy6Bx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5F5jcmXlhCIMy6Bx');
    }
  }

  async sd_Kn38dORwtYP26I1e(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.formObj
      );
      bh.result = outputVariables.local.result;

      bh = this.sd_yBPeEJgoe1VPrAad(bh);
      //appendnew_next_sd_Kn38dORwtYP26I1e
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Kn38dORwtYP26I1e');
    }
  }

  sd_yBPeEJgoe1VPrAad(bh) {
    try {
      const page = this.page;
      console.log(bh.result, 'status');
      bh = this.sd_W6rsPbUeAuFcG4SJ(bh);
      //appendnew_next_sd_yBPeEJgoe1VPrAad
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yBPeEJgoe1VPrAad');
    }
  }

  sd_W6rsPbUeAuFcG4SJ(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.res);

      //appendnew_next_sd_W6rsPbUeAuFcG4SJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W6rsPbUeAuFcG4SJ');
    }
  }

  sd_wdMwi9ZbLAlxRxH8(bh) {
    try {
      const page = this.page;
      if (bh.input.event.target.files.length > 0) {
        const file = bh.input.event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          page.quoteForm.quote = reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }

      //appendnew_next_sd_wdMwi9ZbLAlxRxH8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wdMwi9ZbLAlxRxH8');
    }
  }

  sd_ncxKDlycwDA2XZ7r(bh) {
    try {
      const page = this.page;
      page.quoteForm.owner = page.dialogData._id;
      page.quoteForm.tempObj = page.dialogData;
      console.log('mxm', page.quoteForm);
      bh.method = 'put';
      bh.endPoint = 'uploadQuote';

      bh = this.sd_PXnJi80nbubCd7TJ(bh);
      //appendnew_next_sd_ncxKDlycwDA2XZ7r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ncxKDlycwDA2XZ7r');
    }
  }

  async sd_PXnJi80nbubCd7TJ(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.quoteForm
      );
      bh.result = outputVariables.local.result;

      bh = this.sd_W6rsPbUeAuFcG4SJ(bh);
      //appendnew_next_sd_PXnJi80nbubCd7TJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PXnJi80nbubCd7TJ');
    }
  }

  sd_oG1Uf2X2x8G6qZa1(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint = 'getQuote?owner=' + page.dialogData._id;

      bh = this.sd_DLO6MYy6pX5Q7vGG(bh);
      //appendnew_next_sd_oG1Uf2X2x8G6qZa1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oG1Uf2X2x8G6qZa1');
    }
  }

  async sd_DLO6MYy6pX5Q7vGG(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.quoteFromDB = outputVariables.local.result;

      bh = this.sd_gGwnk2jlmuCL45q5(bh);
      //appendnew_next_sd_DLO6MYy6pX5Q7vGG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DLO6MYy6pX5Q7vGG');
    }
  }

  sd_gGwnk2jlmuCL45q5(bh) {
    try {
      this.page.sanitizer = this.__page_injector__.get(DomSanitizer);
      bh = this.sd_Jhurd9NWmbHPFsqu(bh);
      //appendnew_next_sd_gGwnk2jlmuCL45q5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gGwnk2jlmuCL45q5');
    }
  }

  sd_Jhurd9NWmbHPFsqu(bh) {
    try {
      const page = this.page;
      page.quotes = page.quoteFromDB['data'];
      // .forEach(quote => {
      //     page.sanitizer.bypassSecurityTrustResourceUrl(quote['quote']);
      //     page.quotes.push(quote);
      // })

      console.log(page.quotes, ' zzzzz');
      //appendnew_next_sd_Jhurd9NWmbHPFsqu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jhurd9NWmbHPFsqu');
    }
  }

  sd_1MMz9HowfqKgZnsv(bh) {
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
      };
      bh.method = 'put';
      bh.endPoint = 'updateQuoteStatus/' + page.dialogData._id;
      bh = this.sd_AjspPKvtbnZq2Nyf(bh);
      //appendnew_next_sd_1MMz9HowfqKgZnsv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1MMz9HowfqKgZnsv');
    }
  }

  async sd_AjspPKvtbnZq2Nyf(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        bh.body
      );
      bh.result = outputVariables.local.result;

      bh = this.sd_fecQCoAU0SKVLTOL(bh);
      //appendnew_next_sd_AjspPKvtbnZq2Nyf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AjspPKvtbnZq2Nyf');
    }
  }

  sd_fecQCoAU0SKVLTOL(bh) {
    try {
      const page = this.page;
      console.log(bh.result, 'status');
      bh = this.sd_cNLMcwR75ezpR7i8(bh);
      //appendnew_next_sd_fecQCoAU0SKVLTOL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fecQCoAU0SKVLTOL');
    }
  }

  sd_cNLMcwR75ezpR7i8(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.res);

      //appendnew_next_sd_cNLMcwR75ezpR7i8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cNLMcwR75ezpR7i8');
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
