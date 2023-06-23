const express = require('express');
require('dotenv').config();
require('./config/db_connection');
const CribRoute = require('./router/cribRoute');
const cors = require("cors");
const app = express();

const port = process.env.PORT || 4200;

//middleware setup
app.use(express.json());
app.use(cors());

//Routing setup
app.use('/api', CribRoute);


// server setup
app.listen(port, () => {
    console.log(`App is running on prot http://localhost:${port}`);
})


