const Reports = require('../model/crimeData');
const policeStation = require('../model/policestation');
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
       const policeStations = await policeStation.find();
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
  exports.getPoliceStationReport = async (req, res, next)=>{
    try{
      const station= req.body.station;
      console.log(req.body.station+"xx");
    const data = await Reports.find({'station':req.body.station});
    let totalSeizedGanja=0;
    data.map((item)=>
      {
        totalSeizedGanja+= parseFloat(item.seizedGanja);
        console.log(item);
      }
    );

    res.status(200).json({
      data,
      totalSeizedGanja
    });
 } catch(err)
 {
    res.status(200).json({
        "error":err.message
      });
 }
 }

 exports.getStationByLocation = async (req, res, next)=>{
  try{
    const lat= req.body.lat;
    const long = req.body.long;
      const policeStations = await policeStation.find({"lat":lat,"long":long});
      res.status(200).json({
        "policeStation":policeStations
      });
   } catch(err)
   {
      res.status(200).json({
          err
        });
   }
    
 }


 exports.getCrimeType = async (req, res, next)=>{
  try{
     const crimeType = await Reports.distinct('crimeType');
     res.status(200).json({
       "crimeType":crimeType
     });
  } catch(err)
  {
     res.status(200).json({
         err
       });
  }
   
 }

 exports.getCrimeTypeData = async (req, res, next)=>{
  try{
  
     const data = await Reports.find({'crimeType':req.body.crimeType});
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

 exports.addReport= async (req, res, next)=>{
  try{
     console.log(JSON.stringify(req.body));
     const data = await Reports.create(req.body);
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
