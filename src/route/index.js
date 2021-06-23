import express from 'express';
import ussdController from '../controller/ussdIntegration';

const ussdRoute = express.Router();
const appId = "75442486-0878-440c-9db1-a7006c25a39f";

ussdRoute.get(`reply/${appId}`, ussdController.clientIntegration);

  

export default ussdRoute; 
