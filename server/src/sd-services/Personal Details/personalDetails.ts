let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class personalDetails {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'personalDetails';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new personalDetails(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_personalDetails_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: personalDetails');

    //appendnew_flow_personalDetails_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: personalDetails');

    if (!this.swaggerDocument['paths']['/genericPost/{route}']) {
      this.swaggerDocument['paths']['/genericPost/{route}'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/genericPost/{route}']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/genericPost/:route`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_JHMidYVnXMuLgyTz(bh);
          //appendnew_next_sd_s43iVWQ4MxwuQeD6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_s43iVWQ4MxwuQeD6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/genericGet/{route}']) {
      this.swaggerDocument['paths']['/genericGet/{route}'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/genericGet/{route}']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/genericGet/:route`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_gUCEghz3HMixYwO3(bh);
          //appendnew_next_sd_umUG6dutfOFVyHJG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_umUG6dutfOFVyHJG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/genericEdit/{route}/{_id}']) {
      this.swaggerDocument['paths']['/genericEdit/{route}/{_id}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/genericEdit/{route}/{_id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/genericEdit/:route/:_id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_s7HMx3I27hJuUHUg(bh);
          //appendnew_next_sd_d9h28RcC9wpeC9lU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_d9h28RcC9wpeC9lU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/genericdelete/{route}/{_id}']) {
      this.swaggerDocument['paths']['/genericdelete/{route}/{_id}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/genericdelete/{route}/{_id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/genericdelete/:route/:_id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_NNWmEaps0uahlYWU(bh);
          //appendnew_next_sd_CzPd1pndoldrdiEO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CzPd1pndoldrdiEO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_personalDetails_HttpIn
  }
  //   service flows_personalDetails

  //appendnew_flow_personalDetails_start

  async sd_JHMidYVnXMuLgyTz(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.params.route,
          'addPersonalDetails',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_EDKLti0LRBvnb06v(bh);
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
        bh = await this.sd_Ybw8A4HLTpJosqlk(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JHMidYVnXMuLgyTz');
    }
  }

  async sd_EDKLti0LRBvnb06v(bh) {
    try {
      bh.local.query = {
        email: bh.input.body.email,
      };
      bh.collection = 'personalDetails';
      bh = await this.sd_CJU2z5t9UpTz0XFA(bh);
      //appendnew_next_sd_EDKLti0LRBvnb06v
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EDKLti0LRBvnb06v');
    }
  }

  async sd_CJU2z5t9UpTz0XFA(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_jlIteXYYWodgyKo2',
        'personalDetails',
        bh.local.query,
        {}
      );
      bh = await this.sd_XL341gZMg9ajCb9i(bh);
      //appendnew_next_sd_CJU2z5t9UpTz0XFA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CJU2z5t9UpTz0XFA');
    }
  }

  async sd_XL341gZMg9ajCb9i(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['empty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ps751bCfa6lnrjTv(bh);
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
        bh = await this.sd_LoU5H2i81qYAlniv(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XL341gZMg9ajCb9i');
    }
  }

  async sd_ps751bCfa6lnrjTv(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_jlIteXYYWodgyKo2',
        bh.collection,
        bh.input.body,
        {}
      );
      bh = await this.sd_7LLBHS7AHFxDUoxF(bh);
      //appendnew_next_sd_ps751bCfa6lnrjTv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ps751bCfa6lnrjTv');
    }
  }

  async sd_7LLBHS7AHFxDUoxF(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['neq'](
          bh.local.result.result,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XM7h5dXRss6XwzwP(bh);
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
        bh = await this.sd_yrE5JhSbgjyU3Xsu(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7LLBHS7AHFxDUoxF');
    }
  }

  async sd_XM7h5dXRss6XwzwP(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Personal Details Saved Successfully',
        cssClass: 'success',
      };
      await this.sd_EfQLwQN9ZHgjurGT(bh);
      //appendnew_next_sd_XM7h5dXRss6XwzwP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XM7h5dXRss6XwzwP');
    }
  }

  async sd_EfQLwQN9ZHgjurGT(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EfQLwQN9ZHgjurGT');
    }
  }

  async sd_yrE5JhSbgjyU3Xsu(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Error Saving Personal Details',
        cssClass: 'error',
      };
      await this.sd_EfQLwQN9ZHgjurGT(bh);
      //appendnew_next_sd_yrE5JhSbgjyU3Xsu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yrE5JhSbgjyU3Xsu');
    }
  }

  async sd_LoU5H2i81qYAlniv(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Personal Details Already Exist',
        cssClass: 'error',
      };
      await this.sd_EfQLwQN9ZHgjurGT(bh);
      //appendnew_next_sd_LoU5H2i81qYAlniv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LoU5H2i81qYAlniv');
    }
  }

  async sd_Ybw8A4HLTpJosqlk(bh) {
    try {
      bh.status = 404;
      bh.local.response = {
        msg: 'Invalid API Endpoint',
        cssClass: 'error',
      };
      await this.sd_EfQLwQN9ZHgjurGT(bh);
      //appendnew_next_sd_Ybw8A4HLTpJosqlk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ybw8A4HLTpJosqlk');
    }
  }

  async sd_gUCEghz3HMixYwO3(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.params.route,
          'getPersonalDetails',
          undefined,
          undefined
        )
      ) {
        bh = await this.setCollection(bh);
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
        bh = await this.sd_OJD0x7ZXQwVWr7WZ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gUCEghz3HMixYwO3');
    }
  }

  async setCollection(bh) {
    try {
      bh.collection = 'personalDetails';

      bh = await this.sd_bMGft6wwWAbiSTs8(bh);
      //appendnew_next_setCollection
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RT9fduscWtAs1tRJ');
    }
  }

  async sd_bMGft6wwWAbiSTs8(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_jlIteXYYWodgyKo2',
        bh.collection,
        bh.input.query,
        {}
      );
      bh = await this.sd_JHiJvJbCdMyxjYOi(bh);
      //appendnew_next_sd_bMGft6wwWAbiSTs8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bMGft6wwWAbiSTs8');
    }
  }

  async sd_JHiJvJbCdMyxjYOi(bh) {
    try {
      bh.status = 200;
      if (Object.keys(bh.input.query).length >= 1) {
        bh.local.result = bh.local.result[0];
      }
      await this.sd_jMd123IkbRB2t2LV(bh);
      //appendnew_next_sd_JHiJvJbCdMyxjYOi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JHiJvJbCdMyxjYOi');
    }
  }

  async sd_jMd123IkbRB2t2LV(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jMd123IkbRB2t2LV');
    }
  }

  async sd_OJD0x7ZXQwVWr7WZ(bh) {
    try {
      bh.status = 404;
      bh.local.response = {
        msg: 'Invalid API Endpoint',
        cssClass: 'error',
      };
      await this.sd_jMd123IkbRB2t2LV(bh);
      //appendnew_next_sd_OJD0x7ZXQwVWr7WZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OJD0x7ZXQwVWr7WZ');
    }
  }

  async sd_s7HMx3I27hJuUHUg(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.params.route,
          'updatePersonalDetails',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jT81wZx1BSrz8ylS(bh);
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
        bh = await this.sd_QO2Wgzqjm5rZDv5W(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s7HMx3I27hJuUHUg');
    }
  }

  async sd_jT81wZx1BSrz8ylS(bh) {
    try {
      bh.collection = 'personalDetails';
      bh.input.query = {
        _id: new require('mongodb').ObjectId(bh.input.params._id),
      };
      bh.updatedDoc = { $set: bh.input.body };
      bh.options = {
        $upsert: false,
      };
      bh = await this.sd_istB7Xt5wKfch7j3(bh);
      //appendnew_next_sd_jT81wZx1BSrz8ylS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jT81wZx1BSrz8ylS');
    }
  }

  async sd_istB7Xt5wKfch7j3(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_jlIteXYYWodgyKo2',
        bh.collection,
        bh.input.query,
        bh.updatedDoc,
        bh.options
      );
      bh = await this.sd_yz7d52tOvgFDo3xJ(bh);
      //appendnew_next_sd_istB7Xt5wKfch7j3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_istB7Xt5wKfch7j3');
    }
  }

  async sd_yz7d52tOvgFDo3xJ(bh) {
    try {
      bh.status = 200;
      await this.sd_9CyCvptQvyP61wYn(bh);
      //appendnew_next_sd_yz7d52tOvgFDo3xJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yz7d52tOvgFDo3xJ');
    }
  }

  async sd_9CyCvptQvyP61wYn(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9CyCvptQvyP61wYn');
    }
  }

  async sd_QO2Wgzqjm5rZDv5W(bh) {
    try {
      bh.status = 404;
      bh.local.response = {
        msg: 'Invalid API Endpoint',
        cssClass: 'error',
      };
      await this.sd_9CyCvptQvyP61wYn(bh);
      //appendnew_next_sd_QO2Wgzqjm5rZDv5W
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QO2Wgzqjm5rZDv5W');
    }
  }

  async sd_NNWmEaps0uahlYWU(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.params.route,
          'deletePersonalDetails',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MNbpdDjcJpMAeBqN(bh);
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
        bh = await this.sd_A7psMWbvkIlYAhy5(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NNWmEaps0uahlYWU');
    }
  }

  async sd_MNbpdDjcJpMAeBqN(bh) {
    try {
      bh.collection = 'personalDetails';
      bh.input.query = {
        _id: new require('mongodb').ObjectId(bh.input.params._id),
      };
      bh.options = {};
      bh = await this.sd_eHVwYyqIrxtnsDcq(bh);
      //appendnew_next_sd_MNbpdDjcJpMAeBqN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MNbpdDjcJpMAeBqN');
    }
  }

  async sd_eHVwYyqIrxtnsDcq(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_jlIteXYYWodgyKo2',
        bh.collection,
        bh.input.query,
        bh.options
      );
      bh = await this.sd_60WS6OBQtswxTokD(bh);
      //appendnew_next_sd_eHVwYyqIrxtnsDcq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eHVwYyqIrxtnsDcq');
    }
  }

  async sd_60WS6OBQtswxTokD(bh) {
    try {
      bh.local.response = await MongoPersistance.getInstance().insertOne(
        'sd_jlIteXYYWodgyKo2',
        'deletedProfiles',
        bh.input.body,
        bh.options
      );
      bh = await this.sd_L0RjmTgjwfJfWpfS(bh);
      //appendnew_next_sd_60WS6OBQtswxTokD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_60WS6OBQtswxTokD');
    }
  }

  async sd_L0RjmTgjwfJfWpfS(bh) {
    try {
      delete bh.input.body._id;
      bh.status = 200;
      await this.sd_O8LFOe94Wo9KEiL5(bh);
      //appendnew_next_sd_L0RjmTgjwfJfWpfS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L0RjmTgjwfJfWpfS');
    }
  }

  async sd_O8LFOe94Wo9KEiL5(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O8LFOe94Wo9KEiL5');
    }
  }

  async sd_A7psMWbvkIlYAhy5(bh) {
    try {
      bh.status = 404;
      bh.local.response = {
        msg: 'Invalid API Endpoint',
        cssClass: 'error',
      };
      await this.sd_O8LFOe94Wo9KEiL5(bh);
      //appendnew_next_sd_A7psMWbvkIlYAhy5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A7psMWbvkIlYAhy5');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_personalDetails_Catch
}
