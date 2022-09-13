//append_imports_start

import * as sd_hkAMxxfqyGUP7RIf from 'app/sd-services/callServerApis'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_hkAMxxfqyGUP7RIf: sd_hkAMxxfqyGUP7RIf.callServerApis
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
