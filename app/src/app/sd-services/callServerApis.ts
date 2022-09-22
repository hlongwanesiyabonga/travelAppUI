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

  async storePersonalDetails(
    data: any = undefined,
    key: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          data: data,
          key: key,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_uFTNqoeQxuwdpbDd(bh);
      //appendnew_next_storePersonalDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Yi9MXSZoEVL34c9W');
    }
  }

  async getPersonalDetails(key: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          key: key,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_XyWiOPpTHTKW5h1m(bh);
      //appendnew_next_getPersonalDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jY4xXM440T9ImYCs');
    }
  }

  //appendnew_flow_callServerApis_start

  async sd_uFfzVvBAauUEjRTo(bh) {
    try {
      bh.apiUrl = 'http://localhost:8081/api/' + bh.input.endPoint;

      bh = await this.sd_hUBaFoLrD4z6GgAt(bh);
      //appendnew_next_sd_uFfzVvBAauUEjRTo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uFfzVvBAauUEjRTo');
    }
  }

  async sd_hUBaFoLrD4z6GgAt(bh) {
    try {
      let requestOptions = {
        url: bh.apiUrl,
        method: bh.input.method,
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_hUBaFoLrD4z6GgAt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hUBaFoLrD4z6GgAt');
    }
  }

  async sd_uFTNqoeQxuwdpbDd(bh) {
    try {
      sessionStorage.setItem(bh.input.key, JSON.stringify(bh.input.data));
      //appendnew_next_sd_uFTNqoeQxuwdpbDd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uFTNqoeQxuwdpbDd');
    }
  }

  async sd_XyWiOPpTHTKW5h1m(bh) {
    try {
      bh.local.requesterDetails = JSON.parse(
        sessionStorage.getItem(bh.input.key)
      );
      //appendnew_next_sd_XyWiOPpTHTKW5h1m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XyWiOPpTHTKW5h1m');
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
