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
      this.sd_TahZbWB9UXDe7mTX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_TahZbWB9UXDe7mTX(bh) {
    try {
      bh = this.sd_EQGray9KihxOw9eC(bh);
      //appendnew_next_sd_TahZbWB9UXDe7mTX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TahZbWB9UXDe7mTX');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_nS6cYefZcGYhZLU6(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_arRLhH4cWjTYYjBi');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_EQGray9KihxOw9eC(bh) {
    try {
      this.page.userCreds = undefined;
      bh = this.sd_fQmSS8tLHWYTtmlP(bh);
      //appendnew_next_sd_EQGray9KihxOw9eC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EQGray9KihxOw9eC');
    }
  }

  sd_fQmSS8tLHWYTtmlP(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_8Rc6Gx7d6Tln9Ryq(bh);
      //appendnew_next_sd_fQmSS8tLHWYTtmlP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fQmSS8tLHWYTtmlP');
    }
  }

  sd_8Rc6Gx7d6Tln9Ryq(bh) {
    try {
      const page = this.page;
      page.loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        rememberMe: new FormControl(''),
      });

      //appendnew_next_sd_8Rc6Gx7d6Tln9Ryq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Rc6Gx7d6Tln9Ryq');
    }
  }

  sd_nS6cYefZcGYhZLU6(bh) {
    try {
      const page = this.page;
      page.userCreds = page.loginForm.value;
      bh.method = 'get';
      bh.endPoint = `login?username=${page.userCreds.username}&password=${page.userCreds.password}`;
      bh = this.sd_NUyqm7sXSDT7Mxn8(bh);
      //appendnew_next_sd_nS6cYefZcGYhZLU6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nS6cYefZcGYhZLU6');
    }
  }

  async sd_NUyqm7sXSDT7Mxn8(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      bh.response = outputVariables.local.result;

      bh = this.sd_89gHBSYfG69ZEQnl(bh);
      //appendnew_next_sd_NUyqm7sXSDT7Mxn8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NUyqm7sXSDT7Mxn8');
    }
  }

  sd_89gHBSYfG69ZEQnl(bh) {
    try {
      const page = this.page;
      console.log(bh.response);
      bh = this.sd_OMFHt7hKcpPI1tpH(bh);
      //appendnew_next_sd_89gHBSYfG69ZEQnl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_89gHBSYfG69ZEQnl');
    }
  }

  async sd_OMFHt7hKcpPI1tpH(bh) {
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
        bh = this.sd_C9fZg486Y9QglPMG(bh);
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
        bh = await this.sd_og1sc73KuT5Q5PtJ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OMFHt7hKcpPI1tpH');
    }
  }

  sd_C9fZg486Y9QglPMG(bh) {
    try {
      const page = this.page;
      bh.method = 'get';
      bh.endPoint = `genericGet/getPersonalDetails?email=${page.userCreds.username}`;
      bh.msg = 'Logged in successfully';
      bh = this.sd_BfLgEsk0rU7kxBP9(bh);
      bh = this.sd_7pJNvcZRRdRuMvXH(bh);
      //appendnew_next_sd_C9fZg486Y9QglPMG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C9fZg486Y9QglPMG');
    }
  }

  sd_BfLgEsk0rU7kxBP9(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.msg, 'Dismiss', {
        duration: 2500,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_BfLgEsk0rU7kxBP9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BfLgEsk0rU7kxBP9');
    }
  }

  async sd_7pJNvcZRRdRuMvXH(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      bh.local.response = outputVariables.local.result;

      bh = this.sd_icEjpnoC8D5oXEcL(bh);
      //appendnew_next_sd_7pJNvcZRRdRuMvXH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7pJNvcZRRdRuMvXH');
    }
  }

  sd_icEjpnoC8D5oXEcL(bh) {
    try {
      const page = this.page;
      console.log(bh.local.response, 'yyy');
      // bh.local.response = bh.local.response[0]
      bh = this.sd_UPp1ycwAW0SwTrgX(bh);
      //appendnew_next_sd_icEjpnoC8D5oXEcL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_icEjpnoC8D5oXEcL');
    }
  }

  sd_UPp1ycwAW0SwTrgX(bh) {
    try {
      sessionStorage.setItem(
        'currentUserDetails',
        JSON.stringify(bh.local.response)
      );
      bh = this.sd_2abhcHyWSuiruSZX(bh);
      //appendnew_next_sd_UPp1ycwAW0SwTrgX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UPp1ycwAW0SwTrgX');
    }
  }

  async sd_2abhcHyWSuiruSZX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/new-request');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_2abhcHyWSuiruSZX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2abhcHyWSuiruSZX');
    }
  }

  sd_og1sc73KuT5Q5PtJ(bh) {
    try {
      const page = this.page;
      bh.msg = 'Invalid Credentials';
      bh = this.sd_BfLgEsk0rU7kxBP9(bh);
      //appendnew_next_sd_og1sc73KuT5Q5PtJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_og1sc73KuT5Q5PtJ');
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
