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
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_DEpURkbQd1yC7evr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DEpURkbQd1yC7evr(bh) {
    try {
      bh = this.tableDataSource(bh);
      //appendnew_next_sd_DEpURkbQd1yC7evr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DEpURkbQd1yC7evr');
    }
  }

  goTo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_aLNXjBcLPztCW64j(bh);
      //appendnew_next_goTo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mrXvkf0duurSdFDY');
    }
  }

  openViewRequest(selectedRowID: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { selectedRowID: selectedRowID };
      bh.local = {};
      bh = this.sd_mt8Cw5ZGD0NQSUMB(bh);
      //appendnew_next_openViewRequest
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AAtb2ycYY078mW7G');
    }
  }

  travelRequests(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_RIhDba0Qns6BqrvX(bh);
      //appendnew_next_travelRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C6J9HQwkO5SQorTg');
    }
  }

  closeProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_YQGYIR1ExZCECWq7(bh);
      //appendnew_next_closeProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g4XccWFtvoNrVVtf');
    }
  }

  //appendnew_flow_dashboardComponent_start

  tableDataSource(bh) {
    try {
      this.page.tableDataSource = MatTableDataSource;
      bh = this.paginator(bh);
      //appendnew_next_tableDataSource
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NHOLdr2QCcwKZOXC');
    }
  }

  paginator(bh) {
    try {
      this.page.paginator = MatPaginator;
      bh = this.sort(bh);
      //appendnew_next_paginator
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6qNWcMnFIBJGKL63');
    }
  }

  sort(bh) {
    try {
      this.page.sort = MatSort;
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZPDW1S2ZFYD7wn8h');
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
      bh = this.sd_wBen0TdptHyjdKXK(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ptIeaoCYsPK9hjAj');
    }
  }

  sd_wBen0TdptHyjdKXK(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_q6OoeIYWQhQzzGjh(bh);
      //appendnew_next_sd_wBen0TdptHyjdKXK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wBen0TdptHyjdKXK');
    }
  }

  sd_q6OoeIYWQhQzzGjh(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint =
        'travelRequests/getTravelRequests?owner=' +
        page.currentUserDetails.email;
      page.select = [
        { viewvalue: 'My requests' },
        { viewvalue: 'Traveler requests' },
      ];

      bh = this.sd_jpxsohmPQY8GE1QJ(bh);
      //appendnew_next_sd_q6OoeIYWQhQzzGjh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q6OoeIYWQhQzzGjh');
    }
  }

  async sd_jpxsohmPQY8GE1QJ(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.receivedTableData = outputVariables.local.result;

      bh = this.sd_n1Xt0bMElt0KuQIn(bh);
      //appendnew_next_sd_jpxsohmPQY8GE1QJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jpxsohmPQY8GE1QJ');
    }
  }

  sd_n1Xt0bMElt0KuQIn(bh) {
    try {
      const page = this.page;

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

      bh = this.logTable1(bh);
      //appendnew_next_sd_n1Xt0bMElt0KuQIn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n1Xt0bMElt0KuQIn');
    }
  }

  logTable1(bh) {
    try {
      const page = this.page;
      console.log(page.receivedTableData);
      bh = this.table1(bh);
      //appendnew_next_logTable1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QXrXEUJKwp9n6Tng');
    }
  }

  table1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatPaginator: this.MatPaginator,
      });
      bh = this.setTableTokens1(bh);
      //appendnew_next_table1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QnDkX4zxXtB1Nvoq');
    }
  }

  setTableTokens1(bh) {
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
      //appendnew_next_setTableTokens1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OGlFkv3n4vjKymyo');
    }
  }

  async sd_aLNXjBcLPztCW64j(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/new-request');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_aLNXjBcLPztCW64j
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aLNXjBcLPztCW64j');
    }
  }

  sd_mt8Cw5ZGD0NQSUMB(bh) {
    try {
      const page = this.page;
      bh.data = page.receivedTableData['data'].find(
        (obj) => bh.input.selectedRowID == obj._id
      );
      bh.data.isDraft = false;
      bh = this.sd_ESipJh6js5V3RPHV(bh);
      //appendnew_next_sd_mt8Cw5ZGD0NQSUMB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mt8Cw5ZGD0NQSUMB');
    }
  }

  sd_ESipJh6js5V3RPHV(bh) {
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
      return this.errorHandler(bh, e, 'sd_ESipJh6js5V3RPHV');
    }
  }

  sd_RIhDba0Qns6BqrvX(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_KduSl3fVkcg9AJRL(bh);
      //appendnew_next_sd_RIhDba0Qns6BqrvX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RIhDba0Qns6BqrvX');
    }
  }

  sd_KduSl3fVkcg9AJRL(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.event.value,
          'My requests',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Ghb9J59qOpblGVmc(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.event.value,
          'Traveler requests',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_RV9cSmeHI4E5mrTS(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KduSl3fVkcg9AJRL');
    }
  }

  sd_Ghb9J59qOpblGVmc(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint =
        'travelRequests/getTravelRequests?owner=' +
        page.currentUserDetails.email;

      bh = this.sd_Y31N74EOwPJSwSSi(bh);
      //appendnew_next_sd_Ghb9J59qOpblGVmc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ghb9J59qOpblGVmc');
    }
  }

  async sd_Y31N74EOwPJSwSSi(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.receivedTableData = outputVariables.local.result;

      bh = this.logTable1(bh);
      //appendnew_next_sd_Y31N74EOwPJSwSSi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y31N74EOwPJSwSSi');
    }
  }

  sd_RV9cSmeHI4E5mrTS(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      // if (page.currentUserDetails.designation.includes('Travel')) {
      //     bh.endPoint = "travelRequests/getTravelRequests";
      // } else {
      bh.endPoint =
        'travelRequests/getTravelRequests?personalDetails.lineManagerEmail=' +
        page.currentUserDetails.lineManagerEmail;
      bh = this.sd_rXcCYxeJumReEaBA(bh);
      //appendnew_next_sd_RV9cSmeHI4E5mrTS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RV9cSmeHI4E5mrTS');
    }
  }

  async sd_rXcCYxeJumReEaBA(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.receivedTableData = outputVariables.local.result;

      bh = this.logTable1(bh);
      //appendnew_next_sd_rXcCYxeJumReEaBA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rXcCYxeJumReEaBA');
    }
  }

  sd_YQGYIR1ExZCECWq7(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      //appendnew_next_sd_YQGYIR1ExZCECWq7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YQGYIR1ExZCECWq7');
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
  //appendnew_flow_dashboardComponent_Catch
}
