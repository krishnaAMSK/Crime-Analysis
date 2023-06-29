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


//model for ganja_cases.csv
const ganja_cases = sequelize.define(
  "ganja_cases", {
   id:{
     type:Sequelize.DataTypes.INTEGER,
     primaryKey:true
  },
   Police_Station: Sequelize.DataTypes.STRING,
   Reporting_Time: Sequelize.DataTypes.STRING,
   Reporting_Date: Sequelize.DataTypes.STRING,
   Month_: Sequelize.DataTypes.STRING,
   Place: Sequelize.DataTypes.STRING,
   Accused: Sequelize.DataTypes.INTEGER,
   NameOfAccused:Sequelize.DataTypes.STRING,
   Ganja:Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'ganja_cases',
   tableName: 'ganja_cases',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)

//model for Police_Station_Data.csv
const police_station_data = sequelize.define(
  "police_station_data", {
   Police_Station: Sequelize.DataTypes.STRING,
   "SUM(Accused)": Sequelize.DataTypes.INTEGER,
   "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'police_station_data',
   tableName: 'police_station_data',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)
police_station_data.removeAttribute('id');



//model for reporting_date_data.csv
const reporting_date_data = sequelize.define(
  "reporting_date_data", {
   Reporting_Date: Sequelize.DataTypes.STRING,
   "SUM(Accused)": Sequelize.DataTypes.INTEGER,
   "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'reporting_date_data',
   tableName: 'reporting_date_data',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)
reporting_date_data.removeAttribute('id');


//model for reporting_time_data.csv
const reporting_time_data = sequelize.define(
  "reporting_time_data", {
   Reporting_Time: Sequelize.DataTypes.STRING,
   "SUM(Accused)": Sequelize.DataTypes.INTEGER,
   "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'reporting_time_data',
   tableName: 'reporting_time_data',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)
reporting_time_data.removeAttribute('id');





//model for month_data.csv
const month_data = sequelize.define(
  "month_data", {
   Month_: Sequelize.DataTypes.STRING,
   "SUM(Accused)": Sequelize.DataTypes.INTEGER,
   "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'month_data',
   tableName: 'month_data',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)
month_data.removeAttribute('id');




const initDb = async () => {
  await sequelize.sync();
}

initDb()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.get("/",async function(req, res) {

  const ganja = await ganja_cases.findOne({
    where: {
      Id: 1,
    }
  });

  const police = await police_station_data.findOne({
    where:{
      Police_Station:"E.PUDUR",
    }
  });

  const date = await reporting_date_data.findOne({
    where:{
      Reporting_Date:"24.01.2023",
    }
  });

  const time = await reporting_time_data.findOne({
    where:{
      Reporting_Time:1200,
    }
  });

  const month = await month_data.findOne({
    where:{
      Month_:"January",
    }
  });

  //checking whether data is fetched correctly or not
  res.send({ganja,police,date,time,month});
});

//to check whether the server is running
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
