import Joi from '@hapi/joi';

const msisdn = Joi.string().trim()
  .required()
  .label('msisdn must not be empty');

const ussd = Joi.string().trim()
  .required()
  .label('ussd code name must not be empty');

const msg = Joi.string().trim()
  .required()
  .label('message must not be empty');

const msgtype = Joi.string().trim()
  .required()
  .label('message type must not be empty');
 
const network = Joi.string().trim()
   .required()
  .label('network must not be empty');

    export default {
        ussdClient: Joi.object().keys({
          msisdn,
          ussd,
          msg,
          msgtype,
          network
        }),
    }