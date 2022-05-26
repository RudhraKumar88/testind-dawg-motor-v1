const firebase = require('../db');
const IotData = require('../models/IotData');
const firestore = firebase.firestore();

//POST Operation
const addIot = async (req, res, next) => {
    try {
        const reqData = req.body;
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
                    doc.data().Satellitecount,
                    doc.data().Latitude,
                    doc.data().Longitude,
                    doc.data().Altitude,
                    doc.data().Direction,
                    doc.data().Year,
                    doc.data().Month,
                    doc.data().Day,
                    doc.data().HH,
                    doc.data().MM,
                    doc.data().SS,
                    doc.data().VehicleId,
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