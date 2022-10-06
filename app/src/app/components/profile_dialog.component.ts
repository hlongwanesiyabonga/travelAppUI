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
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-profile_dialog',
  templateUrl: './profile_dialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class profile_dialogComponent {
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
      this.sd_jsZ0xku4AjeU8rcC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jsZ0xku4AjeU8rcC(bh) {
    try {
      bh = this.sd_lnMk19gZOi0bJZ48(bh);
      //appendnew_next_sd_jsZ0xku4AjeU8rcC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jsZ0xku4AjeU8rcC');
    }
  }

  closeProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Ne6pC7a1MDk7brU8(bh);
      //appendnew_next_closeProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OapnCf7vzU1kCnPt');
    }
  }

  submitForm(profileForm: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { profileForm: profileForm };
      bh.local = {};
      bh = this.sd_0tANpZlkTVAFmc9H(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tg5dOPkBBtfFck2j');
    }
  }

  //appendnew_flow_profile_dialogComponent_start

  sd_lnMk19gZOi0bJZ48(bh) {
    try {
      this.page.profileDialog = undefined;
      this.page.personalDetails = undefined;
      this.page.email = undefined;
      bh = this.sd_xx62tjFUW7n15Ifp(bh);
      //appendnew_next_sd_lnMk19gZOi0bJZ48
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lnMk19gZOi0bJZ48');
    }
  }

  sd_xx62tjFUW7n15Ifp(bh) {
    try {
      this.page.FormGroup = FormGroup;
      bh = this.sd_ARtraoWN58k86m3h(bh);
      //appendnew_next_sd_xx62tjFUW7n15Ifp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xx62tjFUW7n15Ifp');
    }
  }

  sd_ARtraoWN58k86m3h(bh) {
    try {
      const page = this.page;
      page.profileForm = new FormGroup({
        firstName: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        dateOfBirth: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        designation: new FormControl('', [Validators.required]),
        idNumber: new FormControl(''),
        panNumber: new FormControl(''),
        passportNumber: new FormControl('', [Validators.required]),
        nationality: new FormControl('', [Validators.required]),
        station: new FormControl('', [Validators.required]),
        lineManager: new FormControl('', [Validators.required]),
        lineManagerEmail: new FormControl('', [Validators.required]),
      });
      bh = this.sd_Yh22CstwbVP0U8AN(bh);
      //appendnew_next_sd_ARtraoWN58k86m3h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ARtraoWN58k86m3h');
    }
  }

  sd_Yh22CstwbVP0U8AN(bh) {
    try {
      this.page.currentUserDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_MBz5EGrssnMaWTm5(bh);
      //appendnew_next_sd_Yh22CstwbVP0U8AN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yh22CstwbVP0U8AN');
    }
  }

  sd_MBz5EGrssnMaWTm5(bh) {
    try {
      const page = this.page;
      page.currentUserDetails.designation =
        page.currentUserDetails.designation.toString();
      page.profileForm.patchValue(page.currentUserDetails);
      console.log('profileForm1', page.profileForm);
      //appendnew_next_sd_MBz5EGrssnMaWTm5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MBz5EGrssnMaWTm5');
    }
  }

  sd_Ne6pC7a1MDk7brU8(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      //appendnew_next_sd_Ne6pC7a1MDk7brU8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ne6pC7a1MDk7brU8');
    }
  }

  sd_0tANpZlkTVAFmc9H(bh) {
    try {
      const page = this.page;
      (bh.method = 'put'),
        (bh.endPoint =
          'genericEdit/updatePersonalDetails/' + page.currentUserDetails._id);

      bh = this.sd_A1YAwYofPoiRj74B(bh);
      //appendnew_next_sd_0tANpZlkTVAFmc9H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0tANpZlkTVAFmc9H');
    }
  }

  async sd_A1YAwYofPoiRj74B(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        bh.input.profileForm
      );
      this.page.personalDetails = outputVariables.local.result;

      bh = this.sd_3tSF89ov7rqX5dJX(bh);
      //appendnew_next_sd_A1YAwYofPoiRj74B
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A1YAwYofPoiRj74B');
    }
  }

  sd_3tSF89ov7rqX5dJX(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      bh = this.sd_gt6i7yy3jdcfEc9Z(bh);
      //appendnew_next_sd_3tSF89ov7rqX5dJX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3tSF89ov7rqX5dJX');
    }
  }

  async sd_gt6i7yy3jdcfEc9Z(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          this.page.personalDetails,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_suNd75uL7MNe5YsK(bh);
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
        bh = await this.sd_MYY3bI1QjoiDm82s(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gt6i7yy3jdcfEc9Z');
    }
  }

  sd_suNd75uL7MNe5YsK(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Failed to update record', 'OK', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_suNd75uL7MNe5YsK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_suNd75uL7MNe5YsK');
    }
  }

  sd_MYY3bI1QjoiDm82s(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Record updated successfully', 'OK', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_MYY3bI1QjoiDm82s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MYY3bI1QjoiDm82s');
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
  //appendnew_flow_profile_dialogComponent_Catch
}
