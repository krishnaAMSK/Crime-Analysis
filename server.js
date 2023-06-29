const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const Sequelize = require('sequelize');

//creating sequelize object to access database

const sequelize = new Sequelize(
  //database name
  'crime_analysis',
  //location
  'root',
  //password
  'Chinu@123', {
    host: 'localhost',
    dialect: 'mysql'
  }
);

const initDb = async () => {
  await sequelize.sync();
}

initDb()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.get("/", function(req, res) {
  res.send("Ok");
});

//to check whether the server is running
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
