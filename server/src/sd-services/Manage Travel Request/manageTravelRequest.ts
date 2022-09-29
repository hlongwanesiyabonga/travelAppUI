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
export class manageTravelRequest {
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
    this.serviceName = 'manageTravelRequest';
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
      instance = new manageTravelRequest(
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
      //appendnew_flow_manageTravelRequest_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: manageTravelRequest');

    //appendnew_flow_manageTravelRequest_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: manageTravelRequest');

    if (!this.swaggerDocument['paths']['/updateRequestStatus/{id}']) {
      this.swaggerDocument['paths']['/updateRequestStatus/{id}'] = {
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
      this.swaggerDocument['paths']['/updateRequestStatus/{id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateRequestStatus/:id`,
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
          bh = await this.sd_vmankHMgHaeBP1Wg(bh);
          //appendnew_next_sd_nTgVZ4GgnGTuzMLJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nTgVZ4GgnGTuzMLJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/uploadQuote']) {
      this.swaggerDocument['paths']['/uploadQuote'] = {
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
      this.swaggerDocument['paths']['/uploadQuote']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/uploadQuote`,
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
          bh = await this.sd_HONiZlo4XMDxbIwg(bh);
          //appendnew_next_sd_XmWzubscpolJOlYN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XmWzubscpolJOlYN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getQuote']) {
      this.swaggerDocument['paths']['/getQuote'] = {
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
      this.swaggerDocument['paths']['/getQuote']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getQuote`,
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
          bh = await this.sd_9FmKgwjC1tcvAdzy(bh);
          //appendnew_next_sd_4Gu2fY4KsHirEt0d
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4Gu2fY4KsHirEt0d');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_manageTravelRequest_HttpIn
  }
  //   service flows_manageTravelRequest

  //appendnew_flow_manageTravelRequest_start

  async sd_vmankHMgHaeBP1Wg(bh) {
    try {
      bh.collection = 'travelRequests';
      bh.managerApproved = bh.input.body.managerApproval.approvedRequest;
      bh.local.query = {
        _id: new require('mongodb').ObjectId(bh.input.params.id),
      };

      bh = await this.sd_hbG8mfsnnOgNeUsm(bh);
      //appendnew_next_sd_vmankHMgHaeBP1Wg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vmankHMgHaeBP1Wg');
    }
  }

  async sd_hbG8mfsnnOgNeUsm(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.managerApproved,
          'Approved',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_IFd0tAA1CxMjXcCq(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.managerApproved,
          'Rejected',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vaThOUWzUgh8f5Dl(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hbG8mfsnnOgNeUsm');
    }
  }

  async sd_IFd0tAA1CxMjXcCq(bh) {
    try {
      bh.input.body.status = 'Awaiting LM Quote Approval';
      bh.input.body.managerApproval.quoteApproved = null;
      bh.input.body.managerApproval.quoteComments = '';
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_UyUwcAnSQLQs0IKP(bh);
      //appendnew_next_sd_IFd0tAA1CxMjXcCq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IFd0tAA1CxMjXcCq');
    }
  }

  async sd_UyUwcAnSQLQs0IKP(bh) {
    try {
      bh.local.response = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_UgmG6TlmwQb0UCrb',
        bh.collection,
        bh.local.query,
        bh.updatedRequest,
        bh.options
      );
      bh = await this.sd_c3AXfsHH8ufCAjz7(bh);
      //appendnew_next_sd_UyUwcAnSQLQs0IKP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UyUwcAnSQLQs0IKP');
    }
  }

  async sd_c3AXfsHH8ufCAjz7(bh) {
    try {
      console.log(bh.local.response);
      bh = await this.sd_vgf100gTkFyJOuIk(bh);
      //appendnew_next_sd_c3AXfsHH8ufCAjz7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c3AXfsHH8ufCAjz7');
    }
  }

  async sd_vgf100gTkFyJOuIk(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.response.lastErrorObject.updatedExisting,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_oHGD5Rx3dpppKvu6(bh);
        bh = await this.sd_WfMYlutrfJfA8fcm(bh);
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
        bh = await this.sd_k6YwYXG5ux3C52Qu(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vgf100gTkFyJOuIk');
    }
  }

  async sd_oHGD5Rx3dpppKvu6(bh) {
    try {
      bh.email = {};
      bh.email.to = bh.input.body.owner;
      bh.email.sentfrom = 'neutrinostravel@gmail.com'; //TD email
      bh.email.cc = '';
      bh.email.subject = 'Your Travel Request Status';
      bh.sender = `${bh.input.body.personalDetails.firstName} ${bh.input.body.personalDetails.lastName}`;
      bh.email.body = `Hi ${bh.sender}. 
Your travel request status has been updated to "${bh.input.body.status}" by your Line Manager(${bh.input.body.personalDetails.lineManager}), please login for more details.

Regards,
Neutrinos Travel
`;
      bh = await this.sd_exlkeHkSFM4BxMG0(bh);
      //appendnew_next_sd_oHGD5Rx3dpppKvu6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oHGD5Rx3dpppKvu6');
    }
  }

  async sd_exlkeHkSFM4BxMG0(bh) {
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_ZUbfONWXBXCu6yKC'
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
      bh = await this.sd_rfQf1Q3cWdk4C6lr(bh);
      //appendnew_next_sd_exlkeHkSFM4BxMG0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_exlkeHkSFM4BxMG0');
    }
  }

  async sd_rfQf1Q3cWdk4C6lr(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Request Status Updated Successfully',
        cssClass: 'success',
      };
      await this.sd_dcI4pOvHaBHnb7qI(bh);
      //appendnew_next_sd_rfQf1Q3cWdk4C6lr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rfQf1Q3cWdk4C6lr');
    }
  }

  async sd_dcI4pOvHaBHnb7qI(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dcI4pOvHaBHnb7qI');
    }
  }

  async sd_WfMYlutrfJfA8fcm(bh) {
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
      bh = await this.sd_XunVYISNS5bORcCn(bh);
      //appendnew_next_sd_WfMYlutrfJfA8fcm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WfMYlutrfJfA8fcm');
    }
  }

  async sd_XunVYISNS5bORcCn(bh) {
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
      bh = await this.sd_exlkeHkSFM4BxMG0(bh);
      //appendnew_next_sd_XunVYISNS5bORcCn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XunVYISNS5bORcCn');
    }
  }

  async sd_k6YwYXG5ux3C52Qu(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Request Update Failed',
        cssClass: 'error',
      };
      await this.sd_dcI4pOvHaBHnb7qI(bh);
      //appendnew_next_sd_k6YwYXG5ux3C52Qu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k6YwYXG5ux3C52Qu');
    }
  }

  async sd_vaThOUWzUgh8f5Dl(bh) {
    try {
      console.log('rejected');
      bh.input.body.status = 'Rejected';
      bh.input.body.managerApproval.approvedRequest = 'Rejected';
      bh.updatedRequest = { $set: bh.input.body };
      bh.options = {};
      bh = await this.sd_UyUwcAnSQLQs0IKP(bh);
      //appendnew_next_sd_vaThOUWzUgh8f5Dl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vaThOUWzUgh8f5Dl');
    }
  }

  async sd_HONiZlo4XMDxbIwg(bh) {
    try {
      bh.collection = 'quote';
      bh.tempObj = bh.input.body.tempObj;
      delete bh.input.body.tempObj;
      console.log(bh.tempObj);
      bh = await this.sd_IyuBs2vI9W6k1mzX(bh);
      //appendnew_next_sd_HONiZlo4XMDxbIwg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HONiZlo4XMDxbIwg');
    }
  }

  async sd_IyuBs2vI9W6k1mzX(bh) {
    try {
      bh.local.response = await MongoPersistance.getInstance().insertOne(
        'sd_UgmG6TlmwQb0UCrb',
        bh.collection,
        bh.input.body,
        bh.options
      );
      bh = await this.sd_Hjw3gzHgMUVBfsss(bh);
      //appendnew_next_sd_IyuBs2vI9W6k1mzX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IyuBs2vI9W6k1mzX');
    }
  }

  async sd_Hjw3gzHgMUVBfsss(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['neq'](
          bh.local.response.insertedCount,
          0,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0qTJP0tvOI9f0tsD(bh);
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
        bh = await this.sd_1JzNWbFWCqCnRyP3(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hjw3gzHgMUVBfsss');
    }
  }

  async sd_0qTJP0tvOI9f0tsD(bh) {
    try {
      bh.email = {};
      bh.email.to = bh.tempObj.owner;
      bh.email.sentfrom = 'neutraveldeskta@gmail.com';
      bh.email.cc = bh.tempObj.personalDetails.lineManagerEmail;
      bh.email.subject = 'New Travel Quote';
      bh.sender = `${bh.tempObj.personalDetails.firstName} ${bh.tempObj.personalDetails.lastName}`;
      bh.email.body = `Hi ${bh.tempObj.personalDetails.lineManager}. 
There is a new travel quote from Travel Desk for ${bh.sender}, please login for more details.

Regards,
Neutrinos Travel
`;
      console.log(bh.input.body);
      bh = await this.sd_BHm1gwsnrC9vrsHt(bh);
      //appendnew_next_sd_0qTJP0tvOI9f0tsD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0qTJP0tvOI9f0tsD');
    }
  }

  async sd_BHm1gwsnrC9vrsHt(bh) {
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_ZUbfONWXBXCu6yKC'
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
      bh = await this.sd_NCke25Yd4cYo4a0t(bh);
      //appendnew_next_sd_BHm1gwsnrC9vrsHt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BHm1gwsnrC9vrsHt');
    }
  }

  async sd_NCke25Yd4cYo4a0t(bh) {
    try {
      bh.status = 200;
      bh.local.response = {
        msg: 'Quote Uploaded Successfully',
        cssClass: 'success',
      };
      await this.sd_qOyjDNO8z6FqhhsG(bh);
      //appendnew_next_sd_NCke25Yd4cYo4a0t
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NCke25Yd4cYo4a0t');
    }
  }

  async sd_qOyjDNO8z6FqhhsG(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qOyjDNO8z6FqhhsG');
    }
  }

  async sd_1JzNWbFWCqCnRyP3(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Quote Upload Failed',
        cssClass: 'error',
      };
      await this.sd_qOyjDNO8z6FqhhsG(bh);
      //appendnew_next_sd_1JzNWbFWCqCnRyP3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1JzNWbFWCqCnRyP3');
    }
  }

  async sd_9FmKgwjC1tcvAdzy(bh) {
    try {
      bh.collection = 'quote';
      bh.local.query = {
        owner: bh.input.query.owner,
      };
      console.log(bh.local.query);
      bh = await this.sd_4pXad4d8lDXIRSUn(bh);
      //appendnew_next_sd_9FmKgwjC1tcvAdzy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9FmKgwjC1tcvAdzy');
    }
  }

  async sd_4pXad4d8lDXIRSUn(bh) {
    try {
      bh.local.response = await MongoPersistance.getInstance().find(
        'sd_UgmG6TlmwQb0UCrb',
        bh.collection,
        bh.local.query,
        bh.options
      );
      bh = await this.sd_Dkd1Mzdcy1WkB97j(bh);
      //appendnew_next_sd_4pXad4d8lDXIRSUn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4pXad4d8lDXIRSUn');
    }
  }

  async sd_Dkd1Mzdcy1WkB97j(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nnull'](
          bh.local.response,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lHlKIBwWkcBKOCQq(bh);
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
        bh = await this.sd_VTZtKdeTNJtlmAaO(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Dkd1Mzdcy1WkB97j');
    }
  }

  async sd_lHlKIBwWkcBKOCQq(bh) {
    try {
      bh.status = 200;
      console.log(bh.local.response);
      bh.local.response = {
        data: bh.local.response,
        msg: 'Quote Fetched Successfully',
        cssClass: 'success',
      };
      await this.sd_2iuN5DPnI9GjTfJS(bh);
      //appendnew_next_sd_lHlKIBwWkcBKOCQq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lHlKIBwWkcBKOCQq');
    }
  }

  async sd_2iuN5DPnI9GjTfJS(bh) {
    try {
      bh.web.res.status(bh.status).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2iuN5DPnI9GjTfJS');
    }
  }

  async sd_VTZtKdeTNJtlmAaO(bh) {
    try {
      bh.status = 400;
      bh.local.response = {
        msg: 'Error Fetching Quote',
        cssClass: 'error',
      };
      await this.sd_2iuN5DPnI9GjTfJS(bh);
      //appendnew_next_sd_VTZtKdeTNJtlmAaO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VTZtKdeTNJtlmAaO');
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
  //appendnew_flow_manageTravelRequest_Catch
}
