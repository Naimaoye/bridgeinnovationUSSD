import axios from 'axios';
import { username, password, gatewayURL, callbackURL, shortcode } from '../config/config';
import { sendToGateway } from '../util/sendData';
import { logger } from '../config/loggerConfig';

export default class USSDController {
    /**
         * @method
         * @description Implements USSD Integration
         * @static
         * @param {object} req - Request object
         * @param {object} res - Response object
         * @returns {object} JSON response
         * @memberof USSDController
    */
     static async clientIntegration(req, res) {
        try {
        const response = await axios.get(callbackURL);
        logger.debug('BRJ response', response);
        if(response){
            const { msisdn, ussd, msg, msgtype } = response;
            sendToGateway(gatewayURL, username, password, shortcode, msisdn, msg, msgtype, ussd, res);
        }

      } catch(e){
        logger.error('Error from integration', e)
      }
   }

};
