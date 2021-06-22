import axios from 'axios';


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
        try{
            const baseUrl = ""; // host i.e client's IP and Port
            const appId = ""; // client's appId
                let msisdn = req.body.msisdn;
                let session = req.body.session;
                let ussd = req.body.ussd;
                let msg = req.body.msg;
                let msgtype = req.body.msgtype;
                let network = req.body.network;
                let linkid = req.body.meta.linkid;
                let codescheme = req.body.meta.codescheme;

                let data = { msisdn, session, ussd, msg, msgtype, network, linkid, codescheme };
                const url  =  `${baseUrl}/router/digitalpulse/v1.0/ussd/reply/${appId}`;
              
              const response = await axios.post(url, data);
              // check response
              if(response){
                  res.send(response);
              }  

      } catch(e){
       
      }
   };

}