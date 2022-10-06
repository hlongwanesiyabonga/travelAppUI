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
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { travelRequestDialogComponent } from './travelRequestDialog.component'; //_splitter_
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
      this.sd_UtVDkldq8ptmZb4v(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_UtVDkldq8ptmZb4v(bh) {
    try {
      bh = this.tableDataSource(bh);
      //appendnew_next_sd_UtVDkldq8ptmZb4v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UtVDkldq8ptmZb4v');
    }
  }

  getTravelRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_UmWSRj3Qpmhs8N1h(bh);
      //appendnew_next_getTravelRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lTeQIRc0VRJIQlZW');
    }
  }

  goTo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VEtAIBH1sZxwQedT(bh);
      //appendnew_next_goTo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MEQPW5Pj6NkRjFPt');
    }
  }

  openViewRequest(selectedRowID: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { selectedRowID: selectedRowID };
      bh.local = {};
      bh = this.sd_7kJeh9SbSb28xxIX(bh);
      //appendnew_next_openViewRequest
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yveiwMxmMNjwO0sS');
    }
  }

  travelRequests(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_zZXxqVNEPwMwN4pj(bh);
      //appendnew_next_travelRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u8In8P0t33HIyxjC');
    }
  }

  closeProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_UK05b4pwjxXl94c1(bh);
      //appendnew_next_closeProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nlaOwHKAFsHLEWrL');
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
      return this.errorHandler(bh, e, 'sd_BvyMmkrB19aRiQCP');
    }
  }

  paginator(bh) {
    try {
      this.page.paginator = MatPaginator;
      bh = this.sort(bh);
      //appendnew_next_paginator
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0qmTmCOLyszky4k9');
    }
  }

  sort(bh) {
    try {
      this.page.sort = MatSort;
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WC18nMds7NiM80tn');
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
      bh = this.sd_KBJALXBQpNJIiAXB(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_za4qWrTsozI1uY4j');
    }
  }

  sd_KBJALXBQpNJIiAXB(bh) {
    try {
      const page = this.page; //bh.method = "get";
      //bh.endPoint = "travelRequests/getTravelRequests?owner="+page.currentUserDetails.email;
      page.select = [
        { viewvalue: 'My requests' },
        { viewvalue: 'Traveler requests' },
      ];
      bh = this.sd_w30sShqrsh9rOLaq(bh);
      //appendnew_next_sd_KBJALXBQpNJIiAXB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KBJALXBQpNJIiAXB');
    }
  }

  sd_w30sShqrsh9rOLaq(bh) {
    try {
      let outputVariables = this.getTravelRequests();

      //appendnew_next_sd_w30sShqrsh9rOLaq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w30sShqrsh9rOLaq');
    }
  }

  sd_UmWSRj3Qpmhs8N1h(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_kOE5yULIR0S86tBG(bh);
      bh = this.sd_Q1zDkTK9WCcgmXLa(bh);
      //appendnew_next_sd_UmWSRj3Qpmhs8N1h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UmWSRj3Qpmhs8N1h');
    }
  }

  sd_kOE5yULIR0S86tBG(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint =
        'travelRequests/getTravelRequests?owner=' +
        page.currentUserDetails.email;
      bh = this.sd_3YsDPxJfCGJigFe0(bh);
      //appendnew_next_sd_kOE5yULIR0S86tBG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kOE5yULIR0S86tBG');
    }
  }

  async sd_3YsDPxJfCGJigFe0(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.receivedTableData = outputVariables.local.result;

      bh = this.sd_hJFj3EL4AqqqGPEv(bh);
      //appendnew_next_sd_3YsDPxJfCGJigFe0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3YsDPxJfCGJigFe0');
    }
  }

  sd_hJFj3EL4AqqqGPEv(bh) {
    try {
      const page = this.page; //bh.method = "get";
      //bh.endPoint = "travelRequests/getTravelRequests?owner=" + page.currentUserDetails.email;
      bh.receivedTableData = page.receivedTableData['data'];

      page.counts = {
        pendingCounts: [],
        approvedCounts: [],
        rejectedCounts: [],
        totalCounts: bh.receivedTableData.length,
      };

      bh.receivedTableData.forEach((item) => {
        if (item.status == 'Approved') {
          page.counts.approvedCounts.push(item);
        } else if (item.status == 'Rejected') {
          page.counts.rejectedCounts.push(item);
        } else {
          page.counts.pendingCounts.push(item);
        }
      });

      page.dashboardCards = [
        {
          amount: page?.counts?.totalCounts,
          topText: 'Total',
          icon: 'description',
          cssClass: 'blueBg',
        },
        {
          amount: page?.counts?.pendingCounts?.length,
          topText: 'Pending',
          icon: 'hourglass_full',
          cssClass: 'orangeBg',
        },
        {
          amount: page?.counts?.approvedCounts?.length,
          topText: 'Approved',
          icon: 'thumb_up',
          cssClass: 'greenBg',
        },
        {
          amount: page?.counts?.rejectedCounts?.length,
          topText: 'Rejected',
          icon: 'thumb_down',
          cssClass: 'redBg',
        },
      ];

      bh = this.logTable(bh);
      //appendnew_next_sd_hJFj3EL4AqqqGPEv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hJFj3EL4AqqqGPEv');
    }
  }

  logTable(bh) {
    try {
      const page = this.page;
      console.log(page.receivedTableData);
      bh = this.table(bh);
      //appendnew_next_logTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pJbdSX4r15agUYfi');
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
      return this.errorHandler(bh, e, 'sd_3oO8n1cMQcZahZYR');
    }
  }

  setTableTokens(bh) {
    try {
      const page = this.page;
      let tableData = [];
      let userGroups = ['Executive', 'Manager', 'HR', 'Finance'];
      let tableSetup = {
        traveler: {
          tableHeaders: [
            'Owner',
            'Date Created',
            'Trip Type',
            'Travel Mode',
            'From City',
            'To City',
            'Status',
            'Action',
          ],
          tableCells: [
            'owner',
            'dateCreated',
            `tripType`,
            'travelMode',
            'fromCity',
            'toCity',
            'status',
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
        let temp = {};
        temp['_id'] = el['_id'];
        temp['owner'] = el['owner'];
        temp['status'] = el['status'];
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

      // let tableData = [];
      // let userGroups = ['Executive', 'Manager', 'HR', 'Finance'];
      // let tableSetup = {
      //     "traveler": {
      //         "tableHeaders": ['Date Created', 'Trip Type', 'Travel Mode', 'From City', 'To City', 'Status', 'Action'],
      //         "tableCells": ['dateCreated', `tripType`, 'travelMode', 'fromCity', 'toCity', 'action']
      //     }
      // };
      // bh.role = (!userGroups.includes(page.currentUserDetails.designation)) ? 'traveler' : 'other',
      //     page.tableHeaders = tableSetup[bh.role]['tableHeaders'];
      // page.tableCells = tableSetup[bh.role]['tableCells'];
      // page.receivedTableData['data'].forEach(el => {
      //     let temp = {};
      //     temp['_id'] = el['_id'];
      //     temp['dateCreated'] = el['dateCreated'];
      //     temp['tripType'] = el['requestDetails'][0]['travelDetails']['tripType'];
      //     temp['travelMode'] = el['requestDetails'][0]['travelDetails']['travelMode'];
      //     temp['fromCity'] = el['requestDetails'][0]['travelDetails']['fromCity'];
      //     temp['toCity'] = el['requestDetails'][0]['travelDetails']['toCity'];
      //     tableData.push(temp);
      // })

      // page.tableData = new page.tableDataSource(tableData);
      // page.tableData.paginator = bh.pageViews.MatPaginator;
      // page.tableData.sort = bh.pageViews.MatSort;
      //appendnew_next_setTableTokens
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4dsz3WXte8UGSqzl');
    }
  }

  sd_Q1zDkTK9WCcgmXLa(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      if (page.currentUserDetails.designation.includes('Travel')) {
        bh.endPoint = 'travelRequests/getTravelRequests';
      } else if (page.currentUserDetails.designation.includes('Manager')) {
        bh.endPoint =
          'travelRequests/getTravelRequests?personalDetails.lineManagerEmail=' +
          page.currentUserDetails.email;
      }
      bh = this.sd_ChB9GlrqkZLSHtmX(bh);
      //appendnew_next_sd_Q1zDkTK9WCcgmXLa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q1zDkTK9WCcgmXLa');
    }
  }

  sd_ChB9GlrqkZLSHtmX(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          bh.endPoint,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gMzUiK9mR0JrW2Bx(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ChB9GlrqkZLSHtmX');
    }
  }

  async sd_gMzUiK9mR0JrW2Bx(bh) {
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
      //appendnew_next_sd_gMzUiK9mR0JrW2Bx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gMzUiK9mR0JrW2Bx');
    }
  }

  async sd_VEtAIBH1sZxwQedT(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/new-request');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_VEtAIBH1sZxwQedT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VEtAIBH1sZxwQedT');
    }
  }

  sd_7kJeh9SbSb28xxIX(bh) {
    try {
      const page = this.page;
      bh.data = page.receivedTableData['data'].find(
        (obj) => bh.input.selectedRowID == obj._id
      );

      bh = this.sd_a7vUHYv5ZMuKzSRM(bh);
      //appendnew_next_sd_7kJeh9SbSb28xxIX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7kJeh9SbSb28xxIX');
    }
  }

  sd_a7vUHYv5ZMuKzSRM(bh) {
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
      return this.errorHandler(bh, e, 'sd_a7vUHYv5ZMuKzSRM');
    }
  }

  sd_zZXxqVNEPwMwN4pj(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.event.value,
          'My requests',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_kOE5yULIR0S86tBG(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.event.value,
          'Traveler requests',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Q1zDkTK9WCcgmXLa(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zZXxqVNEPwMwN4pj');
    }
  }

  sd_UK05b4pwjxXl94c1(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      //appendnew_next_sd_UK05b4pwjxXl94c1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UK05b4pwjxXl94c1');
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
