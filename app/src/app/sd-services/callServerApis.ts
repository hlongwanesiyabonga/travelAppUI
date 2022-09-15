/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class callServerApis {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_callServerApis

  async dynamic(
    endPoint: any = undefined,
    method: any = undefined,
    body: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          endPoint: endPoint,
          method: method,
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_uFfzVvBAauUEjRTo(bh);
      //appendnew_next_dynamic
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_alQ4JDGbxbp70Zlt');
    }
  }

  //appendnew_flow_callServerApis_start

  async sd_uFfzVvBAauUEjRTo(bh) {
    try {
      bh.apiUrl = 'http://localhost:8081/api/' + bh.input.endPoint;
      console.log('body', bh.input);
      //appendnew_next_sd_uFfzVvBAauUEjRTo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uFfzVvBAauUEjRTo');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_callServerApis_Catch
}
