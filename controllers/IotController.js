const firebase = require('../db');
const IotData = require('../models/IotData');
const momemt = require('moment');
const firestore = firebase.firestore();

//POST Operation
const addIot = async (req, res, next) => {
    try {
        const reqData = req.body;
        reqData.Created = momemt().format('MMMM Do YYYY, h:mm:ss a');
        console.log(reqData)
        await firestore.collection('IoTData').doc().set(reqData);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

//GET Operation For Complete Collection
const getAlliotdata = async (req, res, next) => {
    try {
        const iotDataref = await firestore.collection('IoTData');
        const dataObj = await iotDataref.get();
        const iotDataArray = [];
        if(dataObj.empty) {
            res.status(404).send('No iotData record found');
        }else {
            dataObj.forEach(doc => {
                const iotData = new IotData(
                    doc.id,
                    // doc.data().SatelliteCount,
                    // doc.data().Latitude,
                    // doc.data().Longitude,
                    // doc.data().Altitude,
                    // doc.data().Direction,
                    // doc.data().VehicleID,
                    // doc.data().Created,
                    doc.data().ABSOLULTE_BAROMETRIC_PRESSURE,
                    doc.data().AIR_INTAKE_TEMPERATURE,
                    doc.data().AMBIENT_AIR_TEMPERATURE,
                    doc.data().Acceleration,
                    doc.data().Altitude,
                    doc.data().Angular_rate,
                    doc.data().CALCULATED_ENGINE_LOAD,
                    doc.data().CONTROL_MODULE_VOLTAGE,
                    doc.data().Created,
                    doc.data().DISTANCE_TRAVELED_WITH_MIL_ON,
                    doc.data().Direction,
                    doc.data().ENGINE_RPM,
                    doc.data().FUEL_SYSTEM_STATUS,
                    doc.data().Latitude,
                    doc.data().Longitude,
                    doc.data().RUN_TIME_SINCE_ENGINE_START,
                    doc.data().SatelliteCount,
                    doc.data().Speed,
                    doc.data().Temperature,
                    doc.data().VEHICLE_SPEED,
                    doc.data().VehicleID,
                );
                iotDataArray.push(iotData);
            });
            res.send(iotDataArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//GET Operation For Each Collection
const getIotdata = async (req, res, next) => {
    try {
        const id = req.params.id;
        const iotDataref = await firestore.collection('IoTData').doc(id);
        const data = await iotDataref.get();
        if(!data.exists) {
            res.status(404).send('iotData with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//PUT Operation For Each Collection
const updateIotdata= async (req, res, next) => {
    try {
        const id = req.params.id;
        const reqData = req.body;
        const iotDataref =  await firestore.collection('IoTData').doc(id);
        await iotDataref.update(reqData);
        res.send('iotData record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//DELETE Operation 
const deleteIotdata = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('IoTData').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addIot,
    getAlliotdata,
    getIotdata,
    updateIotdata,
    deleteIotdata
}