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
import { CommonModule, DatePipe } from '@angular/common'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { travelRequestDialogComponent } from './travelRequestDialog.component'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-reports',
  templateUrl: './reports.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class reportsComponent {
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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_HAo5i01vVffZy4Ob(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_HAo5i01vVffZy4Ob(bh) {
    try {
      bh = this.sd_mwKkao0Y1FGTikw6(bh);
      bh = this.sd_XBj2unZpeIqMMK71(bh);
      //appendnew_next_sd_HAo5i01vVffZy4Ob
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HAo5i01vVffZy4Ob');
    }
  }

  getTravelRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_UHTJacxbargWdqTY(bh);
      //appendnew_next_getTravelRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CTb7KsUxkGDH5GXT');
    }
  }

  openViewRequest(selectedRowID: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { selectedRowID: selectedRowID };
      bh.local = {};
      bh = this.sd_BKlIakA3DrLARlKx(bh);
      //appendnew_next_openViewRequest
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pnjT101aGZwUNr2K');
    }
  }

  closeProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9Cotv2PI80qwbnz4(bh);
      //appendnew_next_closeProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cy5FmQKRwomCg04N');
    }
  }

  submitForm(profileForm: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { profileForm: profileForm };
      bh.local = {};
      bh = this.sd_O9ZIQdJ8BXVWkzID(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UQCRowp3s8jfK4DG');
    }
  }

  filterMethod(filterValue: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterValue: filterValue };
      bh.local = {};
      bh = this.sd_FinTz18ACLPA798z(bh);
      //appendnew_next_filterMethod
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wzqldP9SkF7V5w5h');
    }
  }

  selectFilter(filterValue: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterValue: filterValue };
      bh.local = {};
      bh = this.sd_FinTz18ACLPA798z(bh);
      //appendnew_next_selectFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_acOumuX3RFYOdjZi');
    }
  }

  //appendnew_flow_reportsComponent_start

  sd_mwKkao0Y1FGTikw6(bh) {
    try {
      bh = this.sd_tsi8P82xnxccosi9(bh);
      //appendnew_next_sd_mwKkao0Y1FGTikw6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mwKkao0Y1FGTikw6');
    }
  }

  sd_tsi8P82xnxccosi9(bh) {
    try {
      bh = this.tableDataSource(bh);
      //appendnew_next_sd_tsi8P82xnxccosi9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tsi8P82xnxccosi9');
    }
  }

  tableDataSource(bh) {
    try {
      this.page.tableDataSource = MatTableDataSource;
      bh = this.paginator(bh);
      //appendnew_next_tableDataSource
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JdhvcRlCLyPVzz7B');
    }
  }

  paginator(bh) {
    try {
      this.page.paginator = MatPaginator;
      bh = this.sort(bh);
      //appendnew_next_paginator
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8mejlNDxl4ZYkpXW');
    }
  }

  sort(bh) {
    try {
      this.page.sort = MatSort;
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SY5RXwhqAOJ5sKnJ');
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
      this.page.status = [];
      this.page.statusArr = [];
      this.page.currentUser = undefined;
      this.page.generateDate = undefined;
      bh = this.sd_OTZFXvpvhZcIAwik(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HzxAj9cY9Xt7kaO2');
    }
  }

  sd_OTZFXvpvhZcIAwik(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      // bh.endPoint = "getTravelRequestDrafts"
      bh.endPoint =
        'travelRequests/getTravelRequest?owner=' +
        page.currentUserDetails.owner;

      // page.currentUser = sessionStorage.getItem("currentUserDetails")
      // console.log("Current :",page.currentUser)
      page.generateDate = new Date();
      bh = this.sd_jRsUIykBGOcQBuus(bh);
      //appendnew_next_sd_OTZFXvpvhZcIAwik
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OTZFXvpvhZcIAwik');
    }
  }

  sd_jRsUIykBGOcQBuus(bh) {
    try {
      this.page.currentUser = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_MHUz3Qh1c6CJoDiG(bh);
      //appendnew_next_sd_jRsUIykBGOcQBuus
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jRsUIykBGOcQBuus');
    }
  }

  sd_MHUz3Qh1c6CJoDiG(bh) {
    try {
      let outputVariables = this.getTravelRequests();

      //appendnew_next_sd_MHUz3Qh1c6CJoDiG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MHUz3Qh1c6CJoDiG');
    }
  }

  sd_XBj2unZpeIqMMK71(bh) {
    try {
      const page = this.page;
      page.pieChartData = [
        {
          data: [300, 500, 100],
        },
      ];

      page.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];

      page.pieChartOptions = {
        responsive: true,
      };
      page.travelAppColors = [
        {
          // all colors in order
          backgroundColor: ['', '#ec1c24'],
        },
      ];
      //appendnew_next_sd_XBj2unZpeIqMMK71
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XBj2unZpeIqMMK71');
    }
  }

  sd_UHTJacxbargWdqTY(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_mobGlhGVbgNDWZqD(bh);
      //appendnew_next_sd_UHTJacxbargWdqTY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UHTJacxbargWdqTY');
    }
  }

  sd_mobGlhGVbgNDWZqD(bh) {
    try {
      const page = this.page;
      console.log(page.currentUserDetails, 'deatisl');

      bh.method = 'get';
      bh.endPoint = 'travelRequests/getTravelRequests';
      bh = this.sd_gHDMnUQ9Hx5K71XR(bh);
      //appendnew_next_sd_mobGlhGVbgNDWZqD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mobGlhGVbgNDWZqD');
    }
  }

  async sd_gHDMnUQ9Hx5K71XR(bh) {
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
      //appendnew_next_sd_gHDMnUQ9Hx5K71XR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gHDMnUQ9Hx5K71XR');
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
      return this.errorHandler(bh, e, 'sd_ZyBdAdnflV6Y2vlU');
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
      return this.errorHandler(bh, e, 'sd_gUxdZKc9lVIHucJA');
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
      page.receivedTableData['data'].forEach(
        (el) => {
          // if(el.status == 'Approved'){
          page.status.includes(el['status'])
            ? ''
            : page.status.push(el['status']);
          let temp = {};
          temp['_id'] = el['_id'];
          temp['owner'] = el['owner'];
          temp['status'] = el['status'];
          temp['dateCreated'] = el['dateCreated'];
          temp['tripType'] =
            el['requestDetails'][0]['travelDetails']['tripType'];
          temp['travelMode'] =
            el['requestDetails'][0]['travelDetails']['travelMode'];
          temp['fromCity'] =
            el['requestDetails'][0]['travelDetails']['fromCity'];
          temp['toCity'] = el['requestDetails'][0]['travelDetails']['toCity'];
          tableData.push(temp);
          console.log('Data ID :', page.receivedTableData['owner']);
        }

        // }
      );

      page.tableData = new page.tableDataSource(tableData);
      page.tableData.paginator = bh.pageViews.MatPaginator;
      page.tableData.sort = bh.pageViews.MatSort;
      bh = this.sd_hYKwZk9NkjY710mr(bh);
      //appendnew_next_setTableTokens
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ppOXKs41qw7ZEgHb');
    }
  }

  sd_hYKwZk9NkjY710mr(bh) {
    try {
      const page = this.page;
      let dataSet = [];
      page.status.forEach((item) => {
        page.receivedTableData['data'].forEach((obj) => {
          if (obj.status == item) {
            page.statusArr.push(item);
          }
        });
      });

      const count_substr = (str, searchValue) => {
        let count = 0,
          i = 0;
        while (true) {
          const r = str.indexOf(searchValue, i);
          if (r !== -1) [count, i] = [count + 1, r + 1];
          else return count;
        }
      };
      page.status.forEach((item) => {
        let currentCount = count_substr(page.statusArr, item);
        dataSet.push(currentCount);
      });
      console.log(page.statusArr);

      page.pieChartData = [
        {
          data: dataSet,
        },
      ];

      page.pieChartLabels = page.status;

      page.pieChartOptions = {
        responsive: true,
      };
      page.travelAppColors = [
        {
          // all colors in order
          backgroundColor: ['', '#ec1c24'],
        },
      ];
      //appendnew_next_sd_hYKwZk9NkjY710mr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hYKwZk9NkjY710mr');
    }
  }

  sd_BKlIakA3DrLARlKx(bh) {
    try {
      const page = this.page;
      bh.data = page.receivedTableData['data'].find(
        (obj) => bh.input.selectedRowID == obj._id
      );
      bh.data.isDraft = true;

      bh = this.sd_uGGS7U1Gep1O3rt5(bh);
      //appendnew_next_sd_BKlIakA3DrLARlKx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BKlIakA3DrLARlKx');
    }
  }

  sd_uGGS7U1Gep1O3rt5(bh) {
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
      return this.errorHandler(bh, e, 'sd_uGGS7U1Gep1O3rt5');
    }
  }

  sd_9Cotv2PI80qwbnz4(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      //appendnew_next_sd_9Cotv2PI80qwbnz4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Cotv2PI80qwbnz4');
    }
  }

  sd_O9ZIQdJ8BXVWkzID(bh) {
    try {
      const page = this.page;
      (bh.method = 'put'),
        (bh.endPoint = '/updateTravelRequest/draft' + page.personalDetails._id);

      //appendnew_next_sd_O9ZIQdJ8BXVWkzID
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O9ZIQdJ8BXVWkzID');
    }
  }

  sd_FinTz18ACLPA798z(bh) {
    try {
      const page = this.page;
      if (bh.input.filterValue?.value) {
        page.tableData.filter = bh.input.filterValue.value.trim().toLowerCase();
      } else if (bh.input.filterValue.target.value) {
        page.tableData.filter = bh.input.filterValue.target.value
          .trim()
          .toLowerCase();
      }
      //appendnew_next_sd_FinTz18ACLPA798z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FinTz18ACLPA798z');
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
  //appendnew_flow_reportsComponent_Catch
}
