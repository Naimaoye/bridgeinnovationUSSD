import express from 'express';
import ussdController from '../controller/ussdIntegration'
import Validation from '../util/validation';

const ussdRoute = express.Router();

userRoute.post('/ussd', ussdController.clientIntegration);

  

export default ussdRoute; 