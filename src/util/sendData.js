
import { uuid } from 'uuidv4';
import { logger } from '../config/loggerConfig';

export const sendToGateway = async (gatewayURL, username, password, shortcode, msisdn, text, metaValue, ussd, res) => {
    const response = await axios.get(gatewayURL, {
        params: {
        'username': username,
        'id': `${uuid()}`,
        'password': password,
        'from': shortcode,
        'shortcode': shortcode,
        'smsc': 'mtn-smsc',
        'to': msisdn,
        'msisdn': msisdn,
        'text': text,
        'keyword': ussd,
        'smsbox-url':'mtn.346-00',
        'network': 'mtn',
        'meta-data': `?smpp?meta-data=${metaValue}`
        }
    });

    logger.debug('response from gateway', response);
    return res.end();
};