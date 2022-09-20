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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
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
      bh = this.sd_UTu9MfO7IadBmBxp(bh);
      //appendnew_next_tdetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u6WWm4Bal1XWFndC');
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

  removeNewRequestForm(i = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { i: i };
      bh.local = {};
      bh = this.sd_aauQ9VpyMBmalrnN(bh);
      //appendnew_next_removeNewRequestForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y4cf7DW2aKUnLQlW');
    }
  }

  showVisa(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_X4aSuU8d6NJHFUCt(bh);
      //appendnew_next_showVisa
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yVr7Vfx7YWewSJIT');
    }
  }

  hideVisa(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_as2P81jrgTDTI9Cw(bh);
      //appendnew_next_hideVisa
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6DCus0x0CpaOk30t');
    }
  }

  showButton(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Osf3azaK9Cis5yKY(bh);
      //appendnew_next_showButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u4CX7y4FeZ0yV54a');
    }
  }

  hideButton(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_HCMg1Wp8GOTXOUCS(bh);
      //appendnew_next_hideButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_svfVBeDStyUwSD9k');
    }
  }

  showRequstedfor(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4AsGmhNUvWJ6Kjkr(bh);
      //appendnew_next_showRequstedfor
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_amw2Q3A92xOyk2Pn');
    }
  }

  hideRequstedfor(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_woXsLjYIiE93sSGF(bh);
      //appendnew_next_hideRequstedfor
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LzX7JBTKERtykE01');
    }
  }

  resetForm(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_NJ7Bka5lSWxQJoAb(bh);
      //appendnew_next_resetForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZZSLC5IsvQ7MWe9z');
    }
  }

  showID(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Ag6YZ0twzIgYdQ4g(bh);
      //appendnew_next_showID
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R766mMd5SmwjWrs7');
    }
  }

  hideID(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_CfToqqfcnjjxZVq0(bh);
      //appendnew_next_hideID
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O0O5XmehaUrWfPZv');
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

  saveAsDraft(form: any = undefined, reqType = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form, reqType: reqType };
      bh.local = {};
      bh = this.sd_UTu9MfO7IadBmBxp(bh);
      //appendnew_next_saveAsDraft
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C15spxFfj0Omfycc');
    }
  }

  select(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_iHuwVRB3Pigul8fQ(bh);
      //appendnew_next_select
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mxbCz9XxUSQZRtV6');
    }
  }

  selectHide(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_8T8FKJ0zojGoSQEc(bh);
      //appendnew_next_selectHide
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8zpG7jfRfYsDD2BM');
    }
  }

  toCitySelect(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_JYH7Y01swLQYwjuy(bh);
      //appendnew_next_toCitySelect
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ESLTSjDTnZmavh2m');
    }
  }

  onSelectionChange(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_Dwt1Wymb3cJ2N4Vq(bh);
      //appendnew_next_onSelectionChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q0v6NlJ8kvxZfziB');
    }
  }

  cancelButton(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = {};
      bh = this.sd_E6ZjDNeLnSIeXTM5(bh);
      //appendnew_next_cancelButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZhJ9WfU4oghVZtZs');
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
        passportNumber: new FormControl(false, [Validators.required]),
        nationality: new FormControl('', [Validators.required]),
        station: new FormControl('', [Validators.required]),
        lineManager: new FormControl('', [Validators.required]),
        lineManagerEmail: new FormControl('', [Validators.required]),
      });
      // console.log("user",page.user)
      bh = this.formControlsCreation(bh);
      //appendnew_next_pDetails
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
      console.log('neo', page.futureDate);
      page.email = 'neo.thobela@neutrinos.co';
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

      bh = this.sd_noKRxnhXl7OSmoZh(bh);
      //appendnew_next_sd_eYkVAuOfjYx8O61u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eYkVAuOfjYx8O61u');
    }
  }

  sd_noKRxnhXl7OSmoZh(bh) {
    try {
      const page = this.page;
      bh.key = 'currentUserDetails';
      bh = this.sd_GF2DiGmJmusBZGDm(bh);
      //appendnew_next_sd_noKRxnhXl7OSmoZh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_noKRxnhXl7OSmoZh');
    }
  }

  sd_GF2DiGmJmusBZGDm(bh) {
    try {
      this.page.requesterDetails = JSON.parse(sessionStorage.getItem(bh.key));
      bh = this.sd_PTHJPibTtSc5S7Ii(bh);
      //appendnew_next_sd_GF2DiGmJmusBZGDm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GF2DiGmJmusBZGDm');
    }
  }

  sd_PTHJPibTtSc5S7Ii(bh) {
    try {
      const page = this.page;
      page.requester = `${page.requesterDetails.firstName} ${page.requesterDetails.lastName}`;
      //appendnew_next_sd_PTHJPibTtSc5S7Ii
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PTHJPibTtSc5S7Ii');
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

  sd_zD555oDG8OrpYULW(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form);
      console.log('Form', page.travelDetails);

      //appendnew_next_sd_zD555oDG8OrpYULW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zD555oDG8OrpYULW');
    }
  }

  sd_L8dj6KHB0MWU3lHf(bh) {
    try {
      const page = this.page;
      if (bh.input.event.target.files.length > 0) {
        const file = bh.input.event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          console.log(reader.result);
        };
      }

      //appendnew_next_sd_L8dj6KHB0MWU3lHf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L8dj6KHB0MWU3lHf');
    }
  }

  sd_UTu9MfO7IadBmBxp(bh) {
    try {
      const page = this.page; //combine the 2 forms
      console.log('hi', page.personalDetailsForm);
      console.log(bh.input.form);
      page.formObj = {
        personalDetails: page.personalDetailsForm.value,
        requestDetails: bh.input.form.requestDetails,
        status: null,
        managerApproval: {
          approvedRequest: null,
          comments: '',
        },
        //"owner": page.personalDetails['email'],
        dateCreated: new Date().toISOString(),
      };
      console.log(page.formObj, 'obj');

      bh.endPoint = bh.input.reqType
        ? 'addTravelRequest?type=draft'
        : 'addTravelRequest';
      bh.method = 'post';
      console.log(bh.endPoint);
      bh = this.sd_bbaBvYkJ652qvZXA(bh);
      //appendnew_next_sd_UTu9MfO7IadBmBxp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UTu9MfO7IadBmBxp');
    }
  }

  sd_bbaBvYkJ652qvZXA(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Form Has Been Submitted', '', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_RhR3LYUVBWeOB74n(bh);
      //appendnew_next_sd_bbaBvYkJ652qvZXA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bbaBvYkJ652qvZXA');
    }
  }

  async sd_RhR3LYUVBWeOB74n(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        this.page.formObj
      );
      bh.response = outputVariables.local.result;

      bh = this.sd_ug9NAWrI0m3QPLao(bh);
      //appendnew_next_sd_RhR3LYUVBWeOB74n
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RhR3LYUVBWeOB74n');
    }
  }

  sd_ug9NAWrI0m3QPLao(bh) {
    try {
      const page = this.page;
      console.log(page.formObj, 'obj');
      //appendnew_next_sd_ug9NAWrI0m3QPLao
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ug9NAWrI0m3QPLao');
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
            travelRequestType: [false, [Validators.required]],
            travelPurpose: ['', [Validators.required]],
            projectID: ['', [Validators.required]],
            fromCity: ['', [Validators.required]],
            toCity: ['', [Validators.required]],
            fromDate: ['', [Validators.required]],
            toDate: ['', [Validators.required]],
            tripType: ['', [Validators.required]],
            // requestedFor: [ '',page.showHideElement? [Validators.required] :[]],
            // requestType: [, [Validators.required]],
            preferredTime: ['', [Validators.required]],
            travelerComments: ['', [Validators.required]],
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
            checkInDate: [false, [Validators.required]],
            checkOutDate: [false, [Validators.required]],
            // accommodationType: [false, [Validators.required]],
            checkInTime: [false, [Validators.required]],
            checkOutTime: [''],
            // needvehicle: ['', [Validators.required]],
            employeeComments: [false, [Validators.required]],
          }),
        })
      );

      console.log(page.travelForm);
      // if (page.travelForm?.controls?.requestDetails?.controls[0]?.controls?.travelDetails?.controls?.needAccommodation == "Yes") {

      //     page.travelForm?.controls?.requestDetails?.controls[0]?.controls?.accommodationDetails?.controls?.accommodationPreference.setValidators([
      //         Validators.required
      //     ]);
      // }

      //       page.travelForm?.controls?.requestDetails?.controls[0]?.controls?.accommodationDetails?.controls?.accommodationPreference.updateValueAndValidity();
      //appendnew_next_sd_LYJcmnJwoRoJ6qQz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LYJcmnJwoRoJ6qQz');
    }
  }

  sd_aauQ9VpyMBmalrnN(bh) {
    try {
      const page = this.page;
      page.travelForm.get('requestDetails').removeAt(bh.input.i);
      //appendnew_next_sd_aauQ9VpyMBmalrnN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aauQ9VpyMBmalrnN');
    }
  }

  sd_X4aSuU8d6NJHFUCt(bh) {
    try {
      const page = this.page;
      if (bh.input.event.value == 'International') {
        page.showVisa = true;
      } else {
        page.showVisa = false;
      }

      //appendnew_next_sd_X4aSuU8d6NJHFUCt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X4aSuU8d6NJHFUCt');
    }
  }

  sd_as2P81jrgTDTI9Cw(bh) {
    try {
      const page = this.page;
      page.showVisa = false;
      //appendnew_next_sd_as2P81jrgTDTI9Cw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_as2P81jrgTDTI9Cw');
    }
  }

  sd_Osf3azaK9Cis5yKY(bh) {
    try {
      const page = this.page;
      page.showHideButton = true;
      //appendnew_next_sd_Osf3azaK9Cis5yKY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Osf3azaK9Cis5yKY');
    }
  }

  sd_HCMg1Wp8GOTXOUCS(bh) {
    try {
      const page = this.page;
      page.showHideButton = false;
      //appendnew_next_sd_HCMg1Wp8GOTXOUCS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HCMg1Wp8GOTXOUCS');
    }
  }

  sd_4AsGmhNUvWJ6Kjkr(bh) {
    try {
      const page = this.page;
      page.showHideElement = true;
      bh = this.sd_CFZe2HLNQwcREGZX(bh);
      //appendnew_next_sd_4AsGmhNUvWJ6Kjkr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4AsGmhNUvWJ6Kjkr');
    }
  }

  sd_CFZe2HLNQwcREGZX(bh) {
    try {
      const page = this.page;
      bh.endPoint = 'genericGet/getPersonalDetails';
      bh.method = 'get';
      bh = this.sd_Zx4YnCv9rqUMeX5F(bh);
      //appendnew_next_sd_CFZe2HLNQwcREGZX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CFZe2HLNQwcREGZX');
    }
  }

  async sd_Zx4YnCv9rqUMeX5F(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.allPersonalDetails = outputVariables.local.result;

      bh = this.sd_bGJNq67yiqLlcZxB(bh);
      //appendnew_next_sd_Zx4YnCv9rqUMeX5F
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Zx4YnCv9rqUMeX5F');
    }
  }

  sd_bGJNq67yiqLlcZxB(bh) {
    try {
      const page = this.page;
      page.personalDetailsForm;
      //appendnew_next_sd_bGJNq67yiqLlcZxB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bGJNq67yiqLlcZxB');
    }
  }

  sd_woXsLjYIiE93sSGF(bh) {
    try {
      const page = this.page;
      page.showHideElement = false;
      bh.endPoint =
        'genericGet/getPersonalDetails?email=' + page.requesterDetails.email;
      bh.method = 'get';
      bh = this.sd_3C4rUDlPdIve4KEm(bh);
      //appendnew_next_sd_woXsLjYIiE93sSGF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_woXsLjYIiE93sSGF');
    }
  }

  async sd_3C4rUDlPdIve4KEm(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      bh.local.selfDetails = outputVariables.local.result;

      bh = this.sd_96VxExgs74Rn3m6g(bh);
      //appendnew_next_sd_3C4rUDlPdIve4KEm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3C4rUDlPdIve4KEm');
    }
  }

  sd_96VxExgs74Rn3m6g(bh) {
    try {
      const page = this.page;
      console.log(bh.selfDetails);
      bh.local.selfDetails['dateOfBirth'] = new Date(
        bh.local.selfDetails['dateOfBirth']
      );
      page.personalDetailsForm.patchValue(bh.local.selfDetails);
      //appendnew_next_sd_96VxExgs74Rn3m6g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_96VxExgs74Rn3m6g');
    }
  }

  sd_NJ7Bka5lSWxQJoAb(bh) {
    try {
      const page = this.page;
      bh.input.form.reset();
      //appendnew_next_sd_NJ7Bka5lSWxQJoAb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NJ7Bka5lSWxQJoAb');
    }
  }

  sd_Ag6YZ0twzIgYdQ4g(bh) {
    try {
      const page = this.page;
      page.showID = true;
      page.showPan = false;
      //appendnew_next_sd_Ag6YZ0twzIgYdQ4g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ag6YZ0twzIgYdQ4g');
    }
  }

  sd_CfToqqfcnjjxZVq0(bh) {
    try {
      const page = this.page;
      page.showID = false;
      page.showPan = true;
      //appendnew_next_sd_CfToqqfcnjjxZVq0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CfToqqfcnjjxZVq0');
    }
  }

  sd_7E0kFOs0S0LoIGyd(bh) {
    try {
      const page = this.page;
      page.futureDate = new Date(bh.input.date.value);
      console.log(page.futureDate, 'date');
      //appendnew_next_sd_7E0kFOs0S0LoIGyd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7E0kFOs0S0LoIGyd');
    }
  }

  sd_iHuwVRB3Pigul8fQ(bh) {
    try {
      const page = this.page;
      console.log('form', page.travelForm);
      if (bh.input.event.value == 'Other') {
        page.other = true;
        //console.log("2222",page.travelForm.controls.requestDetails.value[0].travelDetails.fromCity.value)
      }

      //appendnew_next_sd_iHuwVRB3Pigul8fQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iHuwVRB3Pigul8fQ');
    }
  }

  sd_8T8FKJ0zojGoSQEc(bh) {
    try {
      const page = this.page;
      if (bh.input.event.value != 'Other') {
        page.other = false;
      }

      //appendnew_next_sd_8T8FKJ0zojGoSQEc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8T8FKJ0zojGoSQEc');
    }
  }

  sd_JYH7Y01swLQYwjuy(bh) {
    try {
      const page = this.page;
      console.log('form', page.travelForm);
      if (bh.input.event.value == 'Other') {
        page.otherToCity = true;
        //console.log("2222",page.travelForm.controls.requestDetails.value[0].travelDetails.fromCity.value)
      }

      //appendnew_next_sd_JYH7Y01swLQYwjuy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JYH7Y01swLQYwjuy');
    }
  }

  sd_Dwt1Wymb3cJ2N4Vq(bh) {
    try {
      const page = this.page;
      console.log('event', bh.input.event);
      let personalDetails = page.allPersonalDetails.find(
        (el) => bh.input.event.option.value == el.email
      );
      if (personalDetails) {
        personalDetails['dateOfBirth'] = new Date(
          personalDetails['dateOfBirth']
        );
        page.personalDetailsForm.patchValue(personalDetails);
      }
      //appendnew_next_sd_Dwt1Wymb3cJ2N4Vq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dwt1Wymb3cJ2N4Vq');
    }
  }

  sd_E6ZjDNeLnSIeXTM5(bh) {
    try {
      const page = this.page;
      bh.input.form.reset();
      this.outputVar.emit(page.showDashboard);
      //appendnew_next_sd_E6ZjDNeLnSIeXTM5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E6ZjDNeLnSIeXTM5');
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
