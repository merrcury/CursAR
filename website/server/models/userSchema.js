const mongoose=require('./connection');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    'uid':{type:String,required:true},
    'email':{type:String,required:true},
    'userName':{type:String,require:true},
    'acceptedModels':{type:Array},
    'lockedModels':{type:Array},
    'uploadedModels':{type:Array}
});
var Users=mongoose.model('users',userSchema);
module.exports=Users;