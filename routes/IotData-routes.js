const express = require('express');

//Importing All Operation To Specific Path
const {addIot, 
       getAlliotdata, 
       getIotdata,
       updateIotdata,
       deleteIotdata
      } = require('../controllers/IotController');

const router = express.Router();

//Setting Routes Path For Each Functionallity
router.post('/iotdata', addIot);
router.get('/iotdatas', getAlliotdata);
router.get('/iotdata/:id', getIotdata);
router.put('/iotdata/:id', updateIotdata);
router.delete('/iotdata/:id', deleteIotdata);


module.exports = {
    routes: router
}