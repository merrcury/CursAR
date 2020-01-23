const admin=require('firebase-admin');
const User=require('../models/userSchema');
const model=require('../models/modelsSchema');
var db=admin.database();
          var userRef=db.ref("users");
          var modelRef=db.ref("models");

const modelOperation={
    lockModel(obj,res){
        admin.auth().verifyIdToken(obj.idToken)
          .then(function(decodedToken) {
            if(obj.uid==decodedToken.uid){  //mongo
              User.findOne({"uid":obj.uid},{"lockedModels":{ $elemMatch: { mid: obj.mid } }},(err,doc)=>{
                console.log("doc at line 14 is",doc);
                if(doc){
                  res.status(305).json({"msg":"You have already locked this model :("});
                }
                else{
                  User.update({"uid":obj.uid},{$push:{"lockedModels":{"mid":obj.mid,"name":obj.name}}},(err,doc)=>{
                    if(err){
                      res.status(500).json({"msg":"Internal Server Error",err});
                    }
                    else{
                      res.status(200).json({"msg":"Model locked sucessfullly","doc":doc});
                    }
                  });
                }
              })
             /* var idRef= modelRef.child(obj.id);
                 var mref=idRef.child(obj.mid);
                    mref.once('value',function(snap){
                        if(snap.val().totalLocked<5){
                            mref.update({totalLocked:snap.val().totalLocked+1});
                           var user= userRef.child(obj.uid);
                           user.once('value',function(sna){
                               var pushy=user.child("lockedModels");
                                       var pushy1=pushy.push();
                                       pushy1.update({
                                            mid:obj.mid,
                                            name:obj.name
                                        });
                                user.update({totalLockedModel:sna.val().totalLockedModel+1})        
                            
                           })
                          res.status(200).json({"msg":"model locked sucessfully"}); 
                        }
                    }) */
            
            }
            else{
                res.status(300).json({"msg":"invalid token"});
            }
        }).catch(function(error) {
            res.status(300).json({"error":error,"msg":"invalid token"});
            // Handle error
          });
    },
uploadModeltest(obj,res){
 /* var user= userRef.child(obj.uid);
  user.once('value',function(snap){
    var arr=snap.val().uploadedModels;
    console.log(arr);
    var arr1=[obj.mid];
    var arr2=arr.concat(arr1);
    user.update({"uploadedModels":arr2})
    res.status(200).json({"msg":"done"});

  })  */
},

uploadModel(obj,res){
  admin.auth().verifyIdToken(obj.idToken)
  .then(function(decodedToken) {
    if(obj.uid == decodedToken.uid){ //mongo
      User.findOne({"uid":obj.uid},{"uploadedModels":{ $elemMatch: { mid: obj.mid }}},(err,doc)=>{
        if(doc){
          res.status(305).json({"msg":"You have already uploaded this model :("});
        }
        else{
          User.update({"uid":obj.uid},{$push:{"uploadedModels":{"mid":obj.mid,"name":obj.name}}},(err,doc)=>{
            if(err){
              res.status(500).json({"msg":"Internal Server Error",err});
            }
            else{
              res.status(200).json({"msg":"Model uploaded sucessfullly","doc":doc});
            }
          });
          //to remove from locked
          User.update({"uid":obj.uid},{$pull:{"lockedModels":{"mid":obj.mid,"name":obj.name}}});
        }
      })
      /*  var user= userRef.child(obj.uid);
        var pushy=user.child("uploadedModels");
        user.once('value',function(snap){
          console.log(snap.val().uploadedModels);
            var array=pushy.push();
            array.update({mid:obj.mid,name:obj.name});
           
           
        })  */
    }
    res.status(200).json({"msg":"uploaded"});
  }).catch(function(error) {
    res.status(300).json({"error":error});
    // Handle error
  });
 
},
displayModel(obj,res){
    if(obj.id){ //mongo
      model.findMany({"id":obj.id},(err,doc)=>{
        if(err){res.status(500).json({"msg":"something went wrong"})}
        else{
          if(doc){
            res.status(200).json({"doc":doc});
          }else{
            res.status(205).json({"msg":"Model id not exists"});
          }
         }
      })
    /*    var midref=modelRef.child(obj.id);
        midref.once('value',function(snap){
          if(snap.val()){
              res.status(200).json({"doc":snap.val()});
          }else{res.status(205).json({"msg":"Model id not exists"});}
            
        }) */
    }else{
      res.status(300).json({"msg":"Please send id"});
    }
},
dislayLocked(obj,res){
    if(obj.uid){ //mongo
      User.find({"uid":obj.uid},{"lockedModels":1},(err,doc)=>{
        if(err){
          res.status(500).json({"msg":"something went wrong"})
        }
        else{
          if(doc){
            res.status(200).json({"doc":doc});
          }else{
            res.status(205).json({"msg":"User don't have any locked model"});
          }
        }
      })
   /*   var lockRef=userRef.child(obj.uid);
      var lockm=lockRef.child("lockedModels");
      lockm.once('value',function(snap){
        res.status(200).json({"doc":snap.val()});
      })  */
    }else{res.status(400).json({"msg":"Send correct uid"})}
},
dislayAccepted(obj,res){
  if(obj.uid){  //mongo
    User.find({"uid":obj.uid},{"acceptedModels":1},(err,doc)=>{
      if(err){
        res.status(500).json({"msg":"something went wrong"})
      }
      else{
        if(doc){
          res.status(200).json({"doc":doc});
        }else{
          res.status(205).json({"msg":"User don't have any accepted model"});
        }
      }
    })
  /*  var lockRef=userRef.child(obj.uid);
    var lockm=lockRef.child("acceptedModels");
    lockm.once('value',function(snap){
      res.status(200).json({"doc":snap.val()});
    }) */
  }else{res.status(400).json({"msg":"Send correct uid"})}
},

modelDetail(obj,res){
  if(obj.mid){ //mongo
    model.findOne({"mid":obj.mid},(err,doc)=>{
      if(err){
        res.status(500).json({"msg":"something went wrong"})
      }
      else{
        if(doc){
          res.status(200).json({"doc":doc});
        }else{
          res.status(205).json({"msg":"Model doesn't exists of given mid"});
        }
      }
    })
  /*  mid=(obj.mid).toString();
    var id=mid.charAt(0);
    var model=modelRef.child(id);
    model1=model.child(obj.mid);
    model1.once('value',function(snap){
      res.status(200).json({"doc":snap.val()});
    })  */
  }else{res.json({"msg":"please send mid"});}
}
};

module.exports=modelOperation;



