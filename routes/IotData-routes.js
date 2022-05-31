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
router.post('/postIoTData', addIot);
router.get('/getIoTData', getAlliotdata);
router.get('/getIoTData/:id', getIotdata);
router.put('/updateIoTData/:id', updateIotdata);
router.delete('/deleteIoT/:id', deleteIotdata);


module.exports = {
    routes: router
}