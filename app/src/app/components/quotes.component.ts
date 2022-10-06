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
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-quotes',
  templateUrl: './quotes.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class quotesComponent {
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
      this.sd_znKUEplcwIANlqCI(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_znKUEplcwIANlqCI(bh) {
    try {
      bh = this.sd_cgjvGNRGsSbI6NNp(bh);
      //appendnew_next_sd_znKUEplcwIANlqCI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_znKUEplcwIANlqCI');
    }
  }

  dateChange1(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_aRSO3a6ORoprJ0Af(bh);
      //appendnew_next_dateChange1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M4z77KZBYJr81d8c');
    }
  }

  thirdDateChange1(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_kxqGIMoACrK2FA1S(bh);
      //appendnew_next_thirdDateChange1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qIydbBgUiwP3EQV1');
    }
  }

  secondDateChange1(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_Zo685J7qBTu3uaD1(bh);
      //appendnew_next_secondDateChange1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3naZp0dGr22104xP');
    }
  }

  dateChange2(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_WcPxXuFnYI3m9cxU(bh);
      //appendnew_next_dateChange2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C3xYsL7WwwnH5JAN');
    }
  }

  thirdDateChange2(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_YTh9jdoatzc4Vdcc(bh);
      //appendnew_next_thirdDateChange2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7d0uk5aVu9AGiTPm');
    }
  }

  secondDateChange2(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_RNARpxo2amO3cxua(bh);
      //appendnew_next_secondDateChange2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bvpemSKHD4Iaip7m');
    }
  }

  dateChange3(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_Xw7YixLTIG1YKpf6(bh);
      //appendnew_next_dateChange3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ENdv4pgePETHPRNk');
    }
  }

  thirdDateChange3(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_Ee4jp4033oj3qoWS(bh);
      //appendnew_next_thirdDateChange3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NgYmWOTEPoQfCesS');
    }
  }

  secondDateChange3(date: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date: date };
      bh.local = {};
      bh = this.sd_ntPprf1GkMrZOlB6(bh);
      //appendnew_next_secondDateChange3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N8OzVyFQjSXQ1cF9');
    }
  }

  submit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oCEuWzTarh6IGah6(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w1TWgLsNG2KU8S1S');
    }
  }

  //appendnew_flow_quotesComponent_start

  sd_cgjvGNRGsSbI6NNp(bh) {
    try {
      this.page.quotesForm = undefined;
      this.page.futureDate1 = undefined;
      this.page.date1 = undefined;
      this.page.newDate1 = undefined;
      this.page.futureDate2 = undefined;
      this.page.futureDate3 = undefined;
      this.page.newDate2 = undefined;
      this.page.newDate3 = undefined;
      bh = this.sd_RZCp6cZJCptTlpe8(bh);
      //appendnew_next_sd_cgjvGNRGsSbI6NNp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cgjvGNRGsSbI6NNp');
    }
  }

  sd_RZCp6cZJCptTlpe8(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.quotesForm(bh);
      //appendnew_next_sd_RZCp6cZJCptTlpe8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RZCp6cZJCptTlpe8');
    }
  }

  quotesForm(bh) {
    try {
      const page = this.page;
      page.quotesForm = new FormGroup({
        // quote 1
        selectedQuote: new FormControl(''),
        q1dep1: new FormControl('', [Validators.required]),
        q1arrival1: new FormControl('', [Validators.required]),
        q1dep2: new FormControl('', [Validators.required]),
        q1arrival2: new FormControl('', [Validators.required]),
        q1airline: new FormControl('', [Validators.required]),
        q1cost: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        // quote 2
        q2dep1: new FormControl('', [Validators.required]),
        q2arrival1: new FormControl('', [Validators.required]),
        q2dep2: new FormControl('', [Validators.required]),
        q2arrival2: new FormControl('', [Validators.required]),
        q2airline: new FormControl('', [Validators.required]),
        q2cost: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        // quote 3
        q3dep1: new FormControl('', [Validators.required]),
        q3arrival1: new FormControl('', [Validators.required]),
        q3dep2: new FormControl('', [Validators.required]),
        q3arrival2: new FormControl('', [Validators.required]),
        q3airline: new FormControl('', [Validators.required]),
        q3cost: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      });
      bh = this.newDate(bh);
      //appendnew_next_quotesForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hQUY9Gozmxxhhaeu');
    }
  }

  newDate(bh) {
    try {
      const page = this.page;
      page.date1 = new Date();

      page.date2 = new Date();

      page.date3 = new Date();

      page.date4 = new Date();

      page.date5 = new Date();

      page.date6 = new Date();

      //appendnew_next_newDate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8oV5f7Ww7v98j4WX');
    }
  }

  sd_aRSO3a6ORoprJ0Af(bh) {
    try {
      const page = this.page;
      page.futureDate1 = new Date(bh.input.date.value);

      //appendnew_next_sd_aRSO3a6ORoprJ0Af
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aRSO3a6ORoprJ0Af');
    }
  }

  sd_kxqGIMoACrK2FA1S(bh) {
    try {
      const page = this.page;
      page.futureDate2 = new Date(bh.input.date.value);

      //appendnew_next_sd_kxqGIMoACrK2FA1S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kxqGIMoACrK2FA1S');
    }
  }

  sd_Zo685J7qBTu3uaD1(bh) {
    try {
      const page = this.page;
      page.newDate1 = new Date(bh.input.date.value);
      //appendnew_next_sd_Zo685J7qBTu3uaD1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zo685J7qBTu3uaD1');
    }
  }

  sd_WcPxXuFnYI3m9cxU(bh) {
    try {
      const page = this.page;
      page.futureDate3 = new Date(bh.input.date.value);

      //appendnew_next_sd_WcPxXuFnYI3m9cxU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WcPxXuFnYI3m9cxU');
    }
  }

  sd_YTh9jdoatzc4Vdcc(bh) {
    try {
      const page = this.page;
      page.futureDate4 = new Date(bh.input.date.value);

      //appendnew_next_sd_YTh9jdoatzc4Vdcc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YTh9jdoatzc4Vdcc');
    }
  }

  sd_RNARpxo2amO3cxua(bh) {
    try {
      const page = this.page;
      page.newDate2 = new Date(bh.input.date.value);
      //appendnew_next_sd_RNARpxo2amO3cxua
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RNARpxo2amO3cxua');
    }
  }

  sd_Xw7YixLTIG1YKpf6(bh) {
    try {
      const page = this.page;
      page.futureDate5 = new Date(bh.input.date.value);

      //appendnew_next_sd_Xw7YixLTIG1YKpf6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xw7YixLTIG1YKpf6');
    }
  }

  sd_Ee4jp4033oj3qoWS(bh) {
    try {
      const page = this.page;
      page.futureDate6 = new Date(bh.input.date.value);

      //appendnew_next_sd_Ee4jp4033oj3qoWS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ee4jp4033oj3qoWS');
    }
  }

  sd_ntPprf1GkMrZOlB6(bh) {
    try {
      const page = this.page;
      page.newDate3 = new Date(bh.input.date.value);
      //appendnew_next_sd_ntPprf1GkMrZOlB6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ntPprf1GkMrZOlB6');
    }
  }

  sd_oCEuWzTarh6IGah6(bh) {
    try {
      const page = this.page;
      bh.method = 'post';
      bh.endPoint = `quotes`;
      console.log('data form:', page.quotesForm);
      bh.body = page.quotesForm.value;

      bh = this.sd_puxpZv1sqC2SB3mg(bh);
      //appendnew_next_sd_oCEuWzTarh6IGah6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oCEuWzTarh6IGah6');
    }
  }

  async sd_puxpZv1sqC2SB3mg(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        bh.body
      );
      bh.local.result = outputVariables.local.result;

      //appendnew_next_sd_puxpZv1sqC2SB3mg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_puxpZv1sqC2SB3mg');
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
  //appendnew_flow_quotesComponent_Catch
}
