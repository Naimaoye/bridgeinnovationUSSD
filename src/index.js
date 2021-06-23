import express from 'express';
import cors from 'cors';
import ussdRoute from './route/index';
import { logger } from './config/loggerConfig';

const app = express();
app.use(cors());
app.use("/router/digitalpulse/v1.0/ussd/", ussdRoute);


const PORT = 5000;

app.listen(PORT, () => {
    logger.info(`App running on port ${PORT}`);
});
