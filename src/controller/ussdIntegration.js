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
            const { msisdn, session, ussd, msg, msgtype, network } = req.body;
            const meta = {
                    "linkid": "",
                    "codescheme": ""
            }

                let data = { msisdn, session, ussd, msg, msgtype, network, meta };
                const url  =  `${baseUrl}/router/digitalpulse/v1.0/ussd/reply/${appId}`;
                const headers = { 
                    'Content-Type': 'application/json'
                  };
              
              const response = await axios.post(url, data, {headers: headers});
              // check response
              if(response){
                  res.send(response);
              }  

      } catch(e){
       
      }
   };

}