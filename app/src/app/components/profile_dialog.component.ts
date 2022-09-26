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
import { callServerApis } from 'app/sd-services/callServerApis'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
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
      this.sd_W11bSYRcNZQAaom1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_W11bSYRcNZQAaom1(bh) {
    try {
      bh = this.sd_nemvzjYVHuKqiFZJ(bh);
      //appendnew_next_sd_W11bSYRcNZQAaom1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W11bSYRcNZQAaom1');
    }
  }

  closeProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_zbYZLwoXPwvfM4HC(bh);
      //appendnew_next_closeProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5tHSXkFtEkgHmY83');
    }
  }

  submitForm(profileForm: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { profileForm: profileForm };
      bh.local = {};
      bh = this.sd_Z13nth8o712Wsc0M(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LNPqtJcKZ6JIUJ09');
    }
  }

  //appendnew_flow_profile_dialogComponent_start

  sd_nemvzjYVHuKqiFZJ(bh) {
    try {
      this.page.profileDialog = undefined;
      this.page.personalDetails = undefined;
      this.page.email = undefined;
      bh = this.sd_vSJRDVn3BrkDsFnQ(bh);
      //appendnew_next_sd_nemvzjYVHuKqiFZJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nemvzjYVHuKqiFZJ');
    }
  }

  sd_vSJRDVn3BrkDsFnQ(bh) {
    try {
      this.page.FormGroup = FormGroup;
      bh = this.sd_lS5rufmtfkHAtZ8u(bh);
      //appendnew_next_sd_vSJRDVn3BrkDsFnQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vSJRDVn3BrkDsFnQ');
    }
  }

  sd_lS5rufmtfkHAtZ8u(bh) {
    try {
      this.page.personalDetails = JSON.parse(
        sessionStorage.getItem('currentUserDetails')
      );
      bh = this.sd_9DF1Fu5s1DNEsmYT(bh);
      //appendnew_next_sd_lS5rufmtfkHAtZ8u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lS5rufmtfkHAtZ8u');
    }
  }

  sd_9DF1Fu5s1DNEsmYT(bh) {
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
      bh = this.sd_w8eStMhAcIG7jxxh(bh);
      //appendnew_next_sd_9DF1Fu5s1DNEsmYT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9DF1Fu5s1DNEsmYT');
    }
  }

  sd_w8eStMhAcIG7jxxh(bh) {
    try {
      const page = this.page;
      console.log(page.personalDetails, '/////');
      (bh.method = 'get'),
        (bh.endPoint =
          'genericGet/getPersonalDetails?email=' + page.personalDetails.email);

      bh = this.sd_naVttDn00PvByen9(bh);
      //appendnew_next_sd_w8eStMhAcIG7jxxh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w8eStMhAcIG7jxxh');
    }
  }

  async sd_naVttDn00PvByen9(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        undefined
      );
      this.page.personalDetails = outputVariables.local.result;

      bh = this.sd_82pZJpednRsfaIA8(bh);
      //appendnew_next_sd_naVttDn00PvByen9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_naVttDn00PvByen9');
    }
  }

  sd_82pZJpednRsfaIA8(bh) {
    try {
      const page = this.page;
      page.personalDetails.designation =
        page.personalDetails.designation.toString();
      page.profileForm.patchValue(page.personalDetails);
      console.log(page.personalDetails.designation.includes('Line Manager'));
      //appendnew_next_sd_82pZJpednRsfaIA8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_82pZJpednRsfaIA8');
    }
  }

  sd_zbYZLwoXPwvfM4HC(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      //appendnew_next_sd_zbYZLwoXPwvfM4HC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zbYZLwoXPwvfM4HC');
    }
  }

  sd_Z13nth8o712Wsc0M(bh) {
    try {
      const page = this.page;
      (bh.method = 'put'),
        (bh.endPoint =
          'genericEdit/updatePersonalDetails/' + page.personalDetails._id);

      bh = this.sd_yqUFTe7V98URWISq(bh);
      //appendnew_next_sd_Z13nth8o712Wsc0M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z13nth8o712Wsc0M');
    }
  }

  async sd_yqUFTe7V98URWISq(bh) {
    try {
      const callServerApisInstance: callServerApis =
        this.__page_injector__.get(callServerApis);

      let outputVariables = await callServerApisInstance.dynamic(
        bh.endPoint,
        bh.method,
        bh.input.profileForm
      );
      this.page.personalDetails = outputVariables.local.result;

      bh = this.sd_UqAPQwq6ORogiCYa(bh);
      //appendnew_next_sd_yqUFTe7V98URWISq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yqUFTe7V98URWISq');
    }
  }

  sd_UqAPQwq6ORogiCYa(bh) {
    try {
      bh = this.sd_zHIV9wTwUiqyPSxa(bh);
      //appendnew_next_sd_UqAPQwq6ORogiCYa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UqAPQwq6ORogiCYa');
    }
  }

  sd_zHIV9wTwUiqyPSxa(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.profileDialog);

      bh = this.sd_GppmMxDENGT7R7qP(bh);
      //appendnew_next_sd_zHIV9wTwUiqyPSxa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zHIV9wTwUiqyPSxa');
    }
  }

  async sd_GppmMxDENGT7R7qP(bh) {
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
        bh = this.sd_aekjHsHcTRQZMsuY(bh);
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
        bh = await this.sd_n8LdV82ZSqYXpJol(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GppmMxDENGT7R7qP');
    }
  }

  sd_aekjHsHcTRQZMsuY(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Failed to update record', 'OK', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_aekjHsHcTRQZMsuY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aekjHsHcTRQZMsuY');
    }
  }

  sd_n8LdV82ZSqYXpJol(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Record updated successfully', 'OK', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_n8LdV82ZSqYXpJol
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n8LdV82ZSqYXpJol');
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
