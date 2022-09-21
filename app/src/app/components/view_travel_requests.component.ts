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
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { new_travel_requestComponent } from './new_travel_request.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_travel_requests',
  templateUrl: './view_travel_requests.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_travel_requestsComponent {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      bh = this.tableDataSource(bh);
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

  openViewRequest(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_foqFWGeyE6VpOSKm(bh);
      //appendnew_next_openViewRequest
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HMmCFgfRZ8BIIgLg');
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
      return this.errorHandler(bh, e, 'sd_mHDnnby1kHSNIwe9');
    }
  }

  paginator(bh) {
    try {
      this.page.paginator = MatPaginator;
      bh = this.sort(bh);
      //appendnew_next_paginator
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k4OmJZ5DAzWXxvEq');
    }
  }

  sort(bh) {
    try {
      this.page.sort = MatSort;
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BtSloSIn0WwUMJqA');
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
      bh = this.sd_LXI6ABPdqGPWtVPw(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_463afOpMMeJ5Yxac');
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

      bh = this.sd_BSTpLgaf8MQyg93d(bh);
      //appendnew_next_sd_SSbGg5g6eV3KHa01
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SSbGg5g6eV3KHa01');
    }
  }

  sd_BSTpLgaf8MQyg93d(bh) {
    try {
      const page = this.page;
      page.dashboardCards = [
        {
          amount: 15,
          topText: 'Total',
          icon: 'description',
          cssClass: 'blueBg',
        },
        {
          amount: 6,
          topText: 'Pending',
          icon: 'hourglass_full',
          cssClass: 'orangeBg',
        },
        {
          amount: 5,
          topText: 'Approved',
          icon: 'thumb_up',
          cssClass: 'greenBg',
        },
        {
          amount: 4,
          topText: 'Rejected',
          icon: 'thumb_down',
          cssClass: 'redBg',
        },
      ];
      //appendnew_next_sd_BSTpLgaf8MQyg93d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BSTpLgaf8MQyg93d');
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
        'travelRequests/getTravelRequests?owner=' +
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
      this.page.receivedTableData = outputVariables.local.result;

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
      console.log('this table', page.receivedTableData);
      bh = this.table(bh);
      //appendnew_next_logTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d5laVS4z760LyRps');
    }
  }

  table(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatPaginator: this.MatPaginator,
      });
      bh = this.setTableTokens(bh);
      //appendnew_next_table
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HgsN216NweFheonG');
    }
  }

  setTableTokens(bh) {
    try {
      const page = this.page;
      let tableData = [];
      let userGroups = ['Executive', 'Manager', 'HR', 'Finance'];
      let temp = {};
      let tableSetup = {
        traveler: {
          tableHeaders: [
            'Date Created',
            'Trip Type',
            'Travel Mode',
            'From City',
            'To City',
            'Status',
            'Action',
          ],
          tableCells: [
            'dateCreated',
            `tripType`,
            'travelMode',
            'fromCity',
            'toCity',
            'action',
          ],
        },
      };
      (bh.role = !userGroups.includes(page.currentUserDetails.designation)
        ? 'traveler'
        : 'other'),
        (page.tableHeaders = tableSetup[bh.role]['tableHeaders']);
      page.tableCells = tableSetup[bh.role]['tableCells'];
      page.receivedTableData['data'].forEach((el) => {
        temp['_id'] = el['_id'];
        temp['dateCreated'] = el['dateCreated'];
        temp['tripType'] = el['requestDetails'][0]['travelDetails']['tripType'];
        temp['travelMode'] =
          el['requestDetails'][0]['travelDetails']['travelMode'];
        temp['fromCity'] = el['requestDetails'][0]['travelDetails']['fromCity'];
        temp['toCity'] = el['requestDetails'][0]['travelDetails']['toCity'];
        tableData.push(temp);
      });
      console.log(tableData);
      page.tableData = new page.tableDataSource(tableData);
      page.tableData.paginator = bh.pageViews.MatPaginator;
      page.tableData.sort = bh.pageViews.MatSort;
      //appendnew_next_setTableTokens
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PJCi5a6up5yJxqw5');
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

  sd_foqFWGeyE6VpOSKm(bh) {
    try {
      const new_travel_requestDialog = this.__page_injector__.get(MatDialog);
      const new_travel_requestDialogRef = new_travel_requestDialog.open(
        new_travel_requestComponent,
        {
          maxHeight: '85vh',
          minHeight: '85vh',
          minWidth: '85vw',
          panelClass: this.page.scroll,
        }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_foqFWGeyE6VpOSKm');
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
