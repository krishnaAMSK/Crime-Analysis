const express = require("express");
const dotenv= require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;
const data = require('./routes/dataRoute');
const connectDatabase = require("./config/database");

connectDatabase();
app.use('/api/v1',data);
app.listen(port, () =>{
    console.log(`Server running on the port`)
    console.log(port)
});