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
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_travel_requests',
  templateUrl: './view_travel_requests.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_travel_requestsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_KOVXOnK6cV7gj979(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_KOVXOnK6cV7gj979(bh) {
    try {
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_KOVXOnK6cV7gj979
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KOVXOnK6cV7gj979');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent: filterEvent };
      bh.local = {};
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QB6d44LFvxAJuWT');
    }
  }

  getTravelRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_8rwHpkPcEjQAdQ9f(bh);
      //appendnew_next_getTravelRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FVFM6b18mqiSTaD8');
    }
  }

  rowChecked(rowType = '', rowData: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { rowType: rowType, rowData: rowData };
      bh.local = {};
      //appendnew_next_rowChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zHqPHtCefjo7O1KL');
    }
  }

  goTo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_e2jI7LQDxK8XdWjP(bh);
      //appendnew_next_goTo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T5JMllQjltZ9ihQX');
    }
  }

  //appendnew_flow_view_travel_requestsComponent_start

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = [];
      this.page.currentUserDetails = {};
      bh = this.sd_LXI6ABPdqGPWtVPw(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pFptOVv2Wq7irLNr');
    }
  }

  sd_LXI6ABPdqGPWtVPw(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint = 'travelRequests/getTravelRequests';
      bh = this.sd_SSbGg5g6eV3KHa01(bh);
      //appendnew_next_sd_LXI6ABPdqGPWtVPw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LXI6ABPdqGPWtVPw');
    }
  }

  sd_SSbGg5g6eV3KHa01(bh) {
    try {
      let outputVariables = this.getTravelRequests();

      //appendnew_next_sd_SSbGg5g6eV3KHa01
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SSbGg5g6eV3KHa01');
    }
  }

  sd_8rwHpkPcEjQAdQ9f(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_HPCHaM7tAhCjPbLU(bh);
      //appendnew_next_sd_8rwHpkPcEjQAdQ9f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8rwHpkPcEjQAdQ9f');
    }
  }

  sd_HPCHaM7tAhCjPbLU(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint =
        'travelRequests/getTravelRequests?owner' +
        page.currentUserDetails.email;
      bh = this.sd_bC5p0BEPQlu4QyLn(bh);
      //appendnew_next_sd_HPCHaM7tAhCjPbLU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HPCHaM7tAhCjPbLU');
    }
  }

  async sd_bC5p0BEPQlu4QyLn(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.tableData = outputVariables.local.result;

      bh = this.logTable(bh);
      //appendnew_next_sd_bC5p0BEPQlu4QyLn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bC5p0BEPQlu4QyLn');
    }
  }

  logTable(bh) {
    try {
      const page = this.page;
      console.log('this table', page.tableData);
      //appendnew_next_logTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d5laVS4z760LyRps');
    }
  }

  async sd_e2jI7LQDxK8XdWjP(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/new-request');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_e2jI7LQDxK8XdWjP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e2jI7LQDxK8XdWjP');
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
  //appendnew_flow_view_travel_requestsComponent_Catch
}
