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
import { EmailOutService } from '../../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
//append_imports_end
export class travelRequest {
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
    this.serviceName = 'travelRequest';
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
      instance = new travelRequest(
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
      //appendnew_flow_travelRequest_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: travelRequest');

    //appendnew_flow_travelRequest_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: travelRequest');

    if (!this.swaggerDocument['paths']['/addTravelRequest']) {
      this.swaggerDocument['paths']['/addTravelRequest'] = {
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
      this.swaggerDocument['paths']['/addTravelRequest']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addTravelRequest`,
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
          bh = await this.sd_WHAhn2s1OEVDFFm9(bh);
          //appendnew_next_sd_6W6Tz7iMhmVsrhyj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6W6Tz7iMhmVsrhyj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/travelRequests/{route}']) {
      this.swaggerDocument['paths']['/travelRequests/{route}'] = {
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
      this.swaggerDocument['paths']['/travelRequests/{route}']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/travelRequests/:route`,
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
          bh = await this.setCollection(bh);
          //appendnew_next_sd_bqAmrpV4FASI9UU9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bqAmrpV4FASI9UU9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateTravelRequest/{id}']) {
      this.swaggerDocument['paths']['/updateTravelRequest/{id}'] = {
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
      this.swaggerDocument['paths']['/updateTravelRequest/{id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateTravelRequest/:id`,
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
          bh = await this.sd_b70XfIUmF8IFJFgQ(bh);
          //appendnew_next_sd_FZ4ibBYhiHumdZCl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FZ4ibBYhiHumdZCl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteRequest/{_id}']) {
      this.swaggerDocument['paths']['/deleteRequest/{_id}'] = {
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
      this.swaggerDocument['paths']['/deleteRequest/{_id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/deleteRequest/:_id`,
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
          bh = await this.sd_31MJTpFXfiNQacin(bh);
          //appendnew_next_sd_NLVKJeC52G32GNGk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NLVKJeC52G32GNGk');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getTravelRequestDrafts']) {
      this.swaggerDocument['paths']['/getTravelRequestDrafts'] = {
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
      this.swaggerDocument['paths']['/getTravelRequestDrafts']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getTravelRequestDrafts`,
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
          bh = await this.sd_lfMrO2D97uLlVmwt(bh);
          //appendnew_next_sd_WJkadmvKf6DaDeht
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_WJkadmvKf6DaDeht');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_travelRequest_HttpIn
  }
  //   service flows_travelRequest

  //appendnew_flow_travelRequest_start

  async sd_WHAhn2s1OEVDFFm9(bh) {
    try {
      console.log(bh);
      bh.input.body.status = 'Pending Review By LM';
      bh = await this.sd_TUBT9uWcV8XIqC0M(bh);
      //appendnew_next_sd_WHAhn2s1OEVDFFm9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WHAhn2s1OEVDFFm9');
    }
  }

  async sd_TUBT9uWcV8XIqC0M(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.query.type,
          'draft',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_IsLwrjzvfAOSICdd(bh);
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
        bh = await this.sd_Pluu2muwnqDTjWFj(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TUBT9uWcV8XIqC0M');
    }
  }

  async sd_IsLwrjzvfAOSICdd(bh) {
    try {
      bh.collection = 'travelRequestDrafts';
      bh = await this.sd_w6fiomQRP9BnbZA1(bh);
      //appendnew_next_sd_IsLwrjzvfAOSICdd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IsLwrjzvfAOSICdd');
    }
  }

  async sd_w6fiomQRP9BnbZA1(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_wkl99fcRfvDmQ56X',
        bh.collection,
        bh.input.body,
        {}
      );
      bh = await this.checkResult(bh);
      //appendnew_next_sd_w6fiomQRP9BnbZA1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w6fiomQRP9BnbZA1');
    }
  }

  async checkResult(bh) {
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
        bh = await this.sd_8RUk0jfKwGTLxoiZ(bh);
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
        bh = await this.sd_S7BJ6mHX1JNpGksc(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vUEpeykQeTS8XKQX');
    }
  }

  async sd_8RUk0jfKwGTLxoiZ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.query.type,
          'draft',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4rWzFASf4LQ2Gbs9(bh);
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
        bh = await this.sd_fXfoeZGr8h7g2nWp(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8RUk0jfKwGTLxoiZ');
    }
  }

  async sd_fXfoeZGr8h7g2nWp(bh) {
    try {
      bh.emailData = [];

      bh.input.body.requestDetails.forEach((item, index) =>
        bh.emailData.push({
          accommodationDetails: {
            checkInDate: item.accommodationDetails.checkInDate
              ? item.accommodationDetails.checkInDate
              : '-',
            checkOutDate: item.accommodationDetails.checkOutDate
              ? item.accommodationDetails.checkOutDate
              : '-',
          },
          travelDetails: {
            fromDate: item.travelDetails.fromDate,
            toDate: item.travelDetails.toDate,
            fromCity: item.travelDetails.fromCity,
            toCity: item.travelDetails.toCity,
            preferredTime: item.travelDetails.preferredTime,
            needVehicle: item.travelDetails.needvehicle,
            tripType: item.travelDetails.tripType,
            needAccommodation: item.travelDetails.needAccommodation,
          },
          leg: index + 1,
        })
      );

      console.log(bh.emailData);
      bh = await this.sd_jLqeDp6RpRNIrbfj(bh);
      //appendnew_next_sd_fXfoeZGr8h7g2nWp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fXfoeZGr8h7g2nWp');
    }
  }

  async sd_jLqeDp6RpRNIrbfj(bh) {
    try {
      bh.email = {};
      bh.email.to = 'neutrinostravel@gmail.com';
      bh.email.sentfrom = bh.input.body.owner;
      bh.email.cc = bh.input.body.personalDetails.lineManagerEmail;
      bh.email.subject = 'New Travel Request';
      bh.sender = `${bh.input.body.personalDetails.firstName} ${bh.input.body.personalDetails.lastName}`;
      bh.email.body = `Hi Travel Desk,

Please note that the following travel request has been raised by ${bh.sender}:
Request date: ${bh.input.body.dateCreated.slice(0, 10)}
${bh.emailData
  .map((el) => {
    return `
Leg: ${el.leg}
Trip Type:  ${el.travelDetails.tripType}
Dep date: ${
      el.travelDetails.fromDate ? el.travelDetails.fromDate.slice(0, 10) : '-'
    }
Dep city: ${el.travelDetails.fromCity}
Dest city: ${el.travelDetails.toCity}
Preferred dep time: ${el.travelDetails.preferredTime}
Accomm required?: ${el.travelDetails.needAccommodation}
Check in date: ${
      el.accommodationDetails.checkInDate
        ? el.accommodationDetails.checkInDate.slice(0, 10)
        : '-'
    }
Check out date: ${
      el.accommodationDetails.checkOutDate
        ? el.accommodationDetails.checkOutDate.slice(0, 10)
        : '-'
    }
Car hire required?: ${el.travelDetails.needVehicle}`;
  })
  .join()}


Regards,
Neutrinos Travel
`;
      bh = await this.sd_3nmGpSpH2D5r5j00(bh);
      //appendnew_next_sd_jLqeDp6RpRNIrbfj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jLqeDp6RpRNIrbfj');
    }
  }

  async sd_3nmGpSpH2D5r5j00(bh) {
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_z5jSYD02FOTnH2nW'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.res = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.email.to,
          subject: bh.email.subject,
          body: bh.email.body,
          cc: bh.email.cc,
          bcc: undefined,
          from: bh.email.sentfrom,
          html: undefined,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      bh = await this.sd_4rWzFASf4LQ2Gbs9(bh);
      //appendnew_next_sd_3nmGpSpH2D5r5j00
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3nmGpSpH2D5r5j00');
    }
  }

  async sd_4rWzFASf4LQ2Gbs9(bh) {
    try {
      bh.status = 200;
      console.log('////////////////', bh.res);

      bh.local.response = {
        msg: `${
          Object.keys(bh.input.query).includes('type') ? 'Draft' : 'Request'
        } Made Successfully`,
        cssClass: 'success',
      };
      await this.sd_2gHfsCC6KfjU6e9Y(bh);
      //appendnew_next_sd_4rWzFASf4LQ2Gbs9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4rWzFASf4LQ2Gbs9');
    }
  }

  async sd_2gHfsCC6KfjU6e9Y(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2gHfsCC6KfjU6e9Y');
    }
  }

  async sd_S7BJ6mHX1JNpGksc(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Error Saving Request',
        cssClass: 'error',
      };
      await this.sd_2gHfsCC6KfjU6e9Y(bh);
      //appendnew_next_sd_S7BJ6mHX1JNpGksc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_S7BJ6mHX1JNpGksc');
    }
  }

  async sd_Pluu2muwnqDTjWFj(bh) {
    try {
      bh.collection = 'travelRequests';
      bh.local.filter = {};
      if (bh.input.body._id) {
        bh.local.filter = new require('mongodb').ObjectId(bh.input.body._id);
      }
      bh = await this.sd_aaG5SMg32j75YGuT(bh);
      //appendnew_next_sd_Pluu2muwnqDTjWFj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pluu2muwnqDTjWFj');
    }
  }

  async sd_aaG5SMg32j75YGuT(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_wkl99fcRfvDmQ56X',
        'travelRequestDrafts',
        bh.local.filter,
        {}
      );
      bh = await this.sd_w6fiomQRP9BnbZA1(bh);
      //appendnew_next_sd_aaG5SMg32j75YGuT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aaG5SMg32j75YGuT');
    }
  }

  async setCollection(bh) {
    try {
      bh.collection = 'travelRequests';
      if (bh.input.query._id) {
        bh.input.query._id = new require('mongodb').ObjectId(
          bh.input.query._id
        );
      }
      bh = await this.sd_g6948qmWaZMmvXk3(bh);
      //appendnew_next_setCollection
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aAyY7KQ9SkEygAM1');
    }
  }

  async sd_g6948qmWaZMmvXk3(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.params.route,
          'getTravelRequests',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_CcCBWAPp3UP0TN1b(bh);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['eq'](
          bh.input.params.route,
          'getTravelRequest',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_CcCBWAPp3UP0TN1b(bh);
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
        bh = await this.sd_6SIL3p2yoFnVpHZv(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g6948qmWaZMmvXk3');
    }
  }

  async sd_CcCBWAPp3UP0TN1b(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_wkl99fcRfvDmQ56X',
        bh.collection,
        bh.input.query,
        {}
      );
      bh = await this.sd_SzSwdepqnahs6Ccz(bh);
      //appendnew_next_sd_CcCBWAPp3UP0TN1b
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CcCBWAPp3UP0TN1b');
    }
  }

  async sd_SzSwdepqnahs6Ccz(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Records fetched successfully',
        data: bh.local.result,
      };
      await this.sd_NkVxpv3hImv15mQI(bh);
      //appendnew_next_sd_SzSwdepqnahs6Ccz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SzSwdepqnahs6Ccz');
    }
  }

  async sd_NkVxpv3hImv15mQI(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NkVxpv3hImv15mQI');
    }
  }

  async sd_6SIL3p2yoFnVpHZv(bh) {
    try {
      bh.status = 404;
      bh.local.response = {
        msg: 'Invalid API Endpoint',
        cssClass: 'error',
      };
      await this.sd_NkVxpv3hImv15mQI(bh);
      //appendnew_next_sd_6SIL3p2yoFnVpHZv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6SIL3p2yoFnVpHZv');
    }
  }

  async sd_b70XfIUmF8IFJFgQ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.query.type,
          'draft',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_RiIhW0d2F09prDjy(bh);
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
        bh = await this.sd_iVJsFUeQO5SkNXMo(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b70XfIUmF8IFJFgQ');
    }
  }

  async sd_RiIhW0d2F09prDjy(bh) {
    try {
      bh.collection = 'travelRequestDrafts';
      bh.local.query = {
        _id: new require('mongodb').ObjectId(bh.input.params.id),
      };
      delete bh.input.body._id;
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};

      bh = await this.sd_WGm7SiWDq97rFod0(bh);
      //appendnew_next_sd_RiIhW0d2F09prDjy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RiIhW0d2F09prDjy');
    }
  }

  async sd_WGm7SiWDq97rFod0(bh) {
    try {
      console.log('bh', bh);
      bh = await this.sd_lZPpBY5c80imnVGF(bh);
      //appendnew_next_sd_WGm7SiWDq97rFod0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WGm7SiWDq97rFod0');
    }
  }

  async sd_lZPpBY5c80imnVGF(bh) {
    try {
      bh.local.response = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_wkl99fcRfvDmQ56X',
        bh.collection,
        bh.local.query,
        bh.updatedRequest,
        bh.options
      );
      bh = await this.sd_RK12BADKSQebUQuh(bh);
      //appendnew_next_sd_lZPpBY5c80imnVGF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lZPpBY5c80imnVGF');
    }
  }

  async sd_RK12BADKSQebUQuh(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nnull'](
          bh.local.response.value,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aeNJj5JRXAitBQ7S(bh);
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
        bh = await this.sd_HneJNsTRxek4RgEq(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RK12BADKSQebUQuh');
    }
  }

  async sd_aeNJj5JRXAitBQ7S(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Request Updated Successfully',
        cssClass: 'success',
      };
      await this.sd_jYhopgFenX6f9HJH(bh);
      //appendnew_next_sd_aeNJj5JRXAitBQ7S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aeNJj5JRXAitBQ7S');
    }
  }

  async sd_jYhopgFenX6f9HJH(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jYhopgFenX6f9HJH');
    }
  }

  async sd_HneJNsTRxek4RgEq(bh) {
    try {
      console.log('bh', bh.local);
      bh = await this.sd_O5pvPnrHKnTIxc0g(bh);
      //appendnew_next_sd_HneJNsTRxek4RgEq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HneJNsTRxek4RgEq');
    }
  }

  async sd_O5pvPnrHKnTIxc0g(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Request Update Failed',
        cssClass: 'error',
      };
      await this.sd_jYhopgFenX6f9HJH(bh);
      //appendnew_next_sd_O5pvPnrHKnTIxc0g
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O5pvPnrHKnTIxc0g');
    }
  }

  async sd_iVJsFUeQO5SkNXMo(bh) {
    try {
      bh.collection = 'travelRequests';
      bh.local.query = {
        _id: new require('mongodb').ObjectId(bh.input.params._id),
      };
      delete bh.input.body._id;
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_lZPpBY5c80imnVGF(bh);
      //appendnew_next_sd_iVJsFUeQO5SkNXMo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iVJsFUeQO5SkNXMo');
    }
  }

  async sd_31MJTpFXfiNQacin(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.query.type,
          'draft',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_EpjpjOICvTFoiVza(bh);
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
        bh = await this.sd_cUOv4i8hgdvjqVsD(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_31MJTpFXfiNQacin');
    }
  }

  async sd_EpjpjOICvTFoiVza(bh) {
    try {
      bh.collection = 'travelRequestDrafts';
      bh.input.query = {
        _id: new require('mongodb').ObjectId(bh.input.params.id),
      };
      bh.options = {};
      bh = await this.sd_B7yAu9TQmK4i2UrL(bh);
      //appendnew_next_sd_EpjpjOICvTFoiVza
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EpjpjOICvTFoiVza');
    }
  }

  async sd_B7yAu9TQmK4i2UrL(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_wkl99fcRfvDmQ56X',
        bh.collection,
        bh.input.query,
        bh.options
      );
      bh = await this.sd_oKLt8jUnWXN93NEB(bh);
      //appendnew_next_sd_B7yAu9TQmK4i2UrL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_B7yAu9TQmK4i2UrL');
    }
  }

  async sd_oKLt8jUnWXN93NEB(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Request Deleted Successfully',
        cssClass: 'error',
      };
      await this.sd_Fq82hgowQ0YL8ivY(bh);
      //appendnew_next_sd_oKLt8jUnWXN93NEB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oKLt8jUnWXN93NEB');
    }
  }

  async sd_Fq82hgowQ0YL8ivY(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fq82hgowQ0YL8ivY');
    }
  }

  async sd_cUOv4i8hgdvjqVsD(bh) {
    try {
      bh.collection = 'travelRequests';
      bh.input.query = {
        _id: new require('mongodb').ObjectId(bh.input.params.id),
      };
      bh.options = {};
      bh = await this.sd_B7yAu9TQmK4i2UrL(bh);
      //appendnew_next_sd_cUOv4i8hgdvjqVsD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cUOv4i8hgdvjqVsD');
    }
  }

  async sd_lfMrO2D97uLlVmwt(bh) {
    try {
      bh.collection = 'travelRequestDrafts';

      bh = await this.sd_zmvm3ABmNmMgt4Vp(bh);
      //appendnew_next_sd_lfMrO2D97uLlVmwt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lfMrO2D97uLlVmwt');
    }
  }

  async sd_zmvm3ABmNmMgt4Vp(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_wkl99fcRfvDmQ56X',
        bh.collection,
        bh.input.query,
        {}
      );
      bh = await this.sd_MiM4jDICLBEKv2Uq(bh);
      //appendnew_next_sd_zmvm3ABmNmMgt4Vp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zmvm3ABmNmMgt4Vp');
    }
  }

  async sd_MiM4jDICLBEKv2Uq(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Drafts fetched successfully',
        data: bh.local.result,
      };
      await this.sd_nDxhfGn3zbDnujOB(bh);
      //appendnew_next_sd_MiM4jDICLBEKv2Uq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MiM4jDICLBEKv2Uq');
    }
  }

  async sd_nDxhfGn3zbDnujOB(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nDxhfGn3zbDnujOB');
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
  //appendnew_flow_travelRequest_Catch
}
