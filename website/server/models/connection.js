const keys=require('../config/keys');
const mongoose=require('mongoose');
mongoose.connect(keys.mongoURL,()=>{
    console.log("connected to databse");
});
module.exports=mongoose;