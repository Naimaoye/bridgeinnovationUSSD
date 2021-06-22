import express from 'express';
import ussdController from '../controller/ussdIntegration';

const ussdRoute = express.Router();

ussdRoute.get(`reply/${appId}`, ussdController.clientIntegration);

  

export default ussdRoute; 
