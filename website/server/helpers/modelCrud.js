const admin=require('firebase-admin');

var db=admin.database();
          var userRef=db.ref("users");
          var modelRef=db.ref("models");

const modelOperation={
    lockModel(obj,res){
        admin.auth().verifyIdToken(obj.idToken)
          .then(function(decodedToken) {
            if(obj.uid==decodedToken.uid){
              var idRef= modelRef.child(obj.id);
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
                    })
            
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
  var user= userRef.child(obj.uid);
  user.once('value',function(snap){
    var arr=snap.val().uploadedModels;
    console.log(arr);
    var arr1=[obj.mid];
    var arr2=arr.concat(arr1);
    user.update({"uploadedModels":arr2})
    res.status(200).json({"msg":"done"});

  })
},

uploadModel(obj,res){
  admin.auth().verifyIdToken(obj.idToken)
  .then(function(decodedToken) {
    if(obj.uid == decodedToken.uid){
        var user= userRef.child(obj.uid);
        var pushy=user.child("uploadedModels");
        user.once('value',function(snap){
          console.log(snap.val().uploadedModels);
            var array=pushy.push();
            array.update({mid:obj.mid,name:obj.name});
           
           
        })
    }
    res.status(200).json({"msg":"uploaded"});
  }).catch(function(error) {
    res.status(300).json({"error":error});
    // Handle error
  });
 
},
displayModel(obj,res){
    if(obj.id){
        var midref=modelRef.child(obj.id);
        midref.once('value',function(snap){
          if(snap.val()){
              res.status(200).json({"doc":snap.val()});
          }else{res.status(205).json({"msg":"Model id not exists"});}
            
        })
    }else{
      res.ststus(300).json({"msg":"Please send id"});
    }
},
dislayLocked(obj,res){
    if(obj.uid){
      var lockRef=userRef.child(obj.uid);
      var lockm=lockRef.child("lockedModels");
      lockm.once('value',function(snap){
        res.status(200).json({"doc":snap.val()});
      })
    }else{res.status(400).json({"msg":"Send correct uid"})}
}
};

module.exports=modelOperation;



