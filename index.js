'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const iotRoutes = require('./routes/IotData-routes');

const app = express();
const Port = process.env.PORT || config.port;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', iotRoutes.routes);
app.use('/', (req, res) => {
    res.send("Server is Running")
})



app.listen(Port, () => console.log('App is listening on url http://localhost:' + Port));
