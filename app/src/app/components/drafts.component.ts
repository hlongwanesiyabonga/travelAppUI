/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewChild,
  ViewChildren,
  DoCheck,
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
      this.sd_etiO2DK0VwgEhJPd(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_etiO2DK0VwgEhJPd(bh) {
    try {
      bh = this.tableDataSource(bh);
      //appendnew_next_sd_etiO2DK0VwgEhJPd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_etiO2DK0VwgEhJPd');
    }
  }

  getTravelRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_IrMyJxWmTpDNzUyI(bh);
      //appendnew_next_getTravelRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sm6rj5aD8BjreRHu');
    }
  }

  openViewRequest(selectedRowID: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { selectedRowID: selectedRowID };
      bh.local = {};
      bh = this.sd_rWOKoogr1AdKrW32(bh);
      //appendnew_next_openViewRequest
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vp5oGI1508VqSOh0');
    }
  }

  closeProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WL5ix7y38h5CoFFc(bh);
      //appendnew_next_closeProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_boXVYC1ZRfRLqU1m');
    }
  }

  //appendnew_flow_draftsComponent_start

  tableDataSource(bh) {
    try {
      this.page.tableDataSource = MatTableDataSource;
      bh = this.paginator(bh);
      //appendnew_next_tableDataSource
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5o2VJeahdoBsFCwo');
    }
  }

  paginator(bh) {
    try {
      this.page.paginator = MatPaginator;
      bh = this.sort(bh);
      //appendnew_next_paginator
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q1HNIsgXEaJUqDSs');
    }
  }

  sort(bh) {
    try {
      this.page.sort = MatSort;
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c5S4XlObAEw7dGTC');
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
      bh = this.sd_ReZBx8bKxceaKrVx(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8aUHLOn15SjCTNLX');
    }
  }

  sd_ReZBx8bKxceaKrVx(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint = 'travelRequests/getTravelRequest?type=draft';
      bh = this.sd_jnCisauNCqVEhmqR(bh);
      //appendnew_next_sd_ReZBx8bKxceaKrVx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ReZBx8bKxceaKrVx');
    }
  }

  sd_jnCisauNCqVEhmqR(bh) {
    try {
      let outputVariables = this.getTravelRequests();

      bh = this.sd_nOwahpMteYVDindU(bh);
      //appendnew_next_sd_jnCisauNCqVEhmqR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jnCisauNCqVEhmqR');
    }
  }

  sd_nOwahpMteYVDindU(bh) {
    try {
      const page = this.page; // page.dashboardCards =[
      //     {amount: 15, topText: 'Total', icon : 'description', cssClass: 'blueBg'},
      //     {amount: 6, topText: 'Pending', icon : 'hourglass_full', cssClass: 'orangeBg'},
      //     {amount: 5, topText: 'Approved', icon : 'thumb_up', cssClass: 'greenBg'},
      //     {amount: 4, topText: 'Rejected', icon : 'thumb_down', cssClass: 'redBg'},
      // ];
      //appendnew_next_sd_nOwahpMteYVDindU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nOwahpMteYVDindU');
    }
  }

  sd_IrMyJxWmTpDNzUyI(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_2GFLx5BdaAS4aODV(bh);
      //appendnew_next_sd_IrMyJxWmTpDNzUyI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IrMyJxWmTpDNzUyI');
    }
  }

  sd_2GFLx5BdaAS4aODV(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint = 'getTravelRequestDrafts';
      bh = this.sd_jITV2Ea0aWpdhosP(bh);
      //appendnew_next_sd_2GFLx5BdaAS4aODV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2GFLx5BdaAS4aODV');
    }
  }

  async sd_jITV2Ea0aWpdhosP(bh) {
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
      //appendnew_next_sd_jITV2Ea0aWpdhosP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jITV2Ea0aWpdhosP');
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
      return this.errorHandler(bh, e, 'sd_GWkuvoE9qpRatVlC');
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
      return this.errorHandler(bh, e, 'sd_omruyJd1Ph7noHvw');
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
        let temp = {};
        temp['_id'] = el['_id'];
        temp['dateCreated'] = el['dateCreated'];
        temp['tripType'] = el['requestDetails'][0]['travelDetails']['tripType'];
        temp['travelMode'] =
          el['requestDetails'][0]['travelDetails']['travelMode'];
        temp['fromCity'] = el['requestDetails'][0]['travelDetails']['fromCity'];
        temp['toCity'] = el['requestDetails'][0]['travelDetails']['toCity'];
        tableData.push(temp);
      });

      page.tableData = new page.tableDataSource(tableData);
      page.tableData.paginator = bh.pageViews.MatPaginator;
      page.tableData.sort = bh.pageViews.MatSort;
      //appendnew_next_setTableTokens
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s60c9qBRLfh76DEF');
    }
  }

  sd_rWOKoogr1AdKrW32(bh) {
    try {
      const page = this.page;
      bh.data = page.receivedTableData['data'].find(
        (obj) => bh.input.selectedRowID == obj._id
      );

      bh = this.sd_yCFzIt4RQMz1idDv(bh);
      //appendnew_next_sd_rWOKoogr1AdKrW32
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rWOKoogr1AdKrW32');
    }
  }

  sd_yCFzIt4RQMz1idDv(bh) {
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
      return this.errorHandler(bh, e, 'sd_yCFzIt4RQMz1idDv');
    }
  }

  sd_WL5ix7y38h5CoFFc(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      //appendnew_next_sd_WL5ix7y38h5CoFFc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WL5ix7y38h5CoFFc');
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
