const admin=require('firebase-admin');

var db=admin.database();
var modelref=db.ref("models");

const adminOperation={
    addModel(obj,res){
        var idref=modelref.child(obj.id);
            obj.totalLocked=0;
            obj.totalSubmit=0;
           var model=idref.child(obj.mid)
            model.update(obj,(err,doc)=>{
                if(err){
                    res.status(300).json({"msg":"something went wrong","error":err});
                }
                else{
                    res.status(200).json({"msg":"submitted sucessfully","doc":doc});
                }
            });

    }
}

module.exports=adminOperation;