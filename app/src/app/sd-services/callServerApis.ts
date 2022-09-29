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
      bh = await this.sd_dE4GdWM4FRmapn3w(bh);
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
      return await this.errorHandler(bh, e, 'sd_nCumUxwkMp8Q3Kjk');
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
      bh = await this.sd_cpfqAXUI8mpg10vu(bh);
      //appendnew_next_storePersonalDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H1HRJOfPiTCQOdx4');
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
      bh = await this.sd_tl2FJAjSl7kCsqBg(bh);
      //appendnew_next_getPersonalDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KBSaykl043duXTHo');
    }
  }

  //appendnew_flow_callServerApis_start

  async sd_dE4GdWM4FRmapn3w(bh) {
    try {
      bh.apiUrl = 'http://localhost:8081/api/' + bh.input.endPoint;
      console.log(bh.input);
      bh = await this.sd_qPFG6hUqIEWEDu4a(bh);
      //appendnew_next_sd_dE4GdWM4FRmapn3w
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dE4GdWM4FRmapn3w');
    }
  }

  async sd_qPFG6hUqIEWEDu4a(bh) {
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
      //appendnew_next_sd_qPFG6hUqIEWEDu4a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qPFG6hUqIEWEDu4a');
    }
  }

  async sd_cpfqAXUI8mpg10vu(bh) {
    try {
      sessionStorage.setItem(bh.input.key, JSON.stringify(bh.input.data));
      //appendnew_next_sd_cpfqAXUI8mpg10vu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cpfqAXUI8mpg10vu');
    }
  }

  async sd_tl2FJAjSl7kCsqBg(bh) {
    try {
      bh.local.requesterDetails = JSON.parse(
        sessionStorage.getItem(bh.input.key)
      );
      //appendnew_next_sd_tl2FJAjSl7kCsqBg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tl2FJAjSl7kCsqBg');
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
