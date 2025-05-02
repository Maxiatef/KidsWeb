const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DBcon = require('./db_con.js');
const Child = require('./Model/Kid_Model.js');
const KidRoute = require('./Routes/KidRoute.js');

const app = express();

DBcon();
app.use(express.json());

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Server is listening on port ${port} and connected to database ${mongoose.connection}`);
});
app.use(cors({ origin: '*' }));
app.use('/', KidRoute);
