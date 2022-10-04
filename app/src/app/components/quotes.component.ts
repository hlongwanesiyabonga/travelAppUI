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
//append_imports_end

@Component({
  selector: 'bh-quotes',
  templateUrl: './quotes.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class quotesComponent {
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
      this.sd_jrqtC7jWKIgXD5Oi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jrqtC7jWKIgXD5Oi(bh) {
    try {
      bh = this.sd_tKSvaxJSWUNG5312(bh);
      //appendnew_next_sd_jrqtC7jWKIgXD5Oi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jrqtC7jWKIgXD5Oi');
    }
  }

  //appendnew_flow_quotesComponent_start

  sd_tKSvaxJSWUNG5312(bh) {
    try {
      //appendnew_next_sd_tKSvaxJSWUNG5312
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tKSvaxJSWUNG5312');
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
  //appendnew_flow_quotesComponent_Catch
}
