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
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
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
      this.sd_uagTUGBRBnZulUoo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uagTUGBRBnZulUoo(bh) {
    try {
      bh = this.sd_nn89xCoGyXPPaqRU(bh);
      //appendnew_next_sd_uagTUGBRBnZulUoo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uagTUGBRBnZulUoo');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OSzkVS28qZ1RYwKe(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zmp0pc5HmDOnfEvU');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_nn89xCoGyXPPaqRU(bh) {
    try {
      this.page.userCreds = undefined;
      bh = this.sd_sijM6NTNrgGgQ8Lh(bh);
      //appendnew_next_sd_nn89xCoGyXPPaqRU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nn89xCoGyXPPaqRU');
    }
  }

  sd_sijM6NTNrgGgQ8Lh(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_OQZQxEs6F65jk5jr(bh);
      //appendnew_next_sd_sijM6NTNrgGgQ8Lh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sijM6NTNrgGgQ8Lh');
    }
  }

  sd_OQZQxEs6F65jk5jr(bh) {
    try {
      const page = this.page;
      page.loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        rememberMe: new FormControl(''),
      });

      //appendnew_next_sd_OQZQxEs6F65jk5jr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OQZQxEs6F65jk5jr');
    }
  }

  sd_OSzkVS28qZ1RYwKe(bh) {
    try {
      const page = this.page;
      page.userCreds = page.loginForm.value;
      bh.method = 'get';
      bh.endPoint = `login?username=${page.userCreds.username}&password=${page.userCreds.password}`;

      // bh.endPoint = "login?username=" + page.userCreds.username + "&password=" + page.userCreds.password

      bh = this.sd_WG9jgVUhLDb5Wz3S(bh);
      //appendnew_next_sd_OSzkVS28qZ1RYwKe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OSzkVS28qZ1RYwKe');
    }
  }

  async sd_WG9jgVUhLDb5Wz3S(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      bh.response = outputVariables.local.result;

      bh = this.sd_T0bSMd8MVkuNVyZ3(bh);
      //appendnew_next_sd_WG9jgVUhLDb5Wz3S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WG9jgVUhLDb5Wz3S');
    }
  }

  async sd_T0bSMd8MVkuNVyZ3(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          bh.response.user,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2RfY3hkr8C5FDXhv(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QFOnt0vPUE2m5i3b(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T0bSMd8MVkuNVyZ3');
    }
  }

  sd_2RfY3hkr8C5FDXhv(bh) {
    try {
      const page = this.page;
      bh.currentUser = bh.local.response;
      bh = this.sd_4PQVE60xCfHXusHC(bh);
      bh = this.sd_fXMKQHS7GRdVpM5L(bh);
      //appendnew_next_sd_2RfY3hkr8C5FDXhv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2RfY3hkr8C5FDXhv');
    }
  }

  sd_4PQVE60xCfHXusHC(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.response.msg, 'Dismiss', {
        duration: 2500,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_4PQVE60xCfHXusHC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4PQVE60xCfHXusHC');
    }
  }

  sd_fXMKQHS7GRdVpM5L(bh) {
    try {
      sessionStorage.setItem(
        'currentUserDetails',
        JSON.stringify(bh.response.user)
      );
      bh = this.sd_L5IHBMJeis0D14Is(bh);
      //appendnew_next_sd_fXMKQHS7GRdVpM5L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fXMKQHS7GRdVpM5L');
    }
  }

  async sd_L5IHBMJeis0D14Is(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_L5IHBMJeis0D14Is
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L5IHBMJeis0D14Is');
    }
  }

  sd_QFOnt0vPUE2m5i3b(bh) {
    try {
      const page = this.page;
      bh.msg = 'Invalid Credentials';
      bh = this.sd_4PQVE60xCfHXusHC(bh);
      //appendnew_next_sd_QFOnt0vPUE2m5i3b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QFOnt0vPUE2m5i3b');
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
