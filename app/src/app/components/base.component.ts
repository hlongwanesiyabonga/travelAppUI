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
      this.sd_s96BsUcZMJ63gXNh(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_s96BsUcZMJ63gXNh(bh) {
    try {
      bh = this.sd_qkPRetutvSxANjfB(bh);
      //appendnew_next_sd_s96BsUcZMJ63gXNh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s96BsUcZMJ63gXNh');
    }
  }

  openProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_zsFN2AXhnZeooTBl(bh);
      //appendnew_next_openProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ihZpKobXOgFCHTgq');
    }
  }

  showDashboard(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OMPn9ue3g8Gtd3my(bh);
      //appendnew_next_showDashboard
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DReuiw3ZTOg2SZwi');
    }
  }

  showNewRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TtxNqag23ApR1jbJ(bh);
      //appendnew_next_showNewRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s5mglsscJoCQ6NIJ');
    }
  }

  showDrafts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_S086vNBfsH7Chcho(bh);
      //appendnew_next_showDrafts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4dItFICpizQM3t9d');
    }
  }

  showReports(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_CS8WVzwh41E069Jl(bh);
      //appendnew_next_showReports
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2kxG6r4rjAGFI6S6');
    }
  }

  showLogout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PkNYcngV9ZR0ohro(bh);
      //appendnew_next_showLogout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WGXwMXIeyHJetAmp');
    }
  }

  openSideNav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FeSzR7h7gKGSnztQ(bh);
      //appendnew_next_openSideNav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gOyaG1LDq6dNcqY4');
    }
  }

  //appendnew_flow_baseComponent_start

  sd_qkPRetutvSxANjfB(bh) {
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
      bh = this.sd_RnOYjIQ1cmPEuhLI(bh);
      //appendnew_next_sd_qkPRetutvSxANjfB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qkPRetutvSxANjfB');
    }
  }

  sd_RnOYjIQ1cmPEuhLI(bh) {
    try {
      this.page.personalDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      //appendnew_next_sd_RnOYjIQ1cmPEuhLI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RnOYjIQ1cmPEuhLI');
    }
  }

  sd_zsFN2AXhnZeooTBl(bh) {
    try {
      const profile_dialogDialog = this.__page_injector__.get(MatDialog);
      const profile_dialogDialogRef = profile_dialogDialog.open(
        profile_dialogComponent,
        { minHeight: '85vh', minWidth: '85vw', panelClass: this.page.scroll }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zsFN2AXhnZeooTBl');
    }
  }

  sd_OMPn9ue3g8Gtd3my(bh) {
    try {
      const page = this.page;
      page.showDashboard = true;
      page.showReports = false;
      page.showDrafts = false;
      page.showNewRequests = false;
      page.showLogout = false;

      //appendnew_next_sd_OMPn9ue3g8Gtd3my
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OMPn9ue3g8Gtd3my');
    }
  }

  sd_TtxNqag23ApR1jbJ(bh) {
    try {
      const page = this.page;
      page.showNewRequests = true;
      page.showReports = false;
      page.showDrafts = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_TtxNqag23ApR1jbJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TtxNqag23ApR1jbJ');
    }
  }

  sd_S086vNBfsH7Chcho(bh) {
    try {
      const page = this.page;
      page.showDrafts = true;
      page.showReports = false;
      page.showNewRequests = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_S086vNBfsH7Chcho
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S086vNBfsH7Chcho');
    }
  }

  sd_CS8WVzwh41E069Jl(bh) {
    try {
      const page = this.page;
      page.showReports = true;
      page.showNewRequests = false;
      page.showDrafts = false;
      page.showDashboard = false;
      page.showLogout = false;
      //appendnew_next_sd_CS8WVzwh41E069Jl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CS8WVzwh41E069Jl');
    }
  }

  async sd_PkNYcngV9ZR0ohro(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_PkNYcngV9ZR0ohro
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PkNYcngV9ZR0ohro');
    }
  }

  sd_FeSzR7h7gKGSnztQ(bh) {
    try {
      const page = this.page;
      page.sideNav = true;
      //appendnew_next_sd_FeSzR7h7gKGSnztQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FeSzR7h7gKGSnztQ');
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
