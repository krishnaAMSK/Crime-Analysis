const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const connectDatabase = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/crime',{}).then(con=>{
        console.log(`mongoDB database connected with host: ${con.connection.host}`)
})

}
module.exports = connectDatabase