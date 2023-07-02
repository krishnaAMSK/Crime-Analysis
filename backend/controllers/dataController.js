const Reports = require('../model/crimeData');
exports.getAllData = async (req, res, next)=>{
 try{
    const data = await Reports.find();
    res.status(200).json({
      data
    });
 } catch(err)
 {
    res.status(200).json({
        err
      });
 }
  
}

exports.getPoliceStations = async (req, res, next)=>{
    try{
       const policeStations = await Reports.distinct('station');
       res.status(200).json({
         "policeStations":policeStations
       });
    } catch(err)
    {
       res.status(200).json({
           err
         });
    }
     
   }