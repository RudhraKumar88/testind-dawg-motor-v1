const firebase = require('../db');
const IotData = require('../models/IotData');
const firestore = firebase.firestore();

//POST Operation
const addIot = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('IoTData').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

//GET Operation For Complete Collection
const getAlliotdata = async (req, res, next) => {
    try {
        const iotDatas = await firestore.collection('IoTData');
        const data = await iotDatas.get();
        const iotDatasArray = [];
        if(data.empty) {
            res.status(404).send('No iotData record found');
        }else {
            data.forEach(doc => {
                const iotData = new IotData(
                    doc.id,
                    doc.data().vehicle,
                    doc.data().name,
                );
                iotDatasArray.push(iotData);
            });
            res.send(iotDatasArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//GET Operation For Each Collection
const getIotdata = async (req, res, next) => {
    try {
        const id = req.params.id;
        const iotData = await firestore.collection('IoTData').doc(id);
        const data = await iotData.get();
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
        const data = req.body;
        const iotData =  await firestore.collection('IoTData').doc(id);
        await iotData.update(data);
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