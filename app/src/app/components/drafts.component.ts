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
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { travelRequestDialogComponent } from './travelRequestDialog.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-drafts',
  templateUrl: './drafts.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class draftsComponent {
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
      this.sd_xZOvn2Peup4WIOTE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xZOvn2Peup4WIOTE(bh) {
    try {
      bh = this.sd_RcU9bg72YARcs8YT(bh);
      //appendnew_next_sd_xZOvn2Peup4WIOTE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xZOvn2Peup4WIOTE');
    }
  }

  getTravelRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wJBnESgJGGNuKJn4(bh);
      //appendnew_next_getTravelRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m4f1RBLWW5ALYhB3');
    }
  }

  openViewRequest(selectedRowID: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { selectedRowID: selectedRowID };
      bh.local = {};
      bh = this.sd_jL3NCJrsQ1UzdJuZ(bh);
      //appendnew_next_openViewRequest
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EZ3NVWoCTRthdcdE');
    }
  }

  closeProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9KZr8EZKbPqNglpJ(bh);
      //appendnew_next_closeProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EnXv8MqWeSjGfafA');
    }
  }

  submitForm(profileForm: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { profileForm: profileForm };
      bh.local = {};
      bh = this.sd_sLKaEZbR5fAq5UYA(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_usQBP6hoDkCFCDaE');
    }
  }

  //appendnew_flow_draftsComponent_start

  sd_RcU9bg72YARcs8YT(bh) {
    try {
      bh = this.tableDataSource(bh);
      //appendnew_next_sd_RcU9bg72YARcs8YT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RcU9bg72YARcs8YT');
    }
  }

  tableDataSource(bh) {
    try {
      this.page.tableDataSource = MatTableDataSource;
      bh = this.paginator(bh);
      //appendnew_next_tableDataSource
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nsfxbQj9P8JAadMe');
    }
  }

  paginator(bh) {
    try {
      this.page.paginator = MatPaginator;
      bh = this.sort(bh);
      //appendnew_next_paginator
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nJ3waNTcFhxFX4gw');
    }
  }

  sort(bh) {
    try {
      this.page.sort = MatSort;
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_caKNT1w9JqSiUu4C');
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
      this.page.drafts = undefined;
      bh = this.sd_rWCzaLhYT4L3DcxM(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QHpEifgaJv4aMK0z');
    }
  }

  sd_rWCzaLhYT4L3DcxM(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      // bh.endPoint = "getTravelRequestDrafts"
      bh.endPoint = 'travelRequests/getTravelRequest?type=draft';
      bh = this.sd_5mJKpAKXc0bTZZyy(bh);
      //appendnew_next_sd_rWCzaLhYT4L3DcxM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rWCzaLhYT4L3DcxM');
    }
  }

  async sd_5mJKpAKXc0bTZZyy(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.tableData = outputVariables.local.result;

      bh = this.sd_ZAuxPcsfV74FeOsi(bh);
      //appendnew_next_sd_5mJKpAKXc0bTZZyy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5mJKpAKXc0bTZZyy');
    }
  }

  sd_ZAuxPcsfV74FeOsi(bh) {
    try {
      const page = this.page; // page.dashboardCards =[
      //     {amount: 15, topText: 'Total', icon : 'description', cssClass: 'blueBg'},
      //     {amount: 6, topText: 'Pending', icon : 'hourglass_full', cssClass: 'orangeBg'},
      //     {amount: 5, topText: 'Approved', icon : 'thumb_up', cssClass: 'greenBg'},
      //     {amount: 4, topText: 'Rejected', icon : 'thumb_down', cssClass: 'redBg'},
      // ];
      //appendnew_next_sd_ZAuxPcsfV74FeOsi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZAuxPcsfV74FeOsi');
    }
  }

  sd_wJBnESgJGGNuKJn4(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_lbtlLEQlxqy4C52Q(bh);
      //appendnew_next_sd_wJBnESgJGGNuKJn4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wJBnESgJGGNuKJn4');
    }
  }

  sd_lbtlLEQlxqy4C52Q(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint = 'getTravelRequestDrafts';
      //appendnew_next_sd_lbtlLEQlxqy4C52Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lbtlLEQlxqy4C52Q');
    }
  }

  sd_jL3NCJrsQ1UzdJuZ(bh) {
    try {
      const page = this.page;
      bh.data = page.receivedTableData['data'].find(
        (obj) => bh.input.selectedRowID == obj._id
      );

      bh = this.sd_TaDCMBsR0KXkD63u(bh);
      //appendnew_next_sd_jL3NCJrsQ1UzdJuZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jL3NCJrsQ1UzdJuZ');
    }
  }

  sd_TaDCMBsR0KXkD63u(bh) {
    try {
      const travelRequestDialogDialog = this.__page_injector__.get(MatDialog);
      const travelRequestDialogDialogRef = travelRequestDialogDialog.open(
        travelRequestDialogComponent,
        {
          data: bh.data,
          disableClose: true,
          maxHeight: '85vh',
          minHeight: '85vh',
          minWidth: '85vw',
          panelClass: this.page.scroll,
        }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TaDCMBsR0KXkD63u');
    }
  }

  sd_9KZr8EZKbPqNglpJ(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      //appendnew_next_sd_9KZr8EZKbPqNglpJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9KZr8EZKbPqNglpJ');
    }
  }

  sd_sLKaEZbR5fAq5UYA(bh) {
    try {
      const page = this.page;
      (bh.method = 'put'),
        (bh.endPoint = '/updateTravelRequest/draft' + page.personalDetails._id);

      //appendnew_next_sd_sLKaEZbR5fAq5UYA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sLKaEZbR5fAq5UYA');
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
  //appendnew_flow_draftsComponent_Catch
}
