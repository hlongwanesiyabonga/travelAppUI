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
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-finance',
  templateUrl: './finance.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class financeComponent {
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
      this.sd_583glaJ9DYui2R7a(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_583glaJ9DYui2R7a(bh) {
    try {
      bh = this.sd_bz2xyY0fc17QvaIC(bh);
      //appendnew_next_sd_583glaJ9DYui2R7a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_583glaJ9DYui2R7a');
    }
  }

  submitFinance(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_HgBUVhszeck7wdKz(bh);
      //appendnew_next_submitFinance
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ee2xMseMQszPMkdf');
    }
  }

  //appendnew_flow_financeComponent_start

  sd_bz2xyY0fc17QvaIC(bh) {
    try {
      this.page.financeForm = undefined;
      bh = this.sd_EsIBhXY6HRkaMDwY(bh);
      //appendnew_next_sd_bz2xyY0fc17QvaIC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bz2xyY0fc17QvaIC');
    }
  }

  sd_EsIBhXY6HRkaMDwY(bh) {
    try {
      this.page.FormGroup = FormGroup;
      bh = this.financeForm(bh);
      //appendnew_next_sd_EsIBhXY6HRkaMDwY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EsIBhXY6HRkaMDwY');
    }
  }

  financeForm(bh) {
    try {
      const page = this.page;
      page.financeForm = new FormGroup({
        perdium: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        stipend: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        totalCost: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      });
      //appendnew_next_financeForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RdHIXBTDMA9lZ6Lz');
    }
  }

  sd_HgBUVhszeck7wdKz(bh) {
    try {
      const page = this.page;
      bh.method = 'post';
      bh.endPoint = 'addFinancePage';
      bh.body = page.financeForm.value;
      bh.body.owner = page.dialogData._id;
      console.log('finance', bh.body);

      bh = this.sd_a7Ma7YjYnYYVF2Da(bh);
      //appendnew_next_sd_HgBUVhszeck7wdKz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HgBUVhszeck7wdKz');
    }
  }

  async sd_a7Ma7YjYnYYVF2Da(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        bh.body
      );
      bh.result = outputVariables.local.result;

      //appendnew_next_sd_a7Ma7YjYnYYVF2Da
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a7Ma7YjYnYYVF2Da');
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
  //appendnew_flow_financeComponent_Catch
}
