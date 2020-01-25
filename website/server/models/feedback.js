const mongoose=require('./connection');
var Schema=mongoose.Schema;
var feedSchema=new Schema({
    'name':{type:String,required:true},
    'email':{type:String,required:true},
    'message':{type:String,require:true},
    'user':{type:String,required:true},
    'type':{type:String,default:'feedback'}
});
var Feedback=mongoose.model('feedback',feedSchema);
module.exports=Feedback;