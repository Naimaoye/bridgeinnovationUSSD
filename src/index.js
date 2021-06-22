import express from 'express';
import ussdRoute from './route/index';
import { logger } from './config/loggerConfig';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/router/digitalpulse/v1.0/ussd/", ussdRoute);


const PORT = "";

app.listen(PORT, () => {
    logger.info(`App running on port ${PORT}`);
});
