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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { profile_dialogComponent } from './profile_dialog.component'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_3HV1XCEaEUZKREkt(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3HV1XCEaEUZKREkt(bh) {
    try {
      bh = this.sd_LNdL39GYyIoq6rCH(bh);
      //appendnew_next_sd_3HV1XCEaEUZKREkt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3HV1XCEaEUZKREkt');
    }
  }

  openProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_HgVMQjEEW1D9ztdF(bh);
      //appendnew_next_openProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_05SuI1IMdECnbyt2');
    }
  }

  showDashboard(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xGzy2trSSE15PpHY(bh);
      //appendnew_next_showDashboard
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ShPbM5O5r19xsbYU');
    }
  }

  showNewRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FvxyqASGytgzu7eX(bh);
      //appendnew_next_showNewRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f0s3KKyxo580irM6');
    }
  }

  showDrafts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6uQAGNXidCY4Wcy7(bh);
      //appendnew_next_showDrafts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PtFnxYiiWaEFlgyZ');
    }
  }

  showReports(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Lznsj4zhr3mh24Z5(bh);
      //appendnew_next_showReports
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jnoWbaKJr8ucc6gq');
    }
  }

  showLogout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qfMSBbsib142L8rD(bh);
      //appendnew_next_showLogout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dw5RvF9T4BvZVShf');
    }
  }

  openSideNav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_RtFhjIqT7gIBAtnL(bh);
      //appendnew_next_openSideNav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aqApuU8e0v1xPrS0');
    }
  }

  //appendnew_flow_dashboardComponent_start

  sd_LNdL39GYyIoq6rCH(bh) {
    try {
      this.page.dialogWidth = undefined;
      this.page.dialogHeight = undefined;
      this.page.sideNav = false;
      this.page.showDashboard = true;
      this.page.showReports = false;
      this.page.showDrafts = false;
      this.page.showNewRequests = false;
      this.page.showLogout = false;
      this.page.method = undefined;
      this.page.body = undefined;
      this.page.endPoint = undefined;
      this.page.personalDetails = {};
      //appendnew_next_sd_LNdL39GYyIoq6rCH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LNdL39GYyIoq6rCH');
    }
  }

  sd_HgVMQjEEW1D9ztdF(bh) {
    try {
      const profile_dialogDialog = this.__page_injector__.get(MatDialog);
      const profile_dialogDialogRef = profile_dialogDialog.open(
        profile_dialogComponent,
        { minHeight: '85vh', minWidth: '85vw', panelClass: this.page.scroll }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HgVMQjEEW1D9ztdF');
    }
  }

  sd_xGzy2trSSE15PpHY(bh) {
    try {
      const page = this.page;
      page.showDashboard = true;
      page.showReports = false;
      page.showDrafts = false;
      page.showNewRequests = false;
      page.showLogout = false;

      //appendnew_next_sd_xGzy2trSSE15PpHY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xGzy2trSSE15PpHY');
    }
  }

  sd_FvxyqASGytgzu7eX(bh) {
    try {
      const page = this.page;
      page.showNewRequests = true;
      page.showReports = false;
      page.showDrafts = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_FvxyqASGytgzu7eX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FvxyqASGytgzu7eX');
    }
  }

  sd_6uQAGNXidCY4Wcy7(bh) {
    try {
      const page = this.page;
      page.showDrafts = true;
      page.showReports = false;
      page.showNewRequests = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_6uQAGNXidCY4Wcy7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6uQAGNXidCY4Wcy7');
    }
  }

  sd_Lznsj4zhr3mh24Z5(bh) {
    try {
      const page = this.page;
      page.showReports = true;
      page.showNewRequests = false;
      page.showDrafts = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_Lznsj4zhr3mh24Z5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lznsj4zhr3mh24Z5');
    }
  }

  async sd_qfMSBbsib142L8rD(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_qfMSBbsib142L8rD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qfMSBbsib142L8rD');
    }
  }

  sd_RtFhjIqT7gIBAtnL(bh) {
    try {
      const page = this.page;
      page.sideNav = true;
      //appendnew_next_sd_RtFhjIqT7gIBAtnL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RtFhjIqT7gIBAtnL');
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
