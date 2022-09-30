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
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
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
      this.sd_BTf9i9QAszbO7i3N(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_BTf9i9QAszbO7i3N(bh) {
    try {
      bh = this.tableDataSource(bh);
      //appendnew_next_sd_BTf9i9QAszbO7i3N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BTf9i9QAszbO7i3N');
    }
  }

  sd_ZiMf7unJMN9WTCdx(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Uur1CFhWbiRr002z(bh);
      //appendnew_next_sd_ZiMf7unJMN9WTCdx
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZiMf7unJMN9WTCdx');
    }
  }

  //appendnew_flow_view_travel_requestsComponent_start

  tableDataSource(bh) {
    try {
      this.page.tableDataSource = MatTableDataSource;
      bh = this.paginator(bh);
      //appendnew_next_tableDataSource
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C6YF8Mvo5QyzHF4Z');
    }
  }

  paginator(bh) {
    try {
      this.page.paginator = MatPaginator;
      bh = this.sort(bh);
      //appendnew_next_paginator
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k0GsnlncEM6BWlE4');
    }
  }

  sort(bh) {
    try {
      this.page.sort = MatSort;
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ls98oIMbqy17xKnu');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = [];
      this.page.currentUserDetails = {};
      this.page.dashboardCards = undefined;
      this.page.tableHeaders = [];
      this.page.tableCells = [];
      this.page.receivedTableData = [];
      this.page.email = undefined;
      this.page.select = undefined;
      this.page.counts = {};
      bh = this.sd_aahVPe9dAncg9gEt(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zEmBiVp4U4ztVQKa');
    }
  }

  sd_aahVPe9dAncg9gEt(bh) {
    try {
      const page = this.page;
      page.select = [
        { viewvalue: 'My requests' },
        { viewvalue: 'Traveler requests' },
      ];
      //appendnew_next_sd_aahVPe9dAncg9gEt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aahVPe9dAncg9gEt');
    }
  }

  sd_Uur1CFhWbiRr002z(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_6B0ZK9AaHRdVo67p(bh);
      //appendnew_next_sd_Uur1CFhWbiRr002z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Uur1CFhWbiRr002z');
    }
  }

  sd_6B0ZK9AaHRdVo67p(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint = 'travelRequests/getTravelRequests?';

      bh = this.sd_ONCHSdS1F5TeFZ1l(bh);
      //appendnew_next_sd_6B0ZK9AaHRdVo67p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6B0ZK9AaHRdVo67p');
    }
  }

  async sd_ONCHSdS1F5TeFZ1l(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      bh.result = outputVariables.local.result;

      //appendnew_next_sd_ONCHSdS1F5TeFZ1l
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ONCHSdS1F5TeFZ1l');
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
