//const admin=require('firebase-admin');
const model=require('../models/modelsSchema');
const User=require('../models/userSchema');
const mail=require('../mail');
// var db=admin.database();
// var modelref=db.ref("models");

const adminOperation={
    addModel(obj,res){
        model.findOne({"name":obj.name},(err,doc)=>{
            if(doc){
                res.status(305).json({"msg":"This name model already exists!"});
            }else{
                model.create(obj,(err,doc)=>{
                    if(err){
                        res.status(300).json({"msg":"something went wrong","error":err});
                    }
                    else{
                        res.status(200).json({"msg":"submitted sucessfully","doc":doc});
                    }
                })
            }
        })
        
      /*  var idref=modelref.child(obj.id);
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
            });  */

    },
    acceptModel(obj,res){
        if(obj.mid && obj.uid){ //mongo
            User.findOne({"uid":obj.uid},{"acceptedModels":{ $elemMatch: { mid: obj.mid }}},(err,doc)=>{
                if(doc){
                  res.status(305).json({"msg":"You have already accepted this model :("});
                }
                else{
                  User.update({"uid":obj.uid},{$push:{"acceptedModels":{"mid":obj.mid,"name":obj.name}}},(err,doc)=>{
                    if(err){
                      res.status(500).json({"msg":"Internal Server Error",err});
                    }
                    else{
                        User.findOne({"uid":obj.uid},{"email":1},(err,doc)=>{
                            if(err){console.log("error is ",err)}
                            else{
                                if(doc){
                                    mail(obj.mid,doc.email);
                                }else{console.log("No mail found")}
                            }
                        })
                      res.status(200).json({"msg":"Model accepted sucessfullly","doc":doc});
                      //send mail here
                    }
                  });
                }
              })
         /*   var user= userRef.child(obj.uid);
            var pushy=user.child("acceptedModels");
            user.once('value',function(snap){
              console.log(snap.val().uploadedModels);
                var array=pushy.push();
                array.update({mid:obj.mid,name:obj.name});
                user.once('value',function(snap){mail(obj.mid,snap.val().email)}); //send mail to respective user
                var idref=modelref.child(obj.id);
                var midref= idref.child(obj.mid);
                    midref.update({"isVerified":1}); //update is verified
                res.status(200).json({"msg":"Accepted sucessfully"});
            }) */
        }else{
            res.status(300).json({"msg":"invalid uid or mid"});
        }
    },
    sort(res){
        User.find({},{"acceptedModels":1,"uploadedModels":1,"userName":1},(err,doc)=>{
          //  console.log(doc);
            var arr=[];
              for(let a of doc){
                  console.log(a);
                 var value= a.acceptedModels.length+a.uploadedModels.length;
                 var name=a.userName;
                 var obj={
                     "name":name,
                     "value":value,
                     "accepted":a.acceptedModels.length,
                     "uploaded":a.uploadedModels.length

                 }
                 arr.push(obj);
              }
              console.log(arr);
              arr.sort(function (a, b) {
                return b.value - a.value;
              });
              console.log(arr);
             
            res.json({"result":arr});
          //  res.json({"doc":doc});
        })
    }
};


module.exports=adminOperation;