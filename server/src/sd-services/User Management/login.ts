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
export class login {
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
    this.serviceName = 'login';
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
      instance = new login(
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
      //appendnew_flow_login_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login');

    //appendnew_flow_login_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: login');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
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
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_dHDZa4KTJBMO1uOw(bh);
          //appendnew_next_sd_bTfLqZT259MdpgQ6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bTfLqZT259MdpgQ6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_login_HttpIn
  }
  //   service flows_login

  //appendnew_flow_login_start

  async sd_dHDZa4KTJBMO1uOw(bh) {
    try {
      bh.collection = 'users';
      bh = await this.sd_xhlp2RL744Nd9s4M(bh);
      //appendnew_next_sd_dHDZa4KTJBMO1uOw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dHDZa4KTJBMO1uOw');
    }
  }

  async sd_xhlp2RL744Nd9s4M(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_JjJOsfKXqK3as12Z',
        bh.collection,
        bh.input.query,
        {}
      );
      bh = await this.sd_bcq7vUKJaaL2uOjN(bh);
      //appendnew_next_sd_xhlp2RL744Nd9s4M
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xhlp2RL744Nd9s4M');
    }
  }

  async sd_bcq7vUKJaaL2uOjN(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_kbh36NzOkA7uwAfN(bh);
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
        bh = await this.sd_5w8FjHsgdn5FlBRt(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bcq7vUKJaaL2uOjN');
    }
  }

  async sd_kbh36NzOkA7uwAfN(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        user: bh.local.result,
        msg: 'Logged in sucessfully',
      };
      await this.sd_QWMfHYCVttMOhNKY(bh);
      //appendnew_next_sd_kbh36NzOkA7uwAfN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kbh36NzOkA7uwAfN');
    }
  }

  async sd_QWMfHYCVttMOhNKY(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QWMfHYCVttMOhNKY');
    }
  }

  async sd_5w8FjHsgdn5FlBRt(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Invalid credentials',
      };
      await this.sd_QWMfHYCVttMOhNKY(bh);
      //appendnew_next_sd_5w8FjHsgdn5FlBRt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5w8FjHsgdn5FlBRt');
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
  //appendnew_flow_login_Catch
}
