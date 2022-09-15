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

  //appendnew_flow_baseComponent_start

  sd_nrTQrGEzRLT39o1H(bh) {
    try {
      this.page.dialogWidth = undefined;
      this.page.dialogHeight = undefined;
      this.page.sideNav = false;
      //appendnew_next_sd_nrTQrGEzRLT39o1H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nrTQrGEzRLT39o1H');
    }
  }

  sd_NtXl4H7miZSfSkAz(bh) {
    try {
      const profile_dialogDialog = this.__page_injector__.get(MatDialog);
      const profile_dialogDialogRef = profile_dialogDialog.open(
        profile_dialogComponent,
        { minHeight: '85vh', minWidth: '85vw' }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NtXl4H7miZSfSkAz');
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
