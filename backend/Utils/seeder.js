const mongoose = require('mongoose');
const xlsx = require('xlsx');
const Report = require('../model/crimeData'); // Assuming you have the Report model defined

const connectDatabase = require('../config/database');

connectDatabase();

(async () => {
    try {
        await Report.deleteMany();
      const workbook = xlsx.readFile('./ganja_cases.csv');
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = xlsx.utils.sheet_to_json(worksheet);
  
      // Loop through the data and create new report documents
      for (let i = 0; i < data.length; i++) {
        const row = data[i];
       console.log(JSON.stringify(row));
  
        const report = new Report({
          slNo: row.Id,
          station: row.Police_Station,
          dateOfReport:row.Reporting_Date,
          timeOfReport: row.Reporting_Time,
          month: row.Month_,
          placeOfOccurrence: row.Place,
          noOfAccusedArrested: row.Accused,
          nameOfAccused: row.NameOfAccused,
          seizedGanja: row.Ganja,
          seizedVehicleAndMobile: '',
          crimeType: row.CrimeType
        });
        //console.log(JSON.stringify(report))
        // Save the report document to the database
        await report.save();
        console.log('Report saved successfully');
      }
  
      console.log('Seeder completed successfully');
      process.exit(0);
    } catch (error) {
      console.error('Error saving report:', error);
      process.exit(1);
    }
  })();
  const police = require('./police.json');
const policestation = require('../model/policestation');
  const seedPolice=async()=>{
    try{
           await policestation.deleteMany();
           await policestation.insertMany(police);
           console.log('added Successfully');
           process.exit();
    } catch(error){
        console.log(error.message);
        process.exit();
    }
}
