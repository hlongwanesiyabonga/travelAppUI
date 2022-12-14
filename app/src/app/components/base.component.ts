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
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { profile_dialogComponent } from './profile_dialog.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-base',
  templateUrl: './base.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class baseComponent {
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
      this.sd_iQnDnGsKh3QUvuuo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iQnDnGsKh3QUvuuo(bh) {
    try {
      bh = this.sd_nrTQrGEzRLT39o1H(bh);
      //appendnew_next_sd_iQnDnGsKh3QUvuuo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iQnDnGsKh3QUvuuo');
    }
  }

  openProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NtXl4H7miZSfSkAz(bh);
      //appendnew_next_openProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C5MkKFqUM97bJ9eO');
    }
  }

  showDashboard(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_pTekq9v8lzFG0mju(bh);
      //appendnew_next_showDashboard
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a5s53L3rtVWyPezi');
    }
  }

  showNewRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KVlNAJ6NtuO27Mha(bh);
      //appendnew_next_showNewRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_79sAUr1hPTnu0CV0');
    }
  }

  showDrafts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_bo8G9H0I7TNYxzAR(bh);
      //appendnew_next_showDrafts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C7U6I28HfK0hKDmD');
    }
  }

  showReports(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4Y6EVejP40Y0iuRl(bh);
      //appendnew_next_showReports
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KmIJ1rBCeuFcOsJd');
    }
  }

  showLogout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4tj3WGNebkyyBzpN(bh);
      //appendnew_next_showLogout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BRtIOMg7bjEnUQdA');
    }
  }

  openSideNav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gT8hRhNopvoRlRwC(bh);
      //appendnew_next_openSideNav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bBI3haJHdgSgCxGE');
    }
  }

  storePersonalDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_d19JDsdecgfUp9PQ(bh);
      //appendnew_next_storePersonalDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gJou2q5G1yg8OEfv');
    }
  }

  //appendnew_flow_baseComponent_start

  sd_nrTQrGEzRLT39o1H(bh) {
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
      bh = this.sd_omtxhHSTT0bkCN7b(bh);
      //appendnew_next_sd_nrTQrGEzRLT39o1H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nrTQrGEzRLT39o1H');
    }
  }

  sd_omtxhHSTT0bkCN7b(bh) {
    try {
      const page = this.page;
      page.email = 'neutrinostravellm@gmail.com';
      (bh.method = 'get'),
        (bh.endPoint = 'genericGet/getPersonalDetails?email=' + page.email);

      bh = this.sd_Ld8Z0R56kFnzLxOy(bh);
      //appendnew_next_sd_omtxhHSTT0bkCN7b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_omtxhHSTT0bkCN7b');
    }
  }

  async sd_Ld8Z0R56kFnzLxOy(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.personalDetails = outputVariables.local.result;

      bh = this.sd_Xuc0VNU6iF0UqpDu(bh);
      //appendnew_next_sd_Ld8Z0R56kFnzLxOy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ld8Z0R56kFnzLxOy');
    }
  }

  sd_Xuc0VNU6iF0UqpDu(bh) {
    try {
      bh = this.sd_ti9tbxXUHmz0mETK(bh);
      //appendnew_next_sd_Xuc0VNU6iF0UqpDu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xuc0VNU6iF0UqpDu');
    }
  }

  sd_ti9tbxXUHmz0mETK(bh) {
    try {
      let outputVariables = this.storePersonalDetails();

      bh = this.sd_Uq7EpfeVgT8CmNMt(bh);
      //appendnew_next_sd_ti9tbxXUHmz0mETK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ti9tbxXUHmz0mETK');
    }
  }

  sd_Uq7EpfeVgT8CmNMt(bh) {
    try {
      this.page.personalDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      //appendnew_next_sd_Uq7EpfeVgT8CmNMt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Uq7EpfeVgT8CmNMt');
    }
  }

  sd_NtXl4H7miZSfSkAz(bh) {
    try {
      const profile_dialogDialog = this.__page_injector__.get(MatDialog);
      const profile_dialogDialogRef = profile_dialogDialog.open(
        profile_dialogComponent,
        { minHeight: '85vh', minWidth: '85vw', panelClass: this.page.scroll }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NtXl4H7miZSfSkAz');
    }
  }

  sd_pTekq9v8lzFG0mju(bh) {
    try {
      const page = this.page;
      page.showDashboard = true;
      page.showReports = false;
      page.showDrafts = false;
      page.showNewRequests = false;
      page.showLogout = false;

      //appendnew_next_sd_pTekq9v8lzFG0mju
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pTekq9v8lzFG0mju');
    }
  }

  sd_KVlNAJ6NtuO27Mha(bh) {
    try {
      const page = this.page;
      page.showNewRequests = true;
      page.showReports = false;
      page.showDrafts = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_KVlNAJ6NtuO27Mha
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KVlNAJ6NtuO27Mha');
    }
  }

  sd_bo8G9H0I7TNYxzAR(bh) {
    try {
      const page = this.page;
      page.showDrafts = true;
      page.showReports = false;
      page.showNewRequests = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_bo8G9H0I7TNYxzAR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bo8G9H0I7TNYxzAR');
    }
  }

  sd_4Y6EVejP40Y0iuRl(bh) {
    try {
      const page = this.page;
      page.showReports = true;
      page.showNewRequests = false;
      page.showDrafts = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_4Y6EVejP40Y0iuRl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Y6EVejP40Y0iuRl');
    }
  }

  sd_4tj3WGNebkyyBzpN(bh) {
    try {
      const page = this.page;
      page.showLogout = true;
      page.showNewRequests = false;
      page.showReports = false;
      page.showDrafts = false;
      page.showDashboard = false;
      //appendnew_next_sd_4tj3WGNebkyyBzpN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4tj3WGNebkyyBzpN');
    }
  }

  sd_gT8hRhNopvoRlRwC(bh) {
    try {
      const page = this.page;
      page.sideNav = true;
      //appendnew_next_sd_gT8hRhNopvoRlRwC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gT8hRhNopvoRlRwC');
    }
  }

  sd_d19JDsdecgfUp9PQ(bh) {
    try {
      const page = this.page;
      bh.key = 'currentUserDetails';
      bh.data = page.personalDetails;
      bh = this.sd_ofK1VwHBpVgur1kM(bh);
      //appendnew_next_sd_d19JDsdecgfUp9PQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d19JDsdecgfUp9PQ');
    }
  }

  async sd_ofK1VwHBpVgur1kM(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.storePersonalDetails(
        bh.data,
        bh.key
      );

      //appendnew_next_sd_ofK1VwHBpVgur1kM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ofK1VwHBpVgur1kM');
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
  //appendnew_flow_baseComponent_Catch
}
