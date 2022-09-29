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
export class manageQuoteStatus {
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
    this.serviceName = 'manageQuoteStatus';
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
      instance = new manageQuoteStatus(
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
      //appendnew_flow_manageQuoteStatus_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: manageQuoteStatus');

    //appendnew_flow_manageQuoteStatus_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: manageQuoteStatus');

    if (!this.swaggerDocument['paths']['/updateQuoteStatus/{id}']) {
      this.swaggerDocument['paths']['/updateQuoteStatus/{id}'] = {
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
      this.swaggerDocument['paths']['/updateQuoteStatus/{id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateQuoteStatus/:id`,
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
          bh = await this.sd_jnCpuSaeQeHAzAFL(bh);
          //appendnew_next_sd_X2OIQkuKGHUJe9B4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_X2OIQkuKGHUJe9B4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateTravelerQuoteStatus/{id}']) {
      this.swaggerDocument['paths']['/updateTravelerQuoteStatus/{id}'] = {
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
      this.swaggerDocument['paths']['/updateTravelerQuoteStatus/{id}']['put'] =
        {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateTravelerQuoteStatus/:id`,
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
          bh = await this.sd_zry4zqQESwKSUw7R(bh);
          //appendnew_next_sd_4kpoQ0zJngQRRVJ1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4kpoQ0zJngQRRVJ1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateQuoteStatusByFinance/{id}']) {
      this.swaggerDocument['paths']['/updateQuoteStatusByFinance/{id}'] = {
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
      this.swaggerDocument['paths']['/updateQuoteStatusByFinance/{id}']['put'] =
        {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateQuoteStatusByFinance/:id`,
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
          bh = await this.sd_snao3SGFy83oscEI(bh);
          //appendnew_next_sd_oddurvC9tpXPuamH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oddurvC9tpXPuamH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_manageQuoteStatus_HttpIn
  }
  //   service flows_manageQuoteStatus

  //appendnew_flow_manageQuoteStatus_start

  async sd_jnCpuSaeQeHAzAFL(bh) {
    try {
      bh.collection = 'travelRequests';
      bh.managerQuoteApproval = bh.input.body.managerApproval.quoteApproved;
      bh.local.query = {
        _id: new require('mongodb').ObjectId(bh.input.params.id),
      };
      console.log(bh);
      bh = await this.sd_kcoQx3hiXCPj3OE1(bh);
      //appendnew_next_sd_jnCpuSaeQeHAzAFL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jnCpuSaeQeHAzAFL');
    }
  }

  async sd_kcoQx3hiXCPj3OE1(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.managerQuoteApproval,
          'Approved',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7Cz4wDVymup08Q0E(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.managerQuoteApproval,
          'Rejected',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_RSBZUbLwVMhjQhRK(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kcoQx3hiXCPj3OE1');
    }
  }

  async sd_7Cz4wDVymup08Q0E(bh) {
    try {
      bh.input.body.status = 'Awaiting Traveler Quote Approval';
      bh.input.body.travelerApproval = {};
      bh.input.body.travelerApproval.quoteApproved = null;
      bh.input.body.travelerApproval.quoteComments = '';
      bh.input.body.travelerApproval.correctDetails = null;
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_hjRoakWxt1lkNAqO(bh);
      //appendnew_next_sd_7Cz4wDVymup08Q0E
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7Cz4wDVymup08Q0E');
    }
  }

  async sd_hjRoakWxt1lkNAqO(bh) {
    try {
      bh.local.response = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_bQU5lSH9jhybSAjc',
        bh.collection,
        bh.local.query,
        bh.updatedRequest,
        bh.options
      );
      bh = await this.sd_pO1JFmoH1CUfe4pJ(bh);
      //appendnew_next_sd_hjRoakWxt1lkNAqO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hjRoakWxt1lkNAqO');
    }
  }

  async sd_pO1JFmoH1CUfe4pJ(bh) {
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
        bh = await this.sd_5HJmWmS67PR1JWIr(bh);
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
        bh = await this.sd_RshU6PiN16ZaKARs(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pO1JFmoH1CUfe4pJ');
    }
  }

  async sd_5HJmWmS67PR1JWIr(bh) {
    try {
      bh.email = {};
      bh.email.to = bh.input.body.owner; // Travel Desk Email Here
      bh.email.sentfrom = 'neutrinostravel@gmail.com'; // System Email Here
      bh.email.cc = '';
      bh.email.subject = 'Your Travel Request Status';
      bh.sender = `${bh.input.body.personalDetails.firstName} ${bh.input.body.personalDetails.lastName}`;
      bh.email.body = `Hi ${bh.sender}. 
Your request status has been updated to "${bh.input.body.status}" by your Line Manager(${bh.input.body.personalDetails.lineManager}), please login for more details.

Regards,
Neutrinos Travel
`;
      bh = await this.sd_yKX6iXQNHInJzUKe(bh);
      //appendnew_next_sd_5HJmWmS67PR1JWIr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5HJmWmS67PR1JWIr');
    }
  }

  async sd_yKX6iXQNHInJzUKe(bh) {
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_c6EmaZC0gRnAzT26'
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
      bh = await this.sd_1lDX5auhyX5WTLLN(bh);
      //appendnew_next_sd_yKX6iXQNHInJzUKe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yKX6iXQNHInJzUKe');
    }
  }

  async sd_1lDX5auhyX5WTLLN(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Quote Status Updated Successfully',
        cssClass: 'success',
      };
      await this.sd_UP03aONgqPP8vbNk(bh);
      //appendnew_next_sd_1lDX5auhyX5WTLLN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1lDX5auhyX5WTLLN');
    }
  }

  async sd_UP03aONgqPP8vbNk(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UP03aONgqPP8vbNk');
    }
  }

  async sd_RshU6PiN16ZaKARs(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Quote Update Failed',
        cssClass: 'error',
      };
      await this.sd_UP03aONgqPP8vbNk(bh);
      //appendnew_next_sd_RshU6PiN16ZaKARs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RshU6PiN16ZaKARs');
    }
  }

  async sd_RSBZUbLwVMhjQhRK(bh) {
    try {
      bh.input.body.status = 'Quote Rejected By LM';
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_hjRoakWxt1lkNAqO(bh);
      //appendnew_next_sd_RSBZUbLwVMhjQhRK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RSBZUbLwVMhjQhRK');
    }
  }

  async sd_zry4zqQESwKSUw7R(bh) {
    try {
      bh.collection = 'travelRequests';
      console.log(bh.input.body.travelerApproval.quoteApproved);

      bh.travelerQuoteApproval = bh.input.body.travelerApproval.quoteApproved;
      console.log(bh.travelerQuoteApproval);

      bh.local.query = {
        _id: new require('mongodb').ObjectId(bh.input.params.id),
      };
      bh = await this.sd_AhJ43mwE9PzuNlTv(bh);
      //appendnew_next_sd_zry4zqQESwKSUw7R
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zry4zqQESwKSUw7R');
    }
  }

  async sd_AhJ43mwE9PzuNlTv(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.travelerQuoteApproval,
          'Approved',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wjz9s1YABwDY9OYZ(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.travelerQuoteApproval,
          'Rejected',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_u12K7RxvWqiwpbCR(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AhJ43mwE9PzuNlTv');
    }
  }

  async sd_wjz9s1YABwDY9OYZ(bh) {
    try {
      bh.input.body.status = 'Awaiting Finance Quote Approval';
      bh.input.body.financeApproval = {};
      bh.input.body.financeApproval.quoteApproved = null;
      bh.input.body.financeApproval.quoteComments = '';
      bh.input.body.costs = {
        travel: 0,
        accomodation: 0,
        perdiem: 0,
      };
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_g5KnEKrbi0V9WqxW(bh);
      //appendnew_next_sd_wjz9s1YABwDY9OYZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wjz9s1YABwDY9OYZ');
    }
  }

  async sd_g5KnEKrbi0V9WqxW(bh) {
    try {
      bh.local.response = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_bQU5lSH9jhybSAjc',
        bh.collection,
        bh.local.query,
        bh.updatedRequest,
        bh.options
      );
      bh = await this.sd_NTQZkP0q2ygLZGeN(bh);
      //appendnew_next_sd_g5KnEKrbi0V9WqxW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g5KnEKrbi0V9WqxW');
    }
  }

  async sd_NTQZkP0q2ygLZGeN(bh) {
    try {
      bh.email = {};
      bh.email.to = 'siyabonga.hlongwane@neutrinos.co'; // Travel Desk Email Here, Finance
      bh.email.sentfrom = bh.input.body.owner; // System Email Here
      bh.email.cc = bh.input.body.personalDetails.lineManagerEmail;
      bh.email.subject = 'Travel Request Quote';
      bh.sender = `${bh.input.body.personalDetails.firstName} ${bh.input.body.personalDetails.lastName}`;
      bh = await this.sd_UH9vxbDJITrTKmpH(bh);
      //appendnew_next_sd_NTQZkP0q2ygLZGeN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NTQZkP0q2ygLZGeN');
    }
  }

  async sd_UH9vxbDJITrTKmpH(bh) {
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
        bh = await this.sd_DgoGbHdjoN6Fwhrt(bh);
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
        bh = await this.sd_n9egjWIo5of5f8an(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UH9vxbDJITrTKmpH');
    }
  }

  async sd_DgoGbHdjoN6Fwhrt(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.body.status,
          'Awaiting Finance Quote Approval',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DbVk3noN0DK0D1mM(bh);
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
        bh = await this.sd_sTXtuccydwA7vk5N(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DgoGbHdjoN6Fwhrt');
    }
  }

  async sd_DbVk3noN0DK0D1mM(bh) {
    try {
      // bh.onBehalf = bh.input.body.requestDetails[0]['travelDetails']['requestType'] == 'On behalf' ?
      // on behalf of
      bh.email.body = `Hi Finance,

Please note that the following travel request has been approved by ${
        bh.input.body.personalDetails.lineManager
      }:
Request date: ${new Date()}
Leg: ${bh.input.body.requestDetails.length};
Return: 
Dep date:
Dep city:
Dest date:
Dest city:
Preferred dep time:
Accomm required?:
Check in date:
Check out date:
Car hire required?:
Transfers required?:

Kindly login for further details.

Regards,
Neutrinos Travel
`;
      bh = await this.sd_RMfhV1z22JgMafJy(bh);
      //appendnew_next_sd_DbVk3noN0DK0D1mM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DbVk3noN0DK0D1mM');
    }
  }

  async sd_RMfhV1z22JgMafJy(bh) {
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_c6EmaZC0gRnAzT26'
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
      bh = await this.sd_TXcyb9mq67bSkC5W(bh);
      //appendnew_next_sd_RMfhV1z22JgMafJy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RMfhV1z22JgMafJy');
    }
  }

  async sd_TXcyb9mq67bSkC5W(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Quote Status Updated Successfully',
        cssClass: 'success',
      };
      await this.sd_jfz0zbcvEgXsbE1T(bh);
      //appendnew_next_sd_TXcyb9mq67bSkC5W
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TXcyb9mq67bSkC5W');
    }
  }

  async sd_jfz0zbcvEgXsbE1T(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jfz0zbcvEgXsbE1T');
    }
  }

  async sd_sTXtuccydwA7vk5N(bh) {
    try {
      bh.email.to = 'siyabonga.hlongwane@neutrinos.co'; //send to TD only
      bh.email.body = `Hi Travel Desk,

Please note that this travel request quote has been rejected by ${bh.sender}.

Kindly login for further details.

Regards,
Neutrinos Travel
`;
      bh = await this.sd_RMfhV1z22JgMafJy(bh);
      //appendnew_next_sd_sTXtuccydwA7vk5N
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sTXtuccydwA7vk5N');
    }
  }

  async sd_n9egjWIo5of5f8an(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Quote Status Update Failed',
        cssClass: 'error',
      };
      await this.sd_jfz0zbcvEgXsbE1T(bh);
      //appendnew_next_sd_n9egjWIo5of5f8an
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n9egjWIo5of5f8an');
    }
  }

  async sd_u12K7RxvWqiwpbCR(bh) {
    try {
      bh.input.body.status = 'Quote Rejected Traveler';
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_g5KnEKrbi0V9WqxW(bh);
      //appendnew_next_sd_u12K7RxvWqiwpbCR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_u12K7RxvWqiwpbCR');
    }
  }

  async sd_snao3SGFy83oscEI(bh) {
    try {
      bh.collection = 'travelRequests';
      bh.financeQuoteApproval = bh.input.body.financeApproval.quoteApproved;

      bh.local.query = {
        _id: new require('mongodb').ObjectId(bh.input.params.id),
      };
      bh = await this.sd_nY8IR0dWGmuV4Jyq(bh);
      //appendnew_next_sd_snao3SGFy83oscEI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_snao3SGFy83oscEI');
    }
  }

  async sd_nY8IR0dWGmuV4Jyq(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.bh.financeQuoteApproval,
          'Approved',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_G0gqvzwxllMIKaIx(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.bh.financeQuoteApproval,
          'Rejected',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ieQhBoh4eKomJ1wi(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nY8IR0dWGmuV4Jyq');
    }
  }

  async sd_G0gqvzwxllMIKaIx(bh) {
    try {
      bh.input.body.status = 'Quote Approved By Finance';
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_6SBKPsCdFIsRNmXy(bh);
      //appendnew_next_sd_G0gqvzwxllMIKaIx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G0gqvzwxllMIKaIx');
    }
  }

  async sd_6SBKPsCdFIsRNmXy(bh) {
    try {
      bh.local.response = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_bQU5lSH9jhybSAjc',
        bh.collection,
        bh.local.query,
        bh.updatedRequest,
        bh.options
      );
      bh = await this.sd_gPNGUXzOGR0MqZVu(bh);
      //appendnew_next_sd_6SBKPsCdFIsRNmXy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6SBKPsCdFIsRNmXy');
    }
  }

  async sd_gPNGUXzOGR0MqZVu(bh) {
    try {
      bh.email = {};
      bh.email.to = 'siyabonga.hlongwane@neutrinos.co'; // Travel Desk Email Here, Finance
      bh.email.sentfrom = bh.input.body.owner; // System Email Here
      bh.email.cc = bh.input.body.personalDetails.lineManagerEmail;
      bh.email.subject = 'Travel Request Quote';
      bh.sender = `${bh.input.body.personalDetails.firstName} ${bh.input.body.personalDetails.lastName}`;
      bh = await this.sd_51hjWQjROPKpoWk7(bh);
      //appendnew_next_sd_gPNGUXzOGR0MqZVu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gPNGUXzOGR0MqZVu');
    }
  }

  async sd_51hjWQjROPKpoWk7(bh) {
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
        bh = await this.sd_0H0C5l03kEaddHJa(bh);
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
        bh = await this.sd_tMoJEy43ySto5AT1(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_51hjWQjROPKpoWk7');
    }
  }

  async sd_0H0C5l03kEaddHJa(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.body.status,
          'Quote Approved By Finance',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1r98kImHwHRz5QXp(bh);
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
        bh = await this.sd_UkV3N6xRVeKhYa0d(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0H0C5l03kEaddHJa');
    }
  }

  async sd_1r98kImHwHRz5QXp(bh) {
    try {
      // bh.onBehalf = bh.input.body.requestDetails[0]['travelDetails']['requestType'] == 'On behalf' ?
      // on behalf of
      bh.email.body = `Hi all,

Please note that the following travel request has been approved by Finance:
Request date: ${new Date()}
Leg: ${bh.input.body.requestDetails.length};
Return: 
Dep date:
Dep city:
Dest date:
Dest city:
Preferred dep time:
Accomm required?:
Check in date:
Check out date:
Car hire required?:
Transfers required?:

Kindly login for further details.

Regards,
Neutrinos Travel
`;
      bh = await this.sd_lyJSjRulzkEENSBS(bh);
      //appendnew_next_sd_1r98kImHwHRz5QXp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1r98kImHwHRz5QXp');
    }
  }

  async sd_lyJSjRulzkEENSBS(bh) {
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_c6EmaZC0gRnAzT26'
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
      bh = await this.sd_hwuxWlC5pH8P4QQa(bh);
      //appendnew_next_sd_lyJSjRulzkEENSBS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lyJSjRulzkEENSBS');
    }
  }

  async sd_hwuxWlC5pH8P4QQa(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Quote Status Updated Successfully',
        cssClass: 'success',
      };
      await this.sd_9dyIglYXrnHqoSSJ(bh);
      //appendnew_next_sd_hwuxWlC5pH8P4QQa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hwuxWlC5pH8P4QQa');
    }
  }

  async sd_9dyIglYXrnHqoSSJ(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9dyIglYXrnHqoSSJ');
    }
  }

  async sd_UkV3N6xRVeKhYa0d(bh) {
    try {
      bh.email.to = 'siyabonga.hlongwane@neutrinos.co'; //send to TR, TD and LM only
      bh.email.body = `Hi all,

Please note that this travel request quote has been rejected by Finance}.

Kindly login for further details.

Regards,
Neutrinos Travel
`;
      bh = await this.sd_lyJSjRulzkEENSBS(bh);
      //appendnew_next_sd_UkV3N6xRVeKhYa0d
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UkV3N6xRVeKhYa0d');
    }
  }

  async sd_tMoJEy43ySto5AT1(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Quote Status Update Failed',
        cssClass: 'error',
      };
      await this.sd_9dyIglYXrnHqoSSJ(bh);
      //appendnew_next_sd_tMoJEy43ySto5AT1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tMoJEy43ySto5AT1');
    }
  }

  async sd_ieQhBoh4eKomJ1wi(bh) {
    try {
      bh.input.body.status = 'Quote Rejected Finance';
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_6SBKPsCdFIsRNmXy(bh);
      //appendnew_next_sd_ieQhBoh4eKomJ1wi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ieQhBoh4eKomJ1wi');
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
  //appendnew_flow_manageQuoteStatus_Catch
}
