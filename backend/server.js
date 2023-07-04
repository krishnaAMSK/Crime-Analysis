const express = require("express");
const dotenv= require("dotenv").config();
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true, // Enable CORS credentials (cookies, authorization headers, etc.)
    sameSite: 'none', // Set sameSite attribute for cross-site cookies
  }));

const port = process.env.PORT || 5000;
const data = require('./routes/dataRoute');
const connectDatabase = require("./config/database");

connectDatabase();
app.use('/api/v1',data);
app.listen(port, () =>{
    console.log(`Server running on the port`)
    console.log(port)
});