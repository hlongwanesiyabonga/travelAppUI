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
export class Quotes {
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
    this.serviceName = 'Quotes';
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
      instance = new Quotes(
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
      //appendnew_flow_Quotes_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Quotes');

    //appendnew_flow_Quotes_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Quotes');

    if (!this.swaggerDocument['paths']['/quotes']) {
      this.swaggerDocument['paths']['/quotes'] = {
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
      this.swaggerDocument['paths']['/quotes']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/quotes`,
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
          bh = await this.sd_rEQT23lWcAHLsYEc(bh);
          //appendnew_next_sd_M7uOZkQxfwK56W35
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_M7uOZkQxfwK56W35');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Quotes_HttpIn
  }
  //   service flows_Quotes

  //appendnew_flow_Quotes_start

  async sd_rEQT23lWcAHLsYEc(bh) {
    try {
      bh.collection = 'quotes';
      bh = await this.sd_9vtBycu0wl44XsvE(bh);
      //appendnew_next_sd_rEQT23lWcAHLsYEc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rEQT23lWcAHLsYEc');
    }
  }

  async sd_9vtBycu0wl44XsvE(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_JjJOsfKXqK3as12Z',
        bh.collection,
        bh.input.body,
        {}
      );
      await this.sd_qMJKys8krug28Qqg(bh);
      //appendnew_next_sd_9vtBycu0wl44XsvE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9vtBycu0wl44XsvE');
    }
  }

  async sd_qMJKys8krug28Qqg(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qMJKys8krug28Qqg');
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
  //appendnew_flow_Quotes_Catch
}
