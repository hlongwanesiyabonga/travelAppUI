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
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
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

  //appendnew_flow_profile_dialogComponent_start

  sd_nemvzjYVHuKqiFZJ(bh) {
    try {
      this.page.profileDialog = undefined;
      bh = this.sd_vSJRDVn3BrkDsFnQ(bh);
      //appendnew_next_sd_nemvzjYVHuKqiFZJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nemvzjYVHuKqiFZJ');
    }
  }

  sd_vSJRDVn3BrkDsFnQ(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_9DF1Fu5s1DNEsmYT(bh);
      //appendnew_next_sd_vSJRDVn3BrkDsFnQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vSJRDVn3BrkDsFnQ');
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
        dob: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        role: new FormControl('', [Validators.required]),
        idNumber: new FormControl('', [Validators.required]),
        panNumber: new FormControl('', [Validators.required]),
        passportNumber: new FormControl('', [Validators.required]),
        nationality: new FormControl('', [Validators.required]),
        officeStation: new FormControl('', [Validators.required]),
        lineManager: new FormControl('', [Validators.required]),
        lineManagerEmail: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'),
        ]),
      });
      //appendnew_next_sd_9DF1Fu5s1DNEsmYT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9DF1Fu5s1DNEsmYT');
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
