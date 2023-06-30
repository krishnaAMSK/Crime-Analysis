const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const Sequelize = require('sequelize');
//creating sequelize object to access database
const sequelize = new Sequelize(
  //database name
  'crime',
  //location
  'root',
  //password
  'Alok@2001', {
    host: 'localhost',
    dialect: 'mysql'
  }
);

// app.get("/", function(req, res) {
  // res.send("Ok");

//model for ganja_cases.csv
const ganja_cases= sequelize.define(
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
const ganja_police = sequelize.define(
  "ganja_police", {
   Police_Station: Sequelize.DataTypes.STRING,
   "SUM(Accused)": Sequelize.DataTypes.INTEGER,
   "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'ganja_police',
   tableName: 'ganja_police',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)
ganja_police.removeAttribute('id');



//model for reporting_date_data.csv
const ganja_date = sequelize.define(
  "ganja_date", {
   Reporting_Date: Sequelize.DataTypes.STRING,
   "SUM(Accused)": Sequelize.DataTypes.INTEGER,
   "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'ganja_date',
   tableName: 'ganja_date',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)
ganja_date.removeAttribute('id');


//model for reporting_time_data.csv
const ganja_time = sequelize.define(
  "ganja_time", {
   Reporting_Time: Sequelize.DataTypes.STRING,
   "SUM(Accused)": Sequelize.DataTypes.INTEGER,
   "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'ganja_time',
   tableName: 'ganja_time',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)
ganja_time.removeAttribute('id');





//model for month_data.csv
const month_ganja = sequelize.define(
  "month_ganja", {
   Month_: Sequelize.DataTypes.STRING,
   "SUM(Accused)": Sequelize.DataTypes.INTEGER,
   "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
 },
 {
   // options
   sequelize,
   modelName: 'month_ganja',
   tableName: 'month_ganja',
   createdAt: 'date_created',
   underscore: true,
   timestamps: false
 }
)
month_ganja.removeAttribute('id');

const ganja_place =sequelize.define(
  "ganja_place",{
    Place: Sequelize.DataTypes.STRING,
    "SUM(Accused)": Sequelize.DataTypes.INTEGER,
    "SUM(Ganja)":Sequelize.DataTypes.DOUBLE
  },
  {
    // options
    sequelize,
    modelName: 'ganja_place',
    tableName: 'ganja_place',
    createdAt: 'date_created',
    underscore: true,
    timestamps: false
  }
)
ganja_place.removeAttribute('id');

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

  const police = await ganja_police.findOne({
    where:{
      Police_Station:"E.PUDUR",
    }
  });

  const date = await ganja_date.findOne({
    where:{
      Reporting_Date:"24.01.2023",
    }
  });

  const time = await ganja_time.findOne({
    where:{
      Reporting_Time:1200,
    }
  });

  const month = await month_ganja.findOne({
    where:{
      Month_:"January",
    }
  });
  const place = await ganja_place.findOne({
    where:{
      Place:"Cauvery Bridge Near",
    }
  });

  //checking whether data is fetched correctly or no
  res.send({ganja,police,date,time,month,place});
});
app.listen(3000,function(){
console.log("server is reunning on port 3000");
});
