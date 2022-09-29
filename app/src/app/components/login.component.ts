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
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_CA0pwhy3lCDuuaVK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_CA0pwhy3lCDuuaVK(bh) {
    try {
      bh = this.sd_vD8ov3liDUFpn56q(bh);
      //appendnew_next_sd_CA0pwhy3lCDuuaVK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CA0pwhy3lCDuuaVK');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_vD8ov3liDUFpn56q(bh) {
    try {
      bh = this.sd_WZK03MsWEHkvd9EO(bh);
      //appendnew_next_sd_vD8ov3liDUFpn56q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vD8ov3liDUFpn56q');
    }
  }

  sd_WZK03MsWEHkvd9EO(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_VEhD6JA5MviEUTK7(bh);
      //appendnew_next_sd_WZK03MsWEHkvd9EO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WZK03MsWEHkvd9EO');
    }
  }

  sd_VEhD6JA5MviEUTK7(bh) {
    try {
      const page = this.page;
      page.loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        rememberMe: new FormControl(''),
      });

      //appendnew_next_sd_VEhD6JA5MviEUTK7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VEhD6JA5MviEUTK7');
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
  //appendnew_flow_loginComponent_Catch
}
