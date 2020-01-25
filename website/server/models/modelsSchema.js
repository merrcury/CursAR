const mongoose=require('./connection');
var Schema=mongoose.Schema;
var modelSchema=new Schema({
    'id':{type:String,required:true},
    'mid':{type:String,required:true},
    'name':{type:String,require:true},
    'url':{type:String,require:true},
    'isVerified':{type:Boolean}
});
var Models=mongoose.model('models',modelSchema);
module.exports=Models;